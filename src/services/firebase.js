// ============================================================================
// Firebase Firestore Real-Time Cloud Sync Service
// ============================================================================
import { initializeApp, getApps, getApp } from 'firebase/app';
import { 
  getFirestore, 
  doc, 
  setDoc, 
  onSnapshot,
  collection
} from 'firebase/firestore';
import { defaultFirebaseConfig } from '../firebaseConfig';

const STORAGE_KEY_FIREBASE_CONFIG = 'bridal_hub_firebase_config_v1';

// Retrieve active config (from in-app settings or default file)
export function getStoredFirebaseConfig() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY_FIREBASE_CONFIG);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed && parsed.projectId) return parsed;
    }
  } catch (e) {
    console.warn('Error reading stored Firebase config', e);
  }
  return defaultFirebaseConfig;
}

export function saveStoredFirebaseConfig(config) {
  try {
    localStorage.setItem(STORAGE_KEY_FIREBASE_CONFIG, JSON.stringify(config));
  } catch (e) {
    console.error('Error saving Firebase config to storage', e);
  }
}

let firebaseApp = null;
let firestoreDb = null;

export function initFirebaseService(customConfig = null) {
  const config = customConfig || getStoredFirebaseConfig();
  if (!config || !config.projectId || !config.apiKey) {
    return null;
  }

  try {
    if (!getApps().length) {
      firebaseApp = initializeApp(config);
    } else {
      firebaseApp = getApp();
    }
    firestoreDb = getFirestore(firebaseApp);
    return firestoreDb;
  } catch (error) {
    console.error('Failed to initialize Firebase:', error);
    return null;
  }
}

// ----------------------------------------------------------------------------
// Real-time Cloud Document Listeners
// ----------------------------------------------------------------------------
const DOC_SHARED_HUB = 'wedding_data';
const COLLECTION_NAME = 'bridal_hubs';

export function subscribeToLiveHub(onDataReceived, onError) {
  const db = initFirebaseService();
  if (!db) {
    return null;
  }

  try {
    const hubDocRef = doc(db, COLLECTION_NAME, DOC_SHARED_HUB);
    const unsubscribe = onSnapshot(
      hubDocRef, 
      (snapshot) => {
        if (snapshot.exists()) {
          const liveData = snapshot.data();
          onDataReceived(liveData);
        } else {
          // Document doesn't exist yet in Cloud, let caller know so it can seed
          onDataReceived(null);
        }
      },
      (error) => {
        console.error('Firestore live subscription error:', error);
        if (onError) onError(error);
      }
    );
    return unsubscribe;
  } catch (err) {
    console.error('Error setting up snapshot listener:', err);
    if (onError) onError(err);
    return null;
  }
}

// ----------------------------------------------------------------------------
// Cloud Write Functions (Debounced or Immediate)
// ----------------------------------------------------------------------------
let syncTimeout = null;

export async function syncHubToCloud(hubData) {
  const db = initFirebaseService();
  if (!db) return false;

  try {
    const hubDocRef = doc(db, COLLECTION_NAME, DOC_SHARED_HUB);
    // Sanitize data for Firestore (avoid undefined values)
    const sanitized = JSON.parse(JSON.stringify(hubData));
    await setDoc(hubDocRef, sanitized, { merge: true });
    return true;
  } catch (error) {
    console.error('Error syncing hub to Firestore:', error);
    return false;
  }
}

export function queueCloudSync(hubData, delayMs = 600) {
  if (syncTimeout) clearTimeout(syncTimeout);
  syncTimeout = setTimeout(() => {
    syncHubToCloud(hubData);
  }, delayMs);
}

// ============================================================================
// Whimsical Powder Blue Bridal Party Hub Data (Adrianna & Thomas)
// ============================================================================

export const INITIAL_BRIDE = {
  id: 'bride-adrianna',
  name: 'Adrianna "Rain" Eskew',
  role: 'The Bride 👰',
  phone: '(555) 123-4567',
  isBride: true,
  isAdmin: true
};

export const INITIAL_BRIDESMAIDS = [
  {
    id: 'bm-payton',
    name: 'Payton',
    role: 'Maid of Honor 💎 (Co-Admin)',
    phone: '(555) 789-0123',
    dressStatus: 'Ready',
    hotelBooked: true,
    hotelRoommate: 'Bridal Suite',
    hotelNights: 'Fri - Sun',
    isBride: false,
    isAdmin: true
  },
  {
    id: 'bm-generic',
    name: 'Jane Doe',
    role: 'Bridesmaid',
    phone: '(555) 000-0000',
    dressStatus: 'Not Ordered',
    hotelBooked: false,
    hotelRoommate: 'TBD',
    hotelNights: 'Fri - Sun',
    isBride: false,
    isAdmin: false
  }
];

export const INITIAL_WEDDING_DETAILS = {
  bride: 'Adrianna Eskew',
  groom: 'Thomas Albritton',
  dateFormatted: 'Saturday, March 6, 2027',
  timeFormatted: 'Five Thirty in the Afternoon (5:30 PM)',
  venueName: 'The Ceremony & Reception',
  venueAddress: '2008 Middleground Road',
  cityStateZip: 'Waynesboro, GA 30830',
  photoUrl: './couple.jpg',
  invitationUrl: './invitation.jpg',
  quote: 'Two souls, one heartfelt beginning in the pines surrounded by family & friends.'
};

export const INITIAL_DRESS_REQUIREMENTS = {
  storeName: 'Show Me Your Mumu',
  colorName: 'Steel Blue Stretch',
  storeUrl: 'https://showmeyourmumu.com/collections/mumu-weddings-steel-blue',
  swatchUrl: 'https://showmeyourmumu.com/products/bridesmaid-fabric-swatch-steel-blue-stretch?variant=33108392673323',
  hexCodes: ['#5b768e', '#7d98ae', '#9cb5c9', '#c4d5e2'],
  orderDeadline: 'December 1, 2026 (allow 8-10 weeks for delivery & alterations)'
};

export const INITIAL_HOTEL_INFO = {
  name: 'Waynesboro Area Hotel & Suites Block',
  address: 'Waynesboro / Augusta Area, Georgia',
  rate: '$169 / night (Bridal Party Courtesy Block)',
  cutOffDate: 'January 15, 2027',
  groupCode: 'ESKEWALBRITTON27',
  bookingUrl: 'https://www.google.com/travel',
  shuttleNotes: 'Coordinated shuttle will run between the hotel block and 2008 Middleground Road before ceremony & after reception.'
};

export const INITIAL_CHECKLISTS = [
  {
    id: 't-1',
    category: 'Attire',
    title: 'Order Show Me Your Mumu "Steel Blue Stretch" dress',
    assignee: 'All Bridesmaids',
    dueDate: 'Dec 1, 2026',
    completed: false
  },
  {
    id: 't-2',
    category: 'Hotel',
    title: 'Reserve room under ESKEWALBRITTON27 group block',
    assignee: 'All Bridesmaids',
    dueDate: 'Jan 15, 2027',
    completed: false
  },
  {
    id: 't-3',
    category: 'Shower',
    title: 'Bridal shower coordination & games',
    assignee: 'Maid of Honor (Payton)',
    dueDate: 'Jan 30, 2027',
    completed: false
  },
  {
    id: 't-4',
    category: 'Day-Of',
    title: 'Arrive at 2008 Middleground Rd for morning hair & makeup',
    assignee: 'All Bridesmaids',
    dueDate: 'March 6, 2027',
    completed: false
  }
];

export const INITIAL_POLLS = [
  {
    id: 'p1',
    title: 'Wedding Morning Brunch & Refreshments 🥐☕',
    description: 'Select what treats you would love while getting hair & makeup done at Middleground Road:',
    isMultiSelect: true,
    allowAddOption: true,
    expiresAt: 'Open for Voting',
    options: [
      { id: 'o1', text: 'Bagels, Whipped Cream Cheese & Fresh Fruit 🥯🍓', voters: ['Jane Doe', 'Payton'] },
      { id: 'o2', text: 'Fresh Berries & Greek Yogurt Parfait Bar 🫐🍯', voters: [] },
      { id: 'o3', text: 'Iced Vanilla Lattes & Cold Brew Bar 🧋✨', voters: ['Jane Doe', 'Payton'] },
      { id: 'o4', text: 'Mimosas & Sparkling Peach Bellinis 🥂🍑', voters: ['Payton'] }
    ]
  },
  {
    id: 'p2',
    title: 'Bridal Party Manicure Preference 💅✨',
    description: 'Vote on your favorite manicure style for wedding weekend:',
    isMultiSelect: false,
    allowAddOption: true,
    expiresAt: 'Open for Voting',
    options: [
      { id: 'o201', text: 'Glazed Donut / Sheer Milky Chrome 🫧', voters: ['Jane Doe', 'Payton'] },
      { id: 'o202', text: 'Soft Steel Blue Accent Nails 🩵', voters: [] },
      { id: 'o203', text: 'Classic French Tip with Micro Sparkle 🕊️', voters: [] }
    ]
  }
];

export const INITIAL_MESSAGES = [
  {
    id: 'msg-1',
    sender: 'Adrianna "Rain" Eskew',
    role: 'The Bride 👰',
    text: 'Welcome to our whimsical wedding hub! 🩵✨ You can check dress requirements for our Show Me Your Mumu Steel Blue dresses, order your fabric swatch, coordinate hotel rooms, and vote in the polls!',
    timestamp: 'Today at 10:00 AM',
    reactions: { '❤️': 2, '🥂': 2, '✨': 3 }
  },
  {
    id: 'msg-2',
    sender: 'Payton',
    role: 'Maid of Honor 💎 (Co-Admin)',
    text: 'So excited for March 6th! 🌲💍 Make sure to order your Show Me Your Mumu Steel Blue swatches ($3) to match accessories!',
    timestamp: 'Today at 10:15 AM',
    reactions: { '❤️': 2, '✨': 2 }
  }
];

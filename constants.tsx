
import React from 'react';

export const COLORS = {
  GOLD: '#D4AF37',
  MAROON: '#800000',
  IVORY: '#FFFFF0',
  BLACK: '#1A1A1A',
};

export const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'Rooms', href: '#rooms' },
  { label: 'Dining', href: '#dining' },
  { label: 'Weddings', href: '#weddings' },
  { label: 'Amenities', href: '#amenities' },
  { label: 'Contact', href: '#contact' },
];

export const AMENITIES_LIST = [
  { name: 'Swimming Pool', icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg> },
  { name: 'Restaurant', icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg> },
  { name: 'Banquet Hall', icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg> },
  { name: 'Kids Play Area', icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> },
  { name: 'Conference Room', icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg> },
  { name: 'Lawn & Bonfire', icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.99 7.99 0 0120 13a7.99 7.99 0 01-2.343 5.657z" /></svg> },
  { name: 'Parking', icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg> },
  { name: 'Free WiFi', icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071a9.5 9.5 0 0114.142 0M6.343 17.657l1.414-1.414m12.728 0l-1.414 1.414m-12.02-12.02a15.5 15.5 0 0121.212 0" /></svg> },
];

export const ROOMS_DATA = [
  {
    id: 'deluxe-ac-1',
    name: 'Deluxe AC Room',
    description: 'Our standard for comfort. Featuring a luxurious King Bed, a dedicated TV Lounge Area for relaxation, and a modern attached bathroom. Perfect for business travelers and wedding guests.',
    image: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&q=80&w=1000',
    amenities: ['King Bed', 'TV Lounge Area', 'Attached Bathroom', 'Room Service', 'WiFi', 'Modern Decor']
  },
  {
    id: 'suite-royal-1',
    name: 'Royal Club Suite',
    description: 'An elevated experience with extra space. Includes a separate lounge area, premium furniture, and enhanced amenities for a truly royal stay on the Meerut highway.',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&q=80&w=1000',
    amenities: ['Extended TV Lounge', 'King Bed', 'Luxury Bath Fittings', 'Premium Service', 'Mini Fridge']
  }
];

export const MENU_IMAGES = [
  { id: 'm1', title: 'The Grand Buffet Spread', category: 'Buffet', image: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&q=80&w=800' },
  { id: 'm2', title: 'Royal Wedding Catering', category: 'Wedding Catering', image: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80&w=800' },
  { id: 'm3', title: 'Gourmet North Indian', category: 'North Indian', image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&q=80&w=800' },
  { id: 'm4', title: 'Catering Display Art', category: 'Wedding Catering', image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800' },
  { id: 'm5', title: 'Multi-Cuisine Buffet', category: 'Buffet', image: 'https://images.unsplash.com/photo-1543353071-873f17a7a088?auto=format&fit=crop&q=80&w=800' },
  { id: 'm6', title: 'Dessert Extravaganza', category: 'Buffet', image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&q=80&w=800' },
];

export const WEDDING_GALLERY = [
  { id: 'w1', title: 'Majestic Stage Lighting', image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=800' },
  { id: 'w2', title: 'Floral Reception Path', image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800' },
  { id: 'w3', title: 'Grand Wedding Lawn', image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=800' },
  { id: 'w4', title: 'Boutique Event Lighting', image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80&w=800' },
];

export const REVIEWS = [
  { id: 'r1', author: 'Anil Sharma', rating: 5, comment: 'The wedding lawn is massive. Hosted 800+ guests easily. The facade lighting at night is incredible!', category: 'Wedding' },
  { id: 'r2', author: 'Sanjay Malik', rating: 4, comment: 'Convenient stay on the NH-58 bypass. The TV lounge in the room was a great touch for our family stay.', category: 'Stay' },
  { id: 'r3', author: 'Ritu Kapoor', rating: 5, comment: 'The buffet catering is the highlight. Best North Indian food visuals and taste in Meerut.', category: 'Catering' },
];

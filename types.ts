
import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Room {
  id: string;
  name: string;
  description: string;
  image: string;
  amenities: string[];
}

export interface MenuItem {
  id: string;
  title: string;
  category: 'North Indian' | 'Wedding Catering' | 'Buffet' | 'Appetizers';
  image: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  comment: string;
  category: string;
}

export interface Amenity {
  name: string;
  // Use React.ReactNode instead of JSX.Element to ensure compatibility in non-TSX files
  icon: React.ReactNode;
}

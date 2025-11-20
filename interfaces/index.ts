// User interface example
export interface User {
  id: number;
  name: string;
  email: string;
}

// Project interface example
export interface Project {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

// API Response interface example
export interface ApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
}

// Navigation Item interface
export interface NavItem {
  label: string;
  href: string;
  icon?: string;
}

// Contact Form Data interface
export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}
export interface CardProps {
  title: string;
  content: string;
}

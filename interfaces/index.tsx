
// User interface
export interface User {
  id: number;
  name: string;
  email: string;
  createdAt?: Date;
}

// Project interface
export interface Project {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// API Response interface
export interface ApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
  statusCode: number;
}

// Form Data interface
export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

// Navigation Item interface
export interface NavItem {
  label: string;
  href: string;
  icon?: string;
}

// Error boundary props interface
export interface ErrorBoundaryProps {
  children: React.ReactNode;
}

// Error boundary state interface
export interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

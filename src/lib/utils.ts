import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Generate unique IDs
export function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

// Format dates
export function formatDate(date: string): string {
  if (!date) return '';
  const d = new Date(date);
  return d.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
}

// Date range formatter
export function formatDateRange(startDate: string, endDate: string, current: boolean): string {
  const start = formatDate(startDate);
  const end = current ? 'Present' : formatDate(endDate);
  return `${start} - ${end}`;
}

// Debounce function for auto-save
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

// Validate email
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Validate phone number
export function isValidPhone(phone: string): boolean {
  const phoneRegex = /^[\d\s\-\+\(\)]+$/;
  return phoneRegex.test(phone) && phone.replace(/\D/g, '').length >= 10;
}

// Validate URL
export function isValidUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

// Sanitize filename
export function sanitizeFilename(filename: string): string {
  return filename.replace(/[^a-z0-9_\-]/gi, '_').toLowerCase();
}

// Calculate ATS score (simplified version)
export function calculateATSScore(resume: any): number {
  let score = 0;
  
  // Personal info completeness (20 points)
  if (resume.personalInfo?.fullName) score += 5;
  if (resume.personalInfo?.email) score += 5;
  if (resume.personalInfo?.phone) score += 5;
  if (resume.personalInfo?.location) score += 5;
  
  // Content sections (40 points)
  if (resume.summary && resume.summary.length > 50) score += 10;
  if (resume.experience && resume.experience.length > 0) score += 15;
  if (resume.education && resume.education.length > 0) score += 10;
  if (resume.skills && resume.skills.length > 0) score += 5;
  
  // Details quality (40 points)
  const totalHighlights = resume.experience?.reduce(
    (acc: number, exp: any) => acc + (exp.highlights?.length || 0),
    0
  ) || 0;
  
  if (totalHighlights > 0) score += 10;
  if (totalHighlights > 5) score += 10;
  if (resume.projects && resume.projects.length > 0) score += 10;
  if (resume.certifications && resume.certifications.length > 0) score += 10;
  
  return Math.min(score, 100);
}

// Extract keywords from text
export function extractKeywords(text: string): string[] {
  const words = text.toLowerCase().split(/\W+/);
  const stopWords = new Set(['the', 'a', 'an', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for']);
  return words.filter(word => word.length > 3 && !stopWords.has(word));
}

// Deep clone object
export function deepClone<T>(obj: T): T {
  return JSON.parse(JSON.stringify(obj));
}

// Local storage helpers
export const storage = {
  get: (key: string) => {
    if (typeof window === 'undefined') return null;
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch {
      return null;
    }
  },
  set: (key: string, value: any) => {
    if (typeof window === 'undefined') return;
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('Storage error:', error);
    }
  },
  remove: (key: string) => {
    if (typeof window === 'undefined') return;
    try {
      window.localStorage.removeItem(key);
    } catch (error) {
      console.error('Storage error:', error);
    }
  },
};

import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { format, parseISO } from 'date-fns';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getStrapiMedia(url: string | null) {
  if (!url) return null;
  
  // If the URL is already an absolute URL, return it as is
  if (url.startsWith('http://') || url.startsWith('https://')) {
    return url;
  }
  
  // Otherwise, prefix it with the Strapi URL
  return `${process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337'}${url}`;
}

export function formatDate(dateString: string) {
  if (!dateString) return '';
  
  const date = parseISO(dateString);
  return format(date, 'MMMM dd, yyyy');
}

export function truncate(str: string, length: number) {
  if (!str) return '';
  return str.length > length ? `${str.substring(0, length)}...` : str;
}

export function capitalize(str: string) {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function slugify(text: string) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}
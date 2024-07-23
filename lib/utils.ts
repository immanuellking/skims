import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function getUID() {
  // Get the timestamp and convert 
  // it into alphanumeric input
  return Date.now().toString(36);
}
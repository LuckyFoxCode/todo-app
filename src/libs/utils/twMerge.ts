import { twMerge } from 'tailwind-merge';
import { type ClassValue, clsx } from 'clsx';

export const cn = (...classes: ClassValue[]) => twMerge(clsx(...classes));

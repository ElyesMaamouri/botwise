import {defineRouting} from 'next-intl/routing';
import {createNavigation} from 'next-intl/navigation';
 
export const routing = defineRouting({
  locales: ['en', 'fr'],
  defaultLocale: 'en',
  localePrefix: 'as-needed',
  // Disable auto-detection from Accept-Language header
  // so English is always the default on Vercel
  localeDetection: false
});
 
export const {Link, redirect, usePathname, useRouter, getPathname} =
  createNavigation(routing);

import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';
 
export default createMiddleware(routing);
 
export const config = {
  // Match root and all paths, except Next.js internals and static files
  matcher: ['/', '/(fr)/:path*', '/((?!_next|_vercel|.*\\..*).*)']
};

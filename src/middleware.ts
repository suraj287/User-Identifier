import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
 
const isDashboardRoute = createRouteMatcher(['/identifier(.*)']);

 
export default clerkMiddleware((auth, req) => {
  if (isDashboardRoute(req)) auth().protect();
});
 
export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
import {
  convexAuthNextjsMiddleware,
  createRouteMatcher,
  isAuthenticatedNextjs,
  nextjsMiddlewareRedirect,
} from "@convex-dev/auth/nextjs/server";

// Define private pages that require authentication
const isPrivatePage = createRouteMatcher([
  "/dashboard",
  "/profile",
  "/settings",
  "/product(.)",
]);

export default convexAuthNextjsMiddleware((request) => {
  // If trying to access a private page without authentication, redirect to register
  if (isPrivatePage(request) && !isAuthenticatedNextjs()) {
    return nextjsMiddlewareRedirect(request, "/register");
  }

  // If an authenticated user tries to access auth-related pages, redirect to home
  if (
    (request.nextUrl.pathname === "/auth" || 
     request.nextUrl.pathname === "/register" || 
     request.nextUrl.pathname === "/signup") &&
    isAuthenticatedNextjs()
  ) {
    return nextjsMiddlewareRedirect(request, "/");
  }
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};

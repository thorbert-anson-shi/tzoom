import type { NextRequest } from 'next/server';

const protectedRoutes = ["/profile"]
const publicRoutes = ["/login", "/signup"]

export function middleware(req: NextRequest) {
  const targetRoute = req.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.includes(targetRoute);
  const isPublicRoute = publicRoutes.includes(targetRoute);
}
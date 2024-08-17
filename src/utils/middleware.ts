import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const currentUser = req.cookies.get('currentUser')
}
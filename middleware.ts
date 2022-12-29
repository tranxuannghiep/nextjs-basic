import { NextRequest, NextResponse } from 'next/server';

export default function middleware(req: NextRequest) {
  const verify = req.cookies.get('access_token');
  const { url } = req;
  if (!verify && req.nextUrl.pathname.startsWith('/blog')) {
    const loginUrl = new URL('/login', url);
    return NextResponse.redirect(loginUrl);
  }
}

import { getRouteRegex } from 'next/dist/shared/lib/router/utils/route-regex';
import { NextRequest, NextResponse } from 'next/server';

export default function middleware(req: NextRequest) {
  const verify = req.cookies.get('access_token');
  const { url } = req;
  // if (!verify && req.nextUrl.pathname.startsWith('/blog')) {
  //   const loginUrl = new URL('/login', url);
  //   return NextResponse.redirect(loginUrl);
  // }
  const route = getRouteRegex('/blog/[slug]');
  if (!verify && route.re.test(req.nextUrl.pathname)) {
    const loginUrl = new URL('/login', url);
    return NextResponse.redirect(loginUrl);
  }
}

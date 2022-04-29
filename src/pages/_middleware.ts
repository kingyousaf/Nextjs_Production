import { NextRequest, NextResponse } from 'next/server'
import { getToken } from 'next-auth/jwt'

export async function middleware(req: NextRequest, _res: NextResponse) {
  if (req.nextUrl.pathname === '/middleware-protected') {
    const session = await getToken({ req, secret: process.env.SECRET })
    // You could also check for any property on the session object,
    // like role === "admin" or name === "John Doe", etc.
    if (!session) return NextResponse.redirect('/api/auth/signin')
    // If user is authenticated, continue.
  }
}

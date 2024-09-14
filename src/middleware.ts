import { NextRequest, NextResponse } from 'next/server'

export function middleware(req: NextRequest) {
    const acceptLanguage = req.headers.get('accept-language') || ''
    const language = acceptLanguage.split(',')[0]
    const response = NextResponse.next()

    response.cookies.set('language', language)

    return response
}

export const config = {
    matcher: ['/((?!api/).*)'],
}

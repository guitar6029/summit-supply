import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
    // check if user  is trying to access /checkout route directly
    if (req.nextUrl.pathname === '/checkout') {
        // check if user was coming from /cart route , otherwise redirect to /cart
        const referrer = req.headers.get("referer");

        if (!referrer || !referrer.includes("/cart")) {
            return NextResponse.redirect(new URL("/cart", req.url));
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        "/checkout",
        
    ]
}
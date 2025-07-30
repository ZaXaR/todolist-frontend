import { NextRequest, NextResponse } from "next/server";
import { EnumToken } from "./enums/auth.enum";

export async function middleware(request: NextRequest) {

    const accessToken = request.cookies.get(EnumToken.ACCESS_TOKEN)?.value;

    const isDashboardPage = request.url.includes("/dashboard");
    const isAuthPage = request.url.includes("/auth");

    if (!accessToken && isDashboardPage) return NextResponse.redirect(new URL("/auth", request.url))


    if (accessToken && isAuthPage) return NextResponse.redirect(new URL("/dashboard", request.url))
    // if (!token && isDashboardPage) {
    //     return NextResponse.redirect(new URL("/auth", request.url));
    // }

    // if (token && isAuthPage) {
    //     return NextResponse.redirect(new URL("/dashboard", request.url));
    // }

    return NextResponse.next();

}
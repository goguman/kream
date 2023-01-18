import type { NextRequest, NextFetchEvent } from 'next/server';
import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';


const secret = process.env.SECRET;

export async function middleware(req: NextRequest, res: NextFetchEvent ){
    const { pathname } = req.nextUrl;
    const session = await getToken({req, secret, raw: true});
    if(pathname.startsWith('/login') || pathname.startsWith('/register')){
        if(session){
            return NextResponse.redirect(new URL('/', req.url));
        }
    }
    if(pathname.startsWith('/myPage')){
        if(!session){
            return NextResponse.redirect(new URL('/login', req.url));
        }
    }
}


export const config = { matcher : ['/login','/register','/myPage'] }
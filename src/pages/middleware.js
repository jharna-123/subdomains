
import { NextResponse} from 'next/server';


export function middleware(request) {
  const hostname =request.headers ? request.headers.get('host') || '' : '';
  const url = request.url;

  if (hostname === 'localhost:3000') {
    return NextResponse.redirect(new URL('/local', url));
  }
 
  if (hostname.endsWith('.vercel.app')) {  
    return NextResponse.redirect(new URL('/vercel', url));
  }





  return NextResponse.next();
}
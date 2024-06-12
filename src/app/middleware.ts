import { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  console.log("midlify middleware right here");
}

//This would define which path is getting middleware, i leave it off so that would be global
// export const config = {
//     matcher: ['/about/:path*', '/dashboard/:path*'],
// }

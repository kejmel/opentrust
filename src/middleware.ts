import { authMiddleware, redirectToSignIn } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { clerkClient } from "@clerk/nextjs";

export default authMiddleware({
  async afterAuth(auth, req, evt) {

    console.log('tho');
    if (auth.userId == null) {
      return NextResponse.next();
    }

    const user = await clerkClient.users.getUser(auth.userId);
    
    if (
      user &&
      user.publicMetadata.role == null &&
      req.nextUrl.pathname !== "/set-role"
    ) {
      return NextResponse.redirect(new URL("/set-role", req.url));
    }

    console.log('after auth');
  },
  publicRoutes: ["/"]
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};

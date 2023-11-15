import { authMiddleware, redirectToSignIn } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { clerkClient } from "@clerk/nextjs";

export default authMiddleware({
    async afterAuth(auth, req, evt) {

    if (!auth.userId && !auth.isPublicRoute) {
      return redirectToSignIn({ returnBackUrl: req.url });
    }
    if(auth.userId == null) {
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
  },
  publicRoutes: ['/']
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};

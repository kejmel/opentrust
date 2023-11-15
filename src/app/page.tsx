import Image from "next/image";
import { SignedIn, SignInButton, SignUpButton, currentUser, SignedOut, clerkClient} from "@clerk/nextjs";
import Link from 'next/link'


export default async function Home() {
  const user = await currentUser?.();

  // await clerkClient.users.updateUserMetadata(user?.id, {
  //   publicMetadata: {
  //     role : "company"
  //   }
  // })

  return (
    <div className="flex justify-center items-center h-screen gap-1">
      <SignedOut>
        <SignInButton>
          <button className="auth-button">Login</button>
        </SignInButton>
        <SignUpButton>
          <button className="auth-button">Register</button>
        </SignUpButton>
      </SignedOut>
      <SignedIn>
        {/* <p className="text-white">Hi {JSON.stringify(user?.publicMetadata, null, 2)}</p> */}
      <Link className="dashboard-button" href="/dashboard">Dashboard</Link>
      </SignedIn>
    </div>
  );
}

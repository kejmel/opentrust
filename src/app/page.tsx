import Image from "next/image";
import { SignedIn, UserButton } from "@clerk/nextjs";
import { SignInButton } from "@clerk/nextjs";
import { SignUpButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs";
import Link from 'next/link'
import { SignedOut } from "@clerk/nextjs";

export default async function Home() {
  const user = await currentUser();

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
      <Link className="dashboard-button" href="/dashboard">Dashboard</Link>
      </SignedIn>
    </div>
  );
}

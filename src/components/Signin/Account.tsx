"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import { CircleUser } from 'lucide-react';

export default function Account() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {session ? (
        <div className="flex flex-row items-center gap-2">
          <CircleUser className="w-8 h-8" />
          <p>Welcome, {session.user?.name || "User"}!</p>
          <button onClick={() => signOut()} className="cursor-pointer">
            Logout
          </button>
        </div>
      ) : (
        <button  onClick={() => signIn("google")} className="cursor-pointer">
          Login with Google
        </button>
      )}
    </div>
  );
}

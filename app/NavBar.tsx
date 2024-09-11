"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  const { status, data: session } = useSession();

  return (
    <div className="flex space-x-3 bg-slate-200 p-3">
      <Link href="/" className="mr-5">
        Next.js
      </Link>
      {status === "authenticated" && (
        <>
          {session.user!.name}
          <Link href={"/api/auth/signout"} className="ml-3">
            Sign Out
          </Link>
        </>
      )}
      {status === "unauthenticated" && (
        <Link href="/api/auth/signin">Login</Link>
      )}
    </div>
  );
};

export default NavBar;

"use client";
import { signOut } from "next-auth/react";

const LogoutBtn = () => {
  return (
    <button
      className="btn"
      onClick={() => signOut({ callbackUrl: "/sign-in" })}
    >
      Sign Out
    </button>
  );
};

export default LogoutBtn;

"use client";
import { signOut } from "next-auth/react";
import React from "react";

const AdminProfile = () => {
  return (
    <div>
      Admin Profile
      <button
        className="bg-white p-2 rounded-md active:scale-95 trainsition-all duration-300"
        onClick={() => signOut({ callbackUrl: "/sign-in" })}
      >
        Sign out
      </button>
    </div>
  );
};

export default AdminProfile;

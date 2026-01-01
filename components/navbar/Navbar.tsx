import React from "react";
import Links from "./links/Links";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    // <div className="bg-gray-900 w-full">
      <div className="max-w-[1260px] w-full mx-auto py-6 px-6 flex items-center justify-end">
        <Link href="/" className="mr-auto flex items-center">
          <h2 className="font-semibold">Edwin Pelpuo Kayang</h2>
        </Link>
        <Links />
      </div>
    // </div>
  );
};

export default Navbar;

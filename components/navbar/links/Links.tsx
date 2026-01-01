"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

const links = [
    {
      title: "About ",
      path: "/",
    },
    {
      title: "Skills",
      path: "/#skills",
    },
    {
      title: "Publications",
      path: "/#publications",
    },
    {
      title: "Portfolio",
      path: "/#portfolio",
    },
  ];

const Links = () => {
    const pathName = usePathname();
  return (
    <div>
        {links.map((link) => (
           <Link
           key={link.title}
           href={link.path}
           className={`${`px-6 text-sm font-semibold hover:text-blue-300`} ${
             pathName === link.path && ``
           }`}
         >
           {link.title}
         </Link>
        ))}
    </div>
  )
}

export default Links

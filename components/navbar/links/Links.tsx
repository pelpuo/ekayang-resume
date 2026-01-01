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
      title: "Research",
      path: "/#research",
    },
    {
      title: "Publications",
      path: "/#publications",
    },
    {
      title: "Artifacts",
      path: "/#artifacts",
    },
  ];

const Links = () => {
    const pathName = usePathname();
  return (
    <div className='sm:block flex flex-wrap'>
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

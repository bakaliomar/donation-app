'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {

  return (
    <div className="navbar bg-base-100">
      <div className="container mx-auto px-4">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">Donation</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
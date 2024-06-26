/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/r7QN3nPxtVi
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuContent,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";
import { Profile } from "./Profile";
import { ModeToggle } from "@/components/ModeToggle";
import { ReactNode } from "react";
import {
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  Sheet,
} from "@/components/ui/sheet";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Dialog, DialogClose } from "@/components/ui/dialog";
import { Folder, HomeIcon, Settings } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export function NavbarTop() {
  return (
    <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6">
      <Link href="/dashboard">
        <div className="flex items-center gap-2">
          <HomeIcon className="h-6 w-6" />
          <span className="text-lg font-bold">Perfect Day AI</span>
        </div>
      </Link>
      <Sheet>
        <SheetTrigger asChild>
          <Button className="lg:hidden" size="icon" variant="outline">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <Link className="mr-6 flex items-center gap-2" href="#">
            <MountainIcon className="h-6 w-6" />
            <span className="text-lg font-bold">Acme Calendar</span>
          </Link>
          <div className="grid gap-2 py-6">
            <Link
              className="flex w-full items-center py-2 text-lg font-semibold"
              href="#"
            >
              Home
            </Link>
            <Link
              className="flex w-full items-center py-2 text-lg font-semibold"
              href="#"
            >
              Events
            </Link>
            <Link
              className="flex w-full items-center py-2 text-lg font-semibold"
              href="#"
            >
              Calendar
            </Link>
            <Link
              className="flex w-full items-center py-2 text-lg font-semibold"
              href="#"
            >
              Settings
            </Link>
          </div>
        </SheetContent>
      </Sheet>
      <div className="ml-auto flex items-center gap-4">
        <Link href="/dashboard/calendar">
          <CalendarIcon className="h-5 w-5" />
          <span className="sr-only">Calendar</span>
        </Link>
        <Profile />
        {/* <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              <UserIcon className="mr-2 h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Sign Out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu> */}
      </div>
    </header>
  );
}

function CalendarIcon(props: { className: string }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  );
}

function MenuIcon(props: { className: string }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function MountainIcon(props: { className: string }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

function UserIcon(props: { className: string }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

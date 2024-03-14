"use client";
import { Button } from "@/components/ui/button";
import {
  LoginLink,
  LogoutLink,
  useKindeBrowserClient,
} from "@kinde-oss/kinde-auth-nextjs";
// import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

function Header() {
  const pathname = useParams();
  const { user } = useKindeBrowserClient();

  //   console.log(pathname);
  const Menu = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "Explore",
      path: "/explore",
    },
    {
      id: 3,
      name: "Contact Us",
      path: "/contact",
    },
  ];
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-10 p-4 shadow-sm">
        <Image
          src="/logo.svg"
          alt="logo"
          width={160}
          height={60}
          className="w-auto h-auto"
          priority={true}
        />
        <ul className="md:flex gap-8 hidden">
          {Menu.map((menu) => (
            <Link href={menu.path} key={menu.id}>
              <li
                className={`hover:text-primary cursor-pointer hover:scale-105 transition-all ease-in-out${
                  pathname === menu.path && " text-primary"
                }`}
              >
                {menu.name}
              </li>
            </Link>
          ))}
        </ul>
      </div>
      {user ? (
        <div>
          <Popover>
            <PopoverTrigger>
              <Image
                src={user?.picture}
                alt="user"
                width={50}
                height={50}
                className="w-50 h-50 rounded-full"
              />
            </PopoverTrigger>
            <PopoverContent className="w-44">
              <ul className="flex flex-col gap-2">
                <li className="cursor-pointer hover:bg-slate-100 p-2 rounded-md">
                  Profile
                </li>
                <li className="cursor-pointer hover:bg-slate-100 p-2 rounded-md">
                  My Boking
                </li>
                <li className="cursor-pointer hover:bg-slate-100 p-2 rounded-md">
                  <LogoutLink>Logout</LogoutLink>
                </li>
              </ul>
            </PopoverContent>
          </Popover>
        </div>
      ) : (
        <LoginLink>
          <Button className=" text-sm mr-5 md:mr-0">Get Started</Button>
        </LoginLink>
      )}
    </div>
  );
}

export default Header;

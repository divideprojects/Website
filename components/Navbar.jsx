// Copyright (C) 2022 Jayant Hegde Kageri
//
// This file is part of Divide Projects Website.
//
// Divide Projects Website is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Divide Projects Website is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Divide Projects Website.  If not, see <http://www.gnu.org/licenses/>.

import Image from "next/image";
import Link from "next/link";
import { Disclosure } from "@headlessui/react";
import { HiMenu, HiX } from "react-icons/hi";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();
  const navigation = [
    { name: "Home", href: "/", current: router.pathname === "/" },
    { name: "About Us", href: "/about", current: router.pathname === "/about" },
    { name: "Our Team", href: "/team", current: router.pathname === "/team" },
    {
      name: "Contact Us",
      href: "/contact",
      current: router.pathname === "/contact",
    },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <Disclosure as="nav" className="bg-gray-800 text-white font-inter">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 border-b border-b-black select-none">
            <div className="relative flex items-center justify-between h-16">
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <Link href={"/"} passHref>
                  <div className="flex-shrink-0 flex items-center mb-4">
                    <div className="block h-8 w-auto mt-5 cursor-pointer">
                      <Image
                        className=""
                        src="/logo-white.png"
                        alt="Divide Projects"
                        width={32}
                        height={32}
                      />

                      {/* For Static Build */}
                      {/* <img
                        className="w-8 h-8"
                        src="/logo-white.png"
                        alt="Divide Projects"
                        width={32}
                        height={32}
                      /> */}
                    </div>
                    <span className="font-inter text-3xl hidden lg:block h-8 w-auto mt-4 text-slate-200 cursor-pointer">
                      Divide Projects
                    </span>
                  </div>
                </Link>
                <div className="hidden sm:block sm:ml-6 mt-4">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link key={item.name} href={item.href}>
                        <a
                          className={classNames(
                            item.current
                              ? "bg-gray-900 text-white"
                              : "text-gray-300 hover:text-gray-500",
                            "px-3 py-2 rounded-md text-sm font-medium mt-1"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </a>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Menu</span>
                  {open ? (
                    <HiX className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <HiMenu className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden select-none">
            <div className="flex flex-col space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button key={item.name}>
                  <Link href={item.href}>
                    <a
                      className={classNames(
                        item.current
                          ? "bg-gray-900 text-white"
                          : "text-gray-500 hover:text-gray-900",
                        "block px-3 py-2 rounded-md text-base font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </a>
                  </Link>
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

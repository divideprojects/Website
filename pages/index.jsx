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
import team from "../img/team.png";

export default function Index() {
  return (
    <>
      <div className="relative bg-gray-900 overflow-hidden font-inter">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-gray-900 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <svg
              className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-gray-900 transform translate-x-1/2"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>

            <main className="mt-8 mx-auto max-w-7xl px-4 sm:mt-9 sm:px-6 md:mt-12 lg:mt-12 lg:px-8 xl:mt-18">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-slate-300 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline sm:text-2xl md:text-4xl text-cyan-500">
                    Divide Projects
                  </span>
                  <br className="xl:flex hidden" />
                  <span className="block xl:inline">
                    Working hard to enrich your
                  </span>
                  <br className="xl:flex hidden" />
                  <span className="block text-indigo-500 xl:inline">
                    {" "}
                    online experience
                  </span>
                </h1>
                <p className="mt-3 text-base text-gray-400 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  We are working to make the Online responsive, fast, and free
                  for everyone.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <Link href={"/contact"}>
                      <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10 select-none">
                        Contact Us
                      </a>
                    </Link>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <Link href={"/team"}>
                      <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10 select-none">
                        Our Team
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <Image
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full select-none"
            src={team.src}
            alt="Team Divide Projects"
            width={2850}
            height={2850}
          />

          {/* For Static Build */}
          {/* <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full select-none"
            src={team.src}
            alt="Team Divide Projects"
            width={2850}
            height={2850}
          /> */}
        </div>
      </div>
    </>
  );
}

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

import Head from "next/head";

export default function Error() {
  return (
    <>
      <Head>
        <title>404: Not Found</title>
      </Head>
      <body className="antialiased">
        <div className="relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center sm:pt-0">
          <div className="max-w-xl mx-auto sm:px-6 lg:px-8">
            <div className="flex items-center pt-8 sm:justify-start sm:pt-0">
              <div className="px-4 text-lg text-gray-500 border-r border-gray-400 tracking-wider">
                404
              </div>

              <div className="ml-4 text-lg text-gray-500 uppercase tracking-wider">
                Not Found
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}

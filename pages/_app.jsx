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
import Navbar from "../components/Navbar";
import "../styles/globals.css";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  const keywords =
    "divide, projects, divide projects, @divideprojects, divideprojects, divkix, annihilatorrr, itsdhruvarora, jayantkageri, telegram, divide projects telegram, divide-projects, divide projects github, alita, alita robot, digital, organization, Divide, Projects, Divide Projects, @DivideProjects, DivideProjects, Divkix, Alita Robot, Alita, Alita Bot, Telegram, Group Manager, Group Management, Bot, GitHub, github, telegram, Divanshu Chauhan, divanshu chauhan, python, Python, Developer, developer, developers, Developers, golang, GoLang, go, Go, Go Lang, go lang, web dev, website developer, frontend, backend, fullstack, developer, Develoepr, Developers, Developers, Org, Organization, Team, team, automation, web, Web";
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />

        <title>Divide Projects</title>
        <meta
          content="description"
          name="Divide Projects is a digital organization that is making the internet responsive, efficient, and free for everyone."
        />
        <meta content="keywords" name={keywords} />
        <meta
          name=""
          content="Divide Projects is a digital organization that is making the internet responsive, efficient, and free for everyone."
        />
        <meta content="" name={keywords} />
        <meta name="apple-mobile-web-app-capable" content="yes" />

        {/* Original SEO */}
        <meta property="og:title" content="Divide Projects" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.divideprojects.com" />
        <meta
          property="og:description"
          content="Divide Projects is a digital organization that is making the internet responsive, efficient, and free for everyone."
        />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:site_name" content="Divide Projects" />
        <meta
          property="article:author"
          content="https://github.com/DivideProjects"
        />
        <meta
          property="article:publisher"
          content="https://www.divideprojects.com/"
        />
        <meta
          property="og:image"
          content="/favicons/android-icon-192x192.png"
        />

        {/* Twitter SEO */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="Divide Projects" />
        <meta name="twitter:creator" content="Divide Projects" />
        <meta name="twitter:title" content="Divide Projects" />
        <meta
          name="twitter:description"
          content="Divide Projects is a digital organization that is making the internet responsive, efficient, and free for everyone."
        />
        <meta
          name="twitter:image"
          content="/favicons/android-icon-192x192.png"
        />

        {/* eslint-disable-next-line @next/next/no-css-tags */}
        <link rel="stylesheet" href="/interfont.ttf" />

        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/favicons/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/favicons/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/favicons/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/favicons/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/favicons/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/favicons/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/favicons/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/favicons/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/favicons/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicons/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicons/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta
          name="msapplication-TileImage"
          content="/favicons/ms-icon-144x144.png"
        />
        <meta name="theme-color" content="#111827" />
      </Head>
      <section className="bg-gray-900 min-h-screen" id="website">
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </section>
    </>
  );
}

export default MyApp;

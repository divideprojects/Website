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
import Member from "../components/Member";
import divkix from "../img/divkix.png";
import annihilatorrrr from "../img/annihilatorrrr.png";
import jayantkageri from "../img/jayantkageri.png";
import itsdhruvarora from "../img/itsdhruvarora.jpg";

export default function Team() {
  return (
    <>
      <Head>
        <title>Our Team | Divide Projects</title>
      </Head>

      <section className="container min-h-screen bg-gray-900">
        <h1 className="text-4xl text-center mb-4 text-white uppercase font-inter select-none mt-12">
          Our Team
        </h1>
        <div className="flex flex-wrap mb-9">
          <Member
            img={divkix.src}
            name="Divanshu Chauhan"
            skills="Python and GoLang Developer"
            location="Tempe, Arizona"
            github="Divkix"
            mail="chauhan.divanshu@gmail.com"
          />
          <Member
            img={annihilatorrrr.src}
            name="Annihilator Spark"
            skills="Python and GoLang Developer"
            location="Dhanbad, Jharkhand"
            github="annihilatorrrr"
            mail="annihilatorspark@gmail.com"
          />
          <Member
            img={jayantkageri.src}
            name="Jayant Hegde Kageri"
            skills="Full Stack Developer, Python Developer"
            location="Sirsi, India"
            github="jayantkageri"
            mail="jayantkageri@gmail.com"
          />
          <Member
            img={itsdhruvarora.src}
            name="Dhruv Arora"
            skills="Frontend Developer, Python Developer"
            location="Chandigarh, India"
            github="itsdhruvarora"
            mail="dhruvarora2108@gmail.com"
          />
        </div>
      </section>
    </>
  );
}

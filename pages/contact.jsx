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

import { useState, useRef } from "react";
import Head from "next/head";

export default function Contact() {
  // Intialize some states
  const [info, setInfo] = useState({});
  const [utils, setUtils] = useState({});

  // Regex Expression to check email is valid or not
  const eMailRegex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  // ref of the form
  const ref = useRef();

  // Function to handle the change of the form
  const onChange = (e) => {
    // Set the fields
    return setInfo({ ...info, [e.target.name]: e.target.value });
  };

  // Function to scroll to top
  const scrollToTop = () => window.scrollTo(0, 0);

  // Function to show the error message
  const showError = (error) => {
    // First: SCROLL TO TOP
    scrollToTop();
    // Second: SET THE ERROR
    setUtils({ error: error });
    // Third: SET THE ERROR TO NULL AFTER 10 SECONDS
    setTimeout(() => {
      setUtils({ error: null });
    }, 10000);
  };

  // Function to show the success message
  const showSuccess = (msg) => {
    // First: SCROLL TO TOP
    scrollToTop();
    // Second: SET THE SUCCESS
    setUtils({ success: msg });
    // Third: SET THE SUCCESS TO NULL AFTER 10 SECONDS
    setTimeout(() => {
      setUtils({ success: null });
    }, 10000);
  };

  // Function to handle the submit of the form
  const handleSubmit = async (e) => {
    // Prevent the reload action
    e.preventDefault();

    // Set Loading to true
    setUtils({ loading: true });

    // Check all the fields are filled
    if (!info.name || !info.email || !info.message) {
      ref.current.reset();
      setInfo({});
      return showError("Please fill out all the fields!");
    }

    // Check the email is valid or not
    if (!info.email.toString().toLowerCase().match(eMailRegex)) {
      ref.current.reset();
      setInfo({});
      return showError("Invalid eMail ID!");
    }

    // Send the data to the API
    const data = await fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "*/*",
        key: "contact.divideprojects.web",
        "Access-Control-Allow-Origin": "*/*",
        "Access-Control-Allow-Methods": "*",
        "Access-Control-Allow-Headers": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(info),
    });

    // Reset the form
    setInfo({});
    ref.current.reset();

    // Check the response
    const res = await data.json();

    // If the response is success show the success message
    if (res.sent) {
      setUtils({ loading: false });
      return showSuccess("Successfully submitted your message.");
    }

    // If the response is error show the Internal Error Occured message
    setUtils({ loading: false });
    return showError(
      res.reason
        ? res.reason
        : "An error occured while submitting your message, Please try again later."
    );
  };

  return (
    <>
      <Head>
        <title>Contact Us | Divide Projects</title>
      </Head>
      <section className="w-full max-w-2xl min-h-screen px-6 py-4 mx-auto rounded-md shadow-md dark:bg-gray-900">
        {utils.error && (
          <div className="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
            <div className="flex items-center justify-center w-12 bg-red-500">
              <svg
                className="w-6 h-6 text-white fill-current"
                viewBox="0 0 40 40"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z" />
              </svg>
            </div>

            <div className="px-4 py-2 -mx-3">
              <div className="mx-3">
                <span className="font-semibold text-red-500 dark:text-red-400">
                  Error
                </span>
                <p className="text-sm text-gray-600 dark:text-gray-200">
                  {utils.error}
                </p>
              </div>
            </div>
          </div>
        )}
        {utils.success && (
          <div className="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
            <div className="flex items-center justify-center w-12 bg-emerald-500">
              <svg
                className="w-6 h-6 text-white fill-current"
                viewBox="0 0 40 40"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z" />
              </svg>
            </div>

            <div className="px-4 py-2 -mx-3">
              <div className="mx-3">
                <span className="font-semibold text-emerald-500 dark:text-emerald-400">
                  Success
                </span>
                <p className="text-sm text-gray-600 dark:text-gray-200">
                  {utils.success}
                </p>
              </div>
            </div>
          </div>
        )}
        <h1 className="text-4xl text-center mb-4 text-white uppercase font-inter select-none mt-8">
          Get in Touch
        </h1>

        <div className="grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2 md:grid-cols-3 text-center">
          <a
            href="https://t.me/DivideProjects"
            target={"_blank"}
            rel="noreferrer"
            className="flex flex-col items-center px-4 py-3 transition-colors duration-200 transform rounded-md text-gray-200 hover:bg-blue-500"
          >
            <svg
              fill="currentColor"
              className="w-5 h-5 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
              width="50px"
              height="50px"
            >
              <path d="M 44.376953 5.9863281 C 43.889905 6.0076957 43.415817 6.1432497 42.988281 6.3144531 C 42.565113 6.4845113 40.128883 7.5243408 36.53125 9.0625 C 32.933617 10.600659 28.256963 12.603668 23.621094 14.589844 C 14.349356 18.562196 5.2382813 22.470703 5.2382812 22.470703 L 5.3046875 22.445312 C 5.3046875 22.445312 4.7547875 22.629122 4.1972656 23.017578 C 3.9185047 23.211806 3.6186028 23.462555 3.3730469 23.828125 C 3.127491 24.193695 2.9479735 24.711788 3.015625 25.259766 C 3.2532479 27.184511 5.2480469 27.730469 5.2480469 27.730469 L 5.2558594 27.734375 L 14.158203 30.78125 C 14.385177 31.538434 16.858319 39.792923 17.402344 41.541016 C 17.702797 42.507484 17.984013 43.064995 18.277344 43.445312 C 18.424133 43.635633 18.577962 43.782915 18.748047 43.890625 C 18.815627 43.933415 18.8867 43.965525 18.957031 43.994141 C 18.958531 43.994806 18.959437 43.99348 18.960938 43.994141 C 18.969579 43.997952 18.977708 43.998295 18.986328 44.001953 L 18.962891 43.996094 C 18.979231 44.002694 18.995359 44.013801 19.011719 44.019531 C 19.043456 44.030655 19.062905 44.030268 19.103516 44.039062 C 20.123059 44.395042 20.966797 43.734375 20.966797 43.734375 L 21.001953 43.707031 L 26.470703 38.634766 L 35.345703 45.554688 L 35.457031 45.605469 C 37.010484 46.295216 38.415349 45.910403 39.193359 45.277344 C 39.97137 44.644284 40.277344 43.828125 40.277344 43.828125 L 40.310547 43.742188 L 46.832031 9.7519531 C 46.998903 8.9915162 47.022612 8.334202 46.865234 7.7402344 C 46.707857 7.1462668 46.325492 6.6299361 45.845703 6.34375 C 45.365914 6.0575639 44.864001 5.9649605 44.376953 5.9863281 z M 44.429688 8.0195312 C 44.627491 8.0103707 44.774102 8.032983 44.820312 8.0605469 C 44.866523 8.0881109 44.887272 8.0844829 44.931641 8.2519531 C 44.976011 8.419423 45.000036 8.7721605 44.878906 9.3242188 L 44.875 9.3359375 L 38.390625 43.128906 C 38.375275 43.162926 38.240151 43.475531 37.931641 43.726562 C 37.616914 43.982653 37.266874 44.182554 36.337891 43.792969 L 26.632812 36.224609 L 26.359375 36.009766 L 26.353516 36.015625 L 23.451172 33.837891 L 39.761719 14.648438 A 1.0001 1.0001 0 0 0 38.974609 13 A 1.0001 1.0001 0 0 0 38.445312 13.167969 L 14.84375 28.902344 L 5.9277344 25.849609 C 5.9277344 25.849609 5.0423771 25.356927 5 25.013672 C 4.99765 24.994652 4.9871961 25.011869 5.0332031 24.943359 C 5.0792101 24.874869 5.1948546 24.759225 5.3398438 24.658203 C 5.6298218 24.456159 5.9609375 24.333984 5.9609375 24.333984 L 5.9941406 24.322266 L 6.0273438 24.308594 C 6.0273438 24.308594 15.138894 20.399882 24.410156 16.427734 C 29.045787 14.44166 33.721617 12.440122 37.318359 10.902344 C 40.914175 9.3649615 43.512419 8.2583658 43.732422 8.1699219 C 43.982886 8.0696253 44.231884 8.0286918 44.429688 8.0195312 z M 33.613281 18.792969 L 21.244141 33.345703 L 21.238281 33.351562 A 1.0001 1.0001 0 0 0 21.183594 33.423828 A 1.0001 1.0001 0 0 0 21.128906 33.507812 A 1.0001 1.0001 0 0 0 20.998047 33.892578 A 1.0001 1.0001 0 0 0 20.998047 33.900391 L 19.386719 41.146484 C 19.35993 41.068197 19.341173 41.039555 19.3125 40.947266 L 19.3125 40.945312 C 18.800713 39.30085 16.467362 31.5161 16.144531 30.439453 L 33.613281 18.792969 z M 22.640625 35.730469 L 24.863281 37.398438 L 21.597656 40.425781 L 22.640625 35.730469 z" />
            </svg>

            <span className="mt-2">@DivideProjects</span>
          </a>

          <a
            href="https://github.com/DivideProjects"
            target={"_blank"}
            rel="noreferrer"
            className="flex flex-col items-center px-4 py-3 transition-colors duration-200 transform rounded-md text-gray-200 dark:hover:bg-blue-500"
          >
            <svg
              className="w-5 h-5 fill-current"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z"></path>
            </svg>
            <span className="mt-2">@DivideProjects</span>
          </a>

          <a
            href="mailto:contact@divideprojects.com"
            target={"_blank"}
            rel="noreferrer"
            className="flex flex-col items-center px-4 py-3 transition-colors duration-200 transform rounded-md text-gray-200 hover:bg-blue-500"
          >
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>

            <span className="mt-2">contact@divideprojects.com</span>
          </a>
        </div>

        <div className="mt-6">
          <form onSubmit={handleSubmit} ref={ref}>
            <div className="items-center -mx-2 md:flex">
              <div className="w-full mx-2">
                <label className="block mb-2 text-sm font-medium text-gray-200">
                  Name
                </label>

                <input
                  className="block w-full px-4 py-2 border rounded-md bg-gray-800 text-gray-300 border-gray-600  focus:ring-blue-300 focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  type="text"
                  id="name"
                  name="name"
                  onChange={onChange}
                  value={info.name}
                  required
                  disabled={utils.loading}
                />
              </div>

              <div className="w-full mx-2 mt-4 md:mt-0">
                <label className="block mb-2 text-sm font-medium text-gray-200">
                  E-mail
                </label>

                <input
                  className="block w-full px-4 py-2 border rounded-md bg-gray-800 text-gray-300 border-gray-600 focus:ring-blue-300 focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  type="email"
                  id="email"
                  name="email"
                  onChange={onChange}
                  value={info.email}
                  required
                  disabled={utils.loading}
                />
              </div>
            </div>

            <div className="w-full mt-4">
              <label className="block mb-2 text-sm font-medium text-gray-200">
                Message
              </label>

              <textarea
                className="block w-full h-40 px-4 py-2 border rounded-md bg-gray-800 text-gray-300 border-gray-600 focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                id="message"
                name="message"
                onChange={onChange}
                required
                disabled={utils.loading}
              >
                {info.message}
              </textarea>
            </div>

            <div className="flex justify-center mt-6">
              <button
                className="px-4 py-2 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
                type="submit"
                disabled={utils.loading}
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

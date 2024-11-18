"use client";
import Typed from 'typed.js';
import React, { useRef, useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Adeptus...'],
      typeSpeed: 75,
    });
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center w-full py-8 md:py-12 px-4 md:px-6">
      <div className="container max-w-screen-2xl w-full mx-auto">
        <section className="flex flex-col lg:flex-row items-center justify-center gap-8 md:gap-10 w-full">
          <div className="w-full lg:w-[600px] flex justify-center flex-shrink-0 px-4 sm:px-8 lg:px-0">
            <img
              src="logo.png"
              alt="logo"
              className="w-full max-w-[400px] lg:max-w-full object-contain"
            />
          </div>

          <div className="w-full lg:w-[900px] flex-shrink-0 space-y-4 md:space-y-6 px-4 sm:px-8 lg:px-0">
            <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800 dark:text-gray-200 text-center ">
              Welcome to <span ref={el}></span>
            </h1>

            <p className="text-xl sm:text-2xl md:text-3xl text-gray-500 dark:text-gray-300 text-center ">
              Technical Club of SRM Easwari Engineering College
            </p>

            <div className="space-y-4">
              <p className="text-base sm:text-lg md:text-xl text-gray-500 dark:text-gray-300 text-center lg:text-left">
                Building tomorrow's tech leaders through practical knowledge, innovation, and collaborative learning. Founded with the vision of bridging the gap between theoretical concepts and practical applications.
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-500 dark:text-gray-300 text-center lg:text-left">
                Our mission is to foster a collaborative environment where members can learn, grow, and contribute to the ever-evolving tech landscape.
              </p>
            </div>

            <p className="text-lg sm:text-xl md:text-2xl text-gray-500 dark:text-gray-300 text-center">
              An Initiative by Department of CSE - AI & ML.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-6 sm:pt-8">
              <Link
                href="/article"
                className="group relative px-6 sm:px-8 py-3 sm:py-4 flex-1 flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-r from-blue-500/10 to-blue-500/20 hover:from-blue-500/20 hover:to-blue-500/30 transition-all duration-300"
              >
                <span className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></span>
                <span className="relative group-hover:text-white font-medium text-base sm:text-lg transition-colors duration-300 flex items-center gap-2">
                  Explore Articles
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Link>

              <Link
                href="/event"
                className="group relative px-6 sm:px-8 py-3 sm:py-4 flex-1 flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-r from-purple-500/10 to-purple-500/20 hover:from-purple-500/20 hover:to-purple-500/30 transition-all duration-300"
              >
                <span className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></span>
                <span className="relative group-hover:text-white font-medium text-base sm:text-lg transition-colors duration-300 flex items-center gap-2">
                  Explore Events
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

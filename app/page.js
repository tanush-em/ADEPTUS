"use client";
import { Button } from "@/components/ui/button";
import Typed from 'typed.js';
import React, { useRef, useEffect } from 'react';

export default function Home() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Welcome to Adeptus...'],
      typeSpeed: 75,
    });
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="container max-w-6xl mx-auto px-6">
        <section className="flex flex-col lg:flex-row items-center justify-center gap-12">
          <div className="lg:w-[500px] flex justify-center flex-shrink-0">
            <img
              src="logo.png"
              alt="logo"
              className="w-full object-contain"
            />
          </div>
          <div className="lg:w-[500px] flex-shrink-0 space-y-4">
            <h1 className="text-7xl font-bold text-gray-800 dark:text-gray-200">
              <span ref={el}></span>
            </h1>
            <p className="text-xl text-gray-500 dark:text-gray-300">
              A TECHNICAL CLUB OF SRM EASWARI ENGINEERING COLLEGE
            </p>
            <p className="text-xl text-gray-500 dark:text-gray-300">
              We Aim to Enhance Technical Skills and Spread Technological Awareness among the Engineering Community.
            </p>
            <p className="text-xl text-gray-500 dark:text-gray-300">
              An Initiative by Department of CSE-AIML, EEC.
            </p>
            <div className="flex space-x-4">
              <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" href="/article">
                Explore Articles
              </Button>
              <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" href="/event">
                Explore Events
              </Button>
            </div>

          </div>
        </section>
      </div>
    </main>
  );
}

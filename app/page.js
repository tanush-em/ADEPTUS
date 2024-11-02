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
    <main>
      <section className="flex flex-col lg:flex-row items-center px-4 py-16">
        <div className="lg:w-1/2 pl-16">
          <h1 className="text-7xl font-bold text-gray-800 dark:text-gray-200">
            <span ref={el}></span>
          </h1>
          <p className="mt-4 pl-16 text-xl text-gray-500 dark:text-gray-300">
              A TECHNICAL CLUB OF SRM EASWARI ENGINEERING COLLEGE
          </p>
          <p className="mt-2 pl-16 text-xl text-gray-500 dark:text-gray-300">
            We Aim to Enhance Technical Skills and Spread Technological Awareness among the Engineering Community.
          </p>
          <p className="mt-3 pl-16 text-xl text-gray-500 dark:text-gray-300">
            An Initiative by Department of CSE-AIML, EEC.
          </p>
        </div>
        <div className="w-full mt-4 lg:mt-0 lg:w-1/2">
          <img
            src="logo.png"
            alt="logo"
            className="w-full max-w-md mx-auto"
          />
        </div>
      </section>


    </main>
  );
}

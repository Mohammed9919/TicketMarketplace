"use client";

import React from "react";

export default function HeroSectionImage() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/Images/landing.jpg')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Soft Blue Accent */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#155dfc]/20 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold leading-tight text-white">
            Discover Events That
            <span className="block text-[#155dfc]">
              Feel Unforgettable
            </span>
          </h1>

          <p className="mt-6 text-lg text-white/85">
            Concerts, festivals, sport  ,and live experiences — book tickets easily and
            be part of moments that matter.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button  className="rounded-xl bg-[#155dfc] px-10 py-4 text-white font-semibold shadow-lg shadow-[#155dfc]/30 hover:bg-[#0f4ad1] transition cursor-pointer">
              
              <a href="#events">Explore Events</a>
            </button>

            <button className="rounded-xl border border-white/40 px-10 py-4 text-white hover:bg-white/10 transition cursor-pointer">
             
               <a href="#upevent"> View Upcoming</a>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}

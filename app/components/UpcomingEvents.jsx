"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";

export default function UpcomingEvents() {
  const images = [
    {
      src: "/Images/event1.jpg",
      title: "FC Barcelona vs Real Madrid — El Clásico",
      desc: "Experience the iconic El Clásico between FC Barcelona and Real Madrid, one of the biggest football rivalries in the world. Don't miss this epic showdown!",
    },
    {
      src: "/Images/event2.png",
      title: "FC Barcelona vs Paris Saint‑Germain",
      desc: "UEFA Champions League clash as Barcelona hosts PSG. Watch world-class stars battle it out on the field!",
    },
    {
      src: "/Images/event3.jpg",
      title: "Argentina vs France — International Friendly",
      desc: "An international friendly match between Argentina and France, featuring star players from both teams. Exciting football guaranteed!",
    },
    {
      src: "/Images/event4.jpg",
      title: "Argentina vs Portugal — World Cup Qualifier",
      desc: "A blockbuster World Cup qualifying match featuring Argentina and Portugal. Catch the action live at the stadium!",
    },
  ];

  const [swiper, setSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="upevent" className="relative py-24 bg-gray-50 ">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#155dfc]/30 to-transparent" />

      <div className="w-full max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12 text-center">
          <span className="inline-block mb-3 h-1 w-12 rounded-full bg-[#155dfc]" />
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Upcoming Events
          </h1>
          <p className="text-gray-500 mt-2 max-w-md mx-auto">
            Stay tuned for our upcoming events!
          </p>
        </div>

        {/* Slider */}
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          spaceBetween={40}
          slidesPerView={1}
          loop
          onSwiper={setSwiper}
          onSlideChange={(s) => setActiveIndex(s.realIndex)}
        >
          {images.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div className="relative w-full h-72 md:h-[420px] rounded-2xl overflow-hidden bg-white border border-gray-200 shadow-lg group">
                {/* Image */}
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Hover Overlay ONLY */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/80 via-black/50 to-transparent cursor-pointer">
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-200 mt-2 max-w-xl">
                    {item.desc}
                  </p>
                  <button className="mt-5 w-fit rounded-lg bg-[#155dfc] px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-[#155dfc]/30 hover:bg-[#0f4ad1] transition">
                    View Event
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination */}
        <div className="flex justify-center gap-3 mt-10">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => swiper?.slideToLoop(i)}
              className={`transition-all duration-300 rounded-full ${
                activeIndex === i
                  ? "w-8 h-3 bg-[#155dfc]"
                  : "w-3 h-3 bg-gray-300 hover:bg-[#155dfc]/60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

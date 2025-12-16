"use client";

import React from "react";
import { EventContext } from "../context/EventContext";
import { useContext } from "react";
import Link from "next/link";

// mui icons
import EventNoteIcon from '@mui/icons-material/EventNote';
import LocationPinIcon from '@mui/icons-material/LocationPin';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';

export default function EventGrid() {
  const events = useContext(EventContext);

  return (
    <div id="events" className="max-w-7xl mx-auto px-4 py-12">
      <div className="mb-12 text-center">
        <span className="inline-block mb-3 h-1 w-12 rounded-full bg-[#155dfc]" />
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
          Events
        </h1>
        <p className="text-gray-500 mt-2 max-w-md mx-auto">
          Stay tuned for our upcoming events!
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {events.map((event) => (
          <div
            key={event.id}
            className="flex flex-col bg-white rounded-2xl overflow-hidden shadow hover:shadow-xl transition-shadow duration-300"
          >
            {/* Image */}
            <div className="relative h-48 w-full">
              <img
                src={event.image}
                alt={event.name}
                className="w-full h-full object-cover"
              />
              {/* Status Badge */}
              <span
                className={`absolute top-3 left-3 px-3 py-1 text-xs font-semibold rounded-full ${
                  event.isPast
                    ? "bg-red-200 text-red-800"
                    : "bg-green-200 text-green-800"
                }`}
              >
                {event.isPast ? "Past Event" : "Upcoming"}
              </span>
              {/* Price Badge */}
              <span className="absolute bottom-3 right-3 px-3 py-1 text-sm font-bold bg-blue-600 text-white rounded-full shadow-sm">
                ${event.price}
              </span>
            </div>

            {/* Card Content */}
            <div className="flex-1 p-5 flex flex-col justify-between">
              <div>
                <h2 className="text-lg font-bold text-gray-900 mb-1">
                  {event.name}
                </h2>
                <p className="text-sm text-gray-500"><LocationPinIcon />{event.location}</p>
                <p className="text-sm text-gray-500 mb-2"> <EventNoteIcon />{event.date}</p>
                <p className="text-sm text-gray-500 mb-3"><ConfirmationNumberIcon />{event.tickets}</p>
                <p className="text-sm text-gray-700 line-clamp-3">
                  {event.description}
                </p>
              </div>
              <Link key={event.id} href={`/tickets-details/${event.id}`}>
                <button className="mt-4 w-full py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors duration-300 cursor-pointer">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

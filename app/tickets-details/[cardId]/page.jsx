"use client";

import React, { useState, useContext } from "react";
import { EventContext } from "../../context/EventContext";
import { useParams } from "next/navigation";

// mui icons
import EventNoteIcon from "@mui/icons-material/EventNote";
import LocationPinIcon from "@mui/icons-material/LocationPin";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

export default function EventDetail() {
  const params = useParams();
  const cardId = params.cardId;
  const [showFullDescription, setShowFullDescription] = useState(false);
  const events = useContext(EventContext);
  const event = events.find((e) => e.id.toString() === cardId);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="relative rounded-2xl overflow-hidden transition-transform duration-500 hover:scale-[1.02]">
        <img
          src={event.image}
          alt={event.name}
          className="w-full h-[400px] object-cover brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-700/60 via-blue-500/20 to-transparent"></div>
        <h1 className="absolute bottom-6 left-6 text-white text-4xl font-extrabold drop-shadow-md">
          {event.name}
        </h1>
        <span
          className={`absolute top-6 left-6 px-4 py-2 rounded-full font-semibold text-sm ${
            event.isPast
              ? "bg-red-300 text-red-900"
              : "bg-green-200 text-green-800"
          }`}
        >
          {event.isPast ? "Past Event" : "Upcoming"}
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-12">
        {/* LEFT: Description & Info */}
        <div className="lg:col-span-2 space-y-8">
          <p className="text-gray-700 leading-relaxed text-lg">
            {showFullDescription
              ? event.description
              : event.description.slice(0, 180) + "..."}
          </p>
          <button
            className="text-blue-600 font-semibold hover:underline"
            onClick={() => setShowFullDescription(!showFullDescription)}
          >
            {showFullDescription ? "Show Less" : "Read More"}
          </button>

          {/* Info Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
            {[
              { label: "Date", value: event.date },
              { label: "Location", value: event.location },
              { label: "Price", value: `$${event.price}` },
              { label: "Tickets", value: event.tickets }
            ].map((item, i) => (
              <div
                key={i}
                className="p-5 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow transition-shadow duration-200 text-center"
              >
                {i === 0 ? (
                  <EventNoteIcon style={{fontSize:"40px"}} className="mx-auto mb-2 text-blue-500" />
                ) : i === 1 ? (
                  <LocationPinIcon style={{fontSize:"40px"}} className="mx-auto mb-2 text-blue-500" />
                ) : i === 2 ? (
                  <AttachMoneyIcon style={{fontSize:"40px"}} className="mx-auto mb-2 text-blue-500" />
                ) : (
                  <ConfirmationNumberIcon style={{fontSize:"40px"}} className="mx-auto mb-2 text-blue-500 \" />
                )}

                <p className="text-xs text-gray-400 mb-1">{item.label}</p>
                <p className="font-semibold text-gray-800">{item.value}</p>
              </div>
            ))}
          </div>

          {/* Rules Section */}
          <div className="p-6 bg-gradient-to-tr from-blue-100 to-blue-50 rounded-2xl border border-gray-200 shadow-sm">
            <h3 className="text-lg font-semibold mb-3 text-gray-800">
              Event Information
            </h3>
            <ul className="text-gray-700 space-y-2 list-disc list-inside text-sm">
              <li>Please arrive 30 minutes before the event</li>
              <li>Tickets are non-refundable</li>
              <li>Age restriction: 18+</li>
            </ul>
          </div>
        </div>

        {/* RIGHT: Sticky Ticket Card */}
        <div className="lg:sticky lg:top-24">
          <div className="bg-white rounded-2xl p-6 flex flex-col justify-between border border-gray-200 shadow-sm hover:shadow transition-shadow duration-200">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {event.name}
              </h2>
              <span
                className={`text-sm font-medium px-3 py-1 rounded-full ${
                  event.isPast
                    ? "bg-red-200 text-red-900"
                    : "bg-green-200 text-green-800"
                }`}
              >
                {event.isPast ? "Past Event" : "Upcoming"}
              </span>

              <div className="mt-5 space-y-3 text-gray-600">
                <div className="flex justify-between">
                  <span className="font-medium text-gray-700">Date : </span>
                  <span>{event.date}</span>
                </div>
                <div className="flex ">
                  <span className="font-medium text-gray-700">Location : </span>
                  <span>{event.location}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-gray-700">Tickets : </span>
                  <span>{event.tickets}</span>
                </div>
              </div>
            </div>

            <div className="mt-6 border-t pt-5 flex flex-col gap-3">
              <p className="text-3xl font-extrabold text-gray-900">
                ${event.price}
              </p>
              <button
                disabled={event.isPast}
                className={`w-full py-3 rounded-xl font-semibold text-white transition-transform duration-300 cursor-pointer ${
                  event.isPast
                    ? "bg-gray-300 cursor-not-allowed"
                    : "bg-gradient-to-r from-blue-500 to-blue-700 hover:scale-105"
                }`}
              >
                {event.isPast ? "Event Ended" : "Buy Ticket"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

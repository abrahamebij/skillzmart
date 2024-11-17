import React from "react";
import Img from "../components/Img";
import { FaCalendar, FaClock } from "react-icons/fa";
import { FaLocationCrosshairs } from "react-icons/fa6";
import Link from "next/link";

let events = [
  {
    title: "COAL Business Submit",
    date: new Date(),
    image: "/flyer.jpg",
    venue: "Elect Hall 1",
    ticketPrice: 0,
  },
  {
    title: "Ibogun Block Party",
    date: new Date(),
    image: "/flyer3.jpg",
    venue: "Egbeda Ibogun Field",
    ticketPrice: 5000,
  },
  {
    title: "Upskill Uni",
    date: new Date(),
    image: "/flyer2.jpg",
    venue: "Archi Hall",
    ticketPrice: 0,
  },
];

const Event = () => {
  return (
    <>
      <header className="bg-tertiary py-16 px-5 mb-10 min-h-64 flex items-center">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900">Find Events</h1>
          <p className="mt-3 text-lg text-gray-500">
            Find events like no other Lorem ipsum dolor sit amet.
          </p>
        </div>
      </header>
      {/* <header className="bg-[url('/event-hero.webp')] h-fit bg-blend-darken bg-black/70 bg-cover text-white py-7 px-5 min-h-64">
        <div className="w-2/5">
          <h1 className="font-bold text-3xl">
            Best events in <span className="text-5xl block">Ibogun</span>
          </h1>
          <p className="text-base">
            Looking for something to do in Lagos? Whether you&apos;re a local,
            new in town or just cruising through we&apos;ve got loads of great
            tips and events. You can explore by location, what&apos;s popular,
            our top picks, free stuff... you got this. Ready?
          </p>
        </div>
      </header> */}
      {/* Cards */}
      <div className="px-5 lg:px-10 pt-10 flex justify-between items-center flex-wrap md:grid grid-cols-2 gap-x-5 gap-y-10">
        {events.map((event, index) => {
          return (
            <Card
              key={index}
              title={event.title}
              image={event.image}
              venue={event.venue}
              date={
                new Date(event.date).getDate() +
                "-" +
                (new Date(event.date).getMonth() + 1)
              }
              time={new Date(event.date).getHours() + ":00pm"}
            />
          );
        })}
      </div>
    </>
  );
};

function Card({ title, image, date, time, venue }) {
  return (
    <Link
      href={"/"}
      className="max-w-[320px] md:max-w-[540px] md:h-52 mx-auto bg-white rounded-xl overflow-clip flex flex-col md:flex-row shadow-md hover:shadow-xl"
    >
      <div className="w-full h-64 md:h-auto md:w-2/5 overflow-hidden">
        <Img src={image} />
      </div>
      <div className="pb-3 pt-1 px-2 md:px-3 md:min-w-64 flex flex-col gap-y-5">
        <h3 className="font-semibold text-lg py-1">{title}</h3>
        <div className="flex gap-x-3 pb-1 text-sm">
          <p className="flex items-center gap-x-1">
            <FaCalendar /> {date}
          </p>
          <p className="flex items-center gap-x-1">
            <FaClock /> {time}
          </p>
        </div>
        <p className="text-sm flex items-center gap-x-1 pt-1">
          <FaLocationCrosshairs /> {venue}
        </p>
      </div>
    </Link>
  );
}

export default Event;
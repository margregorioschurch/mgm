'use client';
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarCheck, faBook, faGlobeAsia, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import Readings from '@/app/components/Readings'

export default function Events() {
  const [activeTab, setActiveTab] = useState("upcoming");

  return (
    <section className="text-center py-10 px-4">
    <div className="flex justify-center items-center gap-2 mb-2">
    <FontAwesomeIcon icon={faInfoCircle} className="text-orange-400 text-xl" />
    <h5 className="text-lg text-orange-400 font-semibold uppercase tracking-widest">
      Events
    </h5>
  </div>
      <h6 className="text-4xl font-bold mt-1 mb-8">What's Happening</h6>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-6 border-b border-gray-200 pb-4 mb-10">
        <button
          onClick={() => setActiveTab("upcoming")}
          className={`flex items-center gap-2 px-5 py-2 rounded-t-md transition duration-200 ${
            activeTab === "upcoming"
              ? "text-blue-600 border-b-2 border-blue-600 font-semibold"
              : "text-gray-500 hover:text-blue-600"
          }`}
        >
          <FontAwesomeIcon icon={faCalendarCheck} className="text-xl" />
          <span className="hidden sm:inline">Upcoming Events</span>
        </button>

        <button
          onClick={() => setActiveTab("readings")}
          className={`flex items-center gap-2 px-5 py-2 rounded-t-md transition duration-200 ${
            activeTab === "readings"
              ? "text-blue-600 border-b-2 border-blue-600 font-semibold"
              : "text-gray-500 hover:text-blue-600"
          }`}
        >
          <FontAwesomeIcon icon={faBook} className="text-xl" />
          <span className="hidden sm:inline">Scripture Readings</span>
        </button>

        <button
          onClick={() => setActiveTab("facebook")}
          className={`flex items-center gap-2 px-5 py-2 rounded-t-md transition duration-200 ${
            activeTab === "facebook"
              ? "text-blue-600 border-b-2 border-blue-600 font-semibold"
              : "text-gray-500 hover:text-blue-600"
          }`}
        >
          <FontAwesomeIcon icon={faGlobeAsia} className="text-xl" />
          <span className="hidden sm:inline">Facebook</span>
        </button>
      </div>

      {/* Tab Content */}
      <div className="px-2 sm:px-6 md:px-12">
        {activeTab === "upcoming" && (
          <div className="grid md:grid-cols-2 gap-6 text-left">
            {[
              {
                name: "Baptism of Jesus",
                date: "6 January",
                desc: "The baptism of Jesus by John the Baptist",
              },
              {
                name: "Presentation at the Temple",
                date: "2 February",
                desc: "Feast of the Presentation of Jesus",
              },
              {
                name: "Palm Sunday",
                date: "2 April",
                desc: "Oshana Sunday or Hosanna Sunday",
              },
              {
                name: "Easter",
                date: "9 April",
                desc: "Jesus ascended to Heaven after his resurrection",
              },
              {
                name: "Pentecost",
                date: "28 May",
                desc: "Celebrated on the 50th day after Easter",
              },
              {
                name: "Transfiguration of Jesus",
                date: "6 August",
                desc: "Jesus is transfigured upon a mountain",
              },
              {
                name: "Feasts of the Cross",
                date: "14 September",
                desc: "Commemorates the cross used in crucifixion",
              },
              {
                name: "Christmas",
                date: "25 December",
                desc: "Birth of Jesus Christ",
              },
            ].map((event, idx) => (
                <div
                key={idx}
                className="flex items-start gap-4 p-4 rounded-lg shadow-md hover:shadow-lg transition"
              >
                <img
                  src="/img/1427965.png"
                  alt="event"
                  className="w-12 h-12 object-contain"
                />
                <div className="flex flex-col flex-1">
                  <div className="flex justify-between items-end border-b pb-1 mb-1">
                    <h5 className="font-semibold">{event.name}</h5>
                    <span className="text-sm text-blue-600">{event.date}</span>
                  </div>
                  <p className="text-gray-500 text-sm italic">{event.desc}</p>
                </div>
              </div>
              
            ))}
          </div>
        )}

        {activeTab === "readings" && (
          <div className="mx-auto rounded shadow text-left">
            <Readings />
          </div>
        )}

        {activeTab === "facebook" && (
          <div className="flex justify-center">
            <iframe
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fmalankaraorthodoxmediawing.in&tabs=timeline&width=300&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
              width="300"
              height="500"
              className="border-none overflow-hidden"
              scrolling="no"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              title="Facebook Feed"
            ></iframe>
          </div>
        )}
      </div>
    </section>
  );
}

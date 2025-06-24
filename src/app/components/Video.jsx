'use client';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo } from '@fortawesome/free-solid-svg-icons';

export default function Video() {
  const [isOpen, setIsOpen] = useState(false);
  const videoSrc = "https://www.youtube.com/embed/pQMWk4xqUAA";

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <section
  className="container-xl py-20 max-w-7xl mx-auto text-center"
  style={{
    backgroundImage:
      "linear-gradient(rgba(15, 23, 43, 0.1), rgba(15, 23, 43, 0.1)), url('../img/church-01.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>

      <h5 className="text-primary text-lg font-secondary font-normal py-4 text-orange-400 font-semibold">
        Play Video
      </h5>

      <div className="w-full">
        <div className="relative inline-block">
          <button
            type="button"
            title="youtube"
            onClick={openModal}
            className="group relative rounded-full w-20 h-20 bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 block w-auto h-auto border-l-8 border-l-white border-t-6 border-t-transparent border-b-6 border-b-transparent"></span>
          </button>
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur z-40"
            onClick={closeModal}
          ></div>
          <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded shadow-lg max-w-4xl w-full h-auto relative">
              <div className="flex items-center justify-between p-4 border-b">
                <h5 className="text-xl text-gray-700 font-semibold flex items-center gap-3">
                <FontAwesomeIcon icon={faVideo} className="text-red-400 text-lg" /> 
                  Video
                </h5>
                <button
                  type="button"
                  className="text-gray-700 hover:text-red-500"
                  onClick={closeModal}
                  aria-label="Close modal"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src={videoSrc}
                  title="YouTube video player"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
}

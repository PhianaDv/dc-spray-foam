'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function OurWork() {
  const items = [
    { type: 'image', src: `${prefix}/dc10.jpg`, alt: '10' },
    { type: 'image', src: `${prefix}/dc11.jpg`, alt: '11' },
    { type: 'image', src: `${prefix}/dc12.jpg`, alt: '12' },
    { type: 'image', src: `${prefix}/dc1.jpg`, alt: '1' },
    { type: 'image', src: `${prefix}/dc2.jpg`, alt: '2' },
    { type: 'image', src: `${prefix}/dc3.jpg`, alt: '3' },
    { type: 'image', src: `${prefix}/dc4.jpg`, alt: "4" },
    { type: 'image', src: `${prefix}/dc5.jpg`, alt: "5" },
    { type: 'image', src: `${prefix}/dc6.jpg`, alt: "6" },
    { type: 'image', src: `${prefix}/dc7.jpg`, alt: "7" },
    { type: 'image', src: `${prefix}/dc8.jpg`, alt: "8" },
    { type: 'image', src: `${prefix}/dc9.jpg`, alt: "9" },
  ];

  const [selectedIndex, setSelectedIndex] = useState(null);
  const selected = selectedIndex !== null ? items[selectedIndex] : null;

  useEffect(() => {
    const handleKey = (e) => {
      if (selectedIndex === null) return;

      if (e.key === 'ArrowRight' && selectedIndex < items.length - 1) {
        setSelectedIndex((prev) => prev + 1);
      }
      if (e.key === 'ArrowLeft' && selectedIndex > 0) {
        setSelectedIndex((prev) => prev - 1);
      }
      if (e.key === 'Escape') {
        setSelectedIndex(null);
      }
    };

    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [selectedIndex, items.length]);

  return (
    <section className="p-4 md:p-8 max-w-screen-xl mx-auto">
      <h2 className="text-2xl md:text-4xl font-semibold text-center mb-6">See what we've done</h2>

      <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
        {items.map((item, i) => (
          <div
            key={i}
            className="relative cursor-pointer hover:scale-105 transition-transform duration-300 rounded overflow-hidden shadow-md"
            onClick={() => setSelectedIndex(i)}
          >
            {item.type === 'image' ? (
              <Image
                src={item.src}
                alt={item.alt}
                width={400}
                height={300}
                className="rounded w-full h-auto object-cover"
              />
            ) : item.type === 'facebook' ? (
              <>
                <Image
                  src={item.thumbnail}
                  alt={`${item.alt} thumbnail`}
                  width={400}
                  height={300}
                  className="rounded w-full h-auto object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-16 w-16 text-white drop-shadow-lg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </>
            ) : (
              <video
                src={item.src}
                muted
                playsInline
                className="rounded w-full h-auto object-cover"
              />
            )}
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelectedIndex(null)}
        >
          <div className="relative max-w-3xl w-full px-4" onClick={(e) => e.stopPropagation()}>
            {/* Arrows */}
            {selectedIndex > 0 && (
              <button
                className="absolute cursor-pointer left-2 md:left-[-3rem] top-1/2 -translate-y-1/2 bg-white text-black w-10 h-10 rounded-full shadow-lg flex items-center justify-center hover:bg-gray-200 z-10"
                onClick={() => setSelectedIndex((prev) => prev - 1)}
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            )}

            {selectedIndex < items.length - 1 && (
              <button
                className="absolute cursor-pointer right-2 md:right-[-3rem] top-1/2 -translate-y-1/2 bg-white text-black w-10 h-10 rounded-full shadow-lg flex items-center justify-center hover:bg-gray-200 z-10"
                onClick={() => setSelectedIndex((prev) => prev + 1)}
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            )}

            {/* Media container */}
            <div className="relative">
              <button
                className="fixed cursor-pointer top-2 right-2 bg-black bg-opacity-60 text-white w-8 h-8 rounded-full flex items-center justify-center z-20 hover:bg-opacity-90"
                onClick={() => setSelectedIndex(null)}
              >
                ✕
              </button>

              {selected.type === 'image' ? (
                <Image
                  src={selected.src}
                  alt={selected.alt}
                  width={1000}
                  height={700}
                  className="rounded w-full h-auto object-contain"
                />
              ) : selected.type === 'facebook' ? (
                <iframe
                  src={selected.src}
                  width="315"
                  height="560"
                  style={{
                    border: 'none',
                    overflow: 'hidden',
                    maxWidth: '100%',
                    display: 'block',
                    margin: '0 auto',
                  }}
                  scrolling="no"
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  allowFullScreen
                  title={selected.alt}
                  className="rounded"
                />
              ) : (
                <video
                  src={selected.src}
                  controls
                  autoPlay
                  className="rounded w-full h-auto object-contain"
                />
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const reviews = [
  {
    name: 'Brandon C.',
    quote: "Great attention to detail and I've already recommended them to others!",
  },
  {
    name: 'Jess D.',
    quote: "We've had them do a couple jobs for us and are happy with the results!",
  },
  {
    name: 'Michael D.',
    quote: "Neat tidy job !.. This is an excellent reference for prospective future clients.",
  },
  {
    name: 'Bertie M.',
    quote: "Hard working guys, always!",
  },
]

export default function Reviews() {
  const [index, setIndex] = useState(0)

  // Auto-slide every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  const prev = () => setIndex((prev) => (prev - 1 + reviews.length) % reviews.length)
  const next = () => setIndex((prev) => (prev + 1) % reviews.length)

  return (
    <section className="max-w-screen-md mx-auto p-6 text-center">
      <h2 className="text-2xl md:text-4xl font-semibold mb-6">What Our Customers Say</h2>

      <div className="relative bg-white shadow-xl rounded-xl px-6 py-10 min-h-[180px]">
        <p className="text-lg md:text-xl italic text-gray-800 transition-opacity duration-500 ease-in-out">
          “{reviews[index].quote}”
        </p>
        <p className="mt-4 font-semibold text-black">— {reviews[index].name}</p>

        {/* Arrows */}
        <button
          onClick={prev}
          className="absolute left-[-2rem] top-1/2 transform -translate-y-1/2 bg-white shadow-md rounded-full p-2 hover:bg-gray-100"
        >
          <ChevronLeft className="w-5 h-5 text-gray-800" />
        </button>
        <button
          onClick={next}
          className="absolute right-[-2rem] top-1/2 transform -translate-y-1/2 bg-white shadow-md rounded-full p-2 hover:bg-gray-100"
        >
          <ChevronRight className="w-5 h-5 text-gray-800" />
        </button>
      </div>
    </section>
  )
}

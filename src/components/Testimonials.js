'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    name: 'Heidi Lynne M.',
    quote: 'Valorie was our driver and was so sweet and so professional. Would choose Cloud Nine Coaches in the future 🤍',
  },
  {
    name: 'Brytany G.',
    quote: 'Valorie is amazing!! hands down the best experience we’ve ever had!! the limo is beautiful, it’s so clean and comfy!!',
  },
  {
    name: 'Tamarah T.',
    quote: 'I did photography for a wedding that had Val and Cloud Nine for the bridal party and Val was great! What a caring lady! Truly went above and beyond to make sure everyone had a great day!',
  },
]

export default function Testimonials() {
  const [index, setIndex] = useState(0)

  // Auto-slide every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  const prev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  const next = () => setIndex((prev) => (prev + 1) % testimonials.length)

  return (
    <section className="max-w-screen-md mx-auto p-6 text-center">
      <h2 className="text-2xl md:text-4xl font-semibold mb-6">What Our Customers Say</h2>

      <div className="relative bg-white shadow-xl rounded-xl px-6 py-10 min-h-[180px]">
        <p className="text-lg md:text-xl italic text-gray-800 transition-opacity duration-500 ease-in-out">
          “{testimonials[index].quote}”
        </p>
        <p className="mt-4 font-semibold text-black">— {testimonials[index].name}</p>

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

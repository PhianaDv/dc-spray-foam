'use client'
import Link from 'next/link'
import SVGLogoLeft from './SVGLogoLeft'
import SVGLogoRight from './SVGLogoRight'

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-black text-[#c4bc91] px-4 py-2 z-50 shadow-md">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        {/* Logo and Title (left on desktop, centered on mobile) */}
        <div className="flex justify-center md:justify-start items-center space-x-2">
          <SVGLogoLeft style={{ width: '60px', height: '60px' }} />
          <span
            className="text-2xl font-bold text-center ml-1"
            style={{
              fontFamily: 'Lavanderia-Sturdy',
              fontSize: '2rem',
              whiteSpace: 'nowrap',
            }}
          >Cloud Nine Coaches</span>
          <SVGLogoLeft style={{ width: '60px', height: '60px', transform: 'scaleX(-1)' }} />
        </div>

        {/* Navigation (right on desktop, centered horizontal row on mobile) */}
        <div
          className="mt-2 md:mt-1 flex justify-center md:justify-end text-[1.3rem] md:text-[1.5rem] divide-x divide-white/40"
          style={{
            fontFamily: 'Lavanderia-Sturdy',
          }}
        >
          {[
            { label: 'Home', href: '/' },
            { label: 'Gallery', href: '/gallery' },
            { label: 'Testimonials', href: '/testimonials' },
            { label: 'Contact', href: '/contact' },
          ].map((item, i) => (
            <div key={i} className="px-4 hover:underline">
              <Link href={item.href}>{item.label}</Link>
            </div>
          ))}
        </div>
      </div>
    </nav>
  )
}

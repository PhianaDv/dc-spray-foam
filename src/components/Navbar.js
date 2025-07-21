'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import AnimatedLogo from './AnimatedLogo'

export default function Navbar() {
  const rawPath = usePathname()
const pathname = rawPath.replace(/\/$/, '') || '/'

  const navItems = [
    { label: 'What We Do', href: '/' },
    { label: 'Our Work', href: '/ourwork' },
    { label: 'Client Reviews', href: '/reviews' },
    { label: 'Contact Us', href: '/contact' },
  ]

  return (
    <nav className="fixed w-full bg-[#03072b] text-[#d4d5d8] px-4 py-2 z-50 shadow-md border-b border-white/10">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between h-full">
        {/* Logo Section */}
        <div className="flex justify-center md:justify-start items-center space-x-2">
          <AnimatedLogo style={{ width: '300', height: '100px' }} />
          
        </div>

        {/* Navigation Buttons */}
        <div className="mt-2 md:mt-0 flex justify-center md:justify-end h-full text-center">
          {navItems.map((item, i) => {
            const isActive = pathname === item.href

            return (
              <Link
                key={i}
                href={item.href}
                className={`px-4 flex items-center border-b-3 ${
                  isActive
                    ? 'border-[#c9cbd6] text-[#d4d5d8]'
                    : 'border-[#060c45] text-[#d4d5d8?] hover:border-white/50'
                }`}
              >
                {item.label}
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}

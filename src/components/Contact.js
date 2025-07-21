'use client'

import { useState } from 'react'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const [form, setForm] = useState({
    user_name: '',
    user_email: '',
    user_phone: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const serviceId = 'YOUR_SERVICE_ID'
      const templateId = 'YOUR_TEMPLATE_ID'
      const publicKey = 'YOUR_PUBLIC_KEY'

      await emailjs.send(serviceId, templateId, form, publicKey)
      alert('Thanks, your message was sent!')
      setForm({ user_name: '', user_email: '', user_phone: '', message: '' })
    } catch (error) {
      console.error('Email send error:', error)
      alert('Something went wrong, please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="w-full max-w-screen-md mx-auto px-4 py-10 text-center text-[#03072b]">
      <h1 className="text-4xl font-bold mb-4">Contact Us</h1>

      {/* Phone Contact Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
        {[
          { number: '+17013082004', label: '(701) 308-2004' },
          { number: '+17019369935', label: '(701) 936-9935' },
        ].map((contact, idx) => (
          <div key={idx} className="space-y-2 border border-gray-200 p-4 rounded-md">
            <p className="font-semibold text-lg">{contact.label}</p>
            <div className="flex gap-2 flex-wrap">
              <a
                href={`tel:${contact.number}`}
                className="bg-[#03072b] text-[#d4d5d8] py-2 px-4 rounded hover:bg-[#d4d5d8] hover:text-[#03072b] transition"
              >
                📞 Call
              </a>
              <a
                href={`sms:${contact.number}?&body=Please%20contact%20me%20about%20an%20insulation%20quote.`}
                className="bg-[#03072b] text-[#d4d5d8] py-2 px-4 rounded hover:bg-[#d4d5d8] hover:text-[#03072b] transition"
              >
                💬 Text
              </a>
            </div>
          </div>
        ))}
      </div>

      <p className="text-sm">Oakes, ND, USA</p>

      {/* Contact Form */}
      <form
        onSubmit={handleSubmit}
        className="mt-8 max-w-md mx-auto space-y-4 text-left"
        autoComplete="on"
      >
        <label className="block">
          Name
          <input
            type="text"
            name="user_name"
            value={form.user_name}
            onChange={handleChange}
            autoComplete="name"
            required
            className="w-full border border-gray-300 rounded p-2 mt-1"
            placeholder="Your full name"
          />
        </label>

        <label className="block">
          Email
          <input
            type="email"
            name="user_email"
            value={form.user_email}
            onChange={handleChange}
            autoComplete="email"
            required
            className="w-full border border-gray-300 rounded p-2 mt-1"
            placeholder="you@example.com"
          />
        </label>

        <label className="block">
          Phone
          <input
            type="tel"
            name="user_phone"
            value={form.user_phone}
            onChange={handleChange}
            autoComplete="tel"
            required
            className="w-full border border-gray-300 rounded p-2 mt-1"
            placeholder="(701) 123-4567"
          />
        </label>

        <label className="block">
          Message
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={4}
            required
            className="w-full border border-gray-300 rounded p-2 mt-1"
            placeholder="Your message here"
          />
        </label>

        <button
          type="submit"
          disabled={loading}
          className="bg-[#03072b] text-[#d4d5d8] py-2 px-6 rounded hover:bg-[#d4d5d8] hover:text-[#03072b] transition disabled:opacity-50"
        >
          {loading ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </section>
  )
}

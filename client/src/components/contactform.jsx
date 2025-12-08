import React from "react";
import logo from "../assets/logo.png";

export default function ContactForm() {
  return (
    <section id="contact"
      className="relative overflow-hidden py-20 px-4 bg-gradient-to-br from-purple-50 via-white to-purple-100/60"
      style={{ WebkitFontSmoothing: "antialiased" }}
    >
      <div className="max-w-6xl mx-auto relative">
        {/* Soft background accent */}
        <div className="pointer-events-none absolute -top-32 -right-32 w-72 h-72 bg-primary/15 rounded-full blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 w-80 h-80 bg-purple-300/20 rounded-full blur-3xl" />

        {/* Heading */}
        <div className="text-center mb-12 relative z-10">
          <span className="inline-block px-4 py-1 mb-4 rounded-full border border-primary/30 text-primary text-xs tracking-[0.25em] uppercase">
            Contact
          </span>

          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-secondary">
            Let&apos;s Talk About Your Back-Office Needs
          </h2>

          <p className="text-secondary/70 max-w-2xl mx-auto text-sm md:text-base">
            Tell us a bit about your business and we’ll follow up with
            clear next steps — no pressure, just support.
          </p>
        </div>

        {/* Main layout */}
        <div className="relative grid gap-8 md:grid-cols-[1.1fr_1.2fr] items-stretch">

          {/* LEFT — Company Info Card (Lavender) */}
          <div className="bg-purple-100/60 backdrop-blur-xl rounded-3xl border border-primary/20 shadow-lg p-7 md:p-8 flex flex-col justify-between">

            <div>
              {/* Logo */}
              <div className="mb-6 flex justify-start">
                <div className="bg-white rounded-full p-4 inline-flex shadow-md border border-primary/20">
                  <img src={logo} alt="Logo" className="w-24 h-auto md:w-28" />
                </div>
              </div>

              <h3 className="text-xl md:text-2xl font-semibold text-secondary mb-3">
                Get in touch with our team
              </h3>

              <p className="text-secondary/70 text-sm md:text-base mb-6">
                Whether you're managing real estate, a group home, or a growing
                small business, we help lighten your admin load.
              </p>

              <div className="space-y-4 text-sm text-secondary/80">
                <div className="flex gap-3 items-start">
                  <span className="text-primary text-lg">📍</span>
                  <p>Supporting businesses nationwide</p>
                </div>

                <div className="flex gap-3 items-start">
                  <span className="text-primary text-lg">📞</span>
                  <p>+1 (000) 000-0000</p>
                </div>

                <div className="flex gap-3 items-start">
                  <span className="text-primary text-lg">📧</span>
                  <p>info@visionswithinsolutions.com</p>
                </div>
              </div>
            </div>

            {/* Chips */}
            <div className="mt-6 flex flex-wrap gap-2 text-[11px] text-secondary/70">
              <span className="px-3 py-1 rounded-full border border-primary/20 bg-purple-200/40">
                No long-term contract
              </span>
              <span className="px-3 py-1 rounded-full border border-primary/20 bg-purple-200/40">
                Tailored business support
              </span>
            </div>
          </div>

          {/* RIGHT — Form Card (Lavender) */}
          <div className="bg-purple-50 backdrop-blur-xl rounded-3xl border border-primary/20 shadow-xl p-7 md:p-8 text-secondary">

            <h3 className="text-lg md:text-xl font-semibold mb-4 
                text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-purple-300 to-purple-700">
              Send us a message
            </h3>

            <p className="text-secondary/70 text-xs md:text-sm mb-6">
              We usually reply within 24–48 business hours.
            </p>

            <form className="space-y-5 text-sm font-medium">
              {/* Name + Email */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs mb-1 text-secondary">Full Name</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full border border-primary/30 px-4 py-2.5 rounded-md bg-white/60 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-xs mb-1 text-secondary">Email Address</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full border border-primary/30 px-4 py-2.5 rounded-md bg-white/60 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              {/* Service */}
              <div>
                <label className="block text-xs mb-1 text-secondary">Service Needed</label>
                <select
                  className="w-full border border-primary/30 px-4 py-2.5 rounded-md bg-white/60 focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option>Real Estate</option>
                  <option>Group Home Support</option>
                  <option>Bookkeeping Services</option>
                  <option>Other</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs mb-1 text-secondary">Message</label>
                <textarea
                  rows="4"
                  placeholder="Tell us what support you're looking for..."
                  className="w-full border border-primary/30 px-4 py-2.5 rounded-md bg-white/60 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full mt-2 bg-primary text-light py-3 rounded-md font-semibold hover:bg-primary/90 transition shadow-md"
              >
                Send Message
              </button>

              <p className="text-[11px] text-secondary/70 mt-2 text-center">
                Your information is safe with us — no spam, ever.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

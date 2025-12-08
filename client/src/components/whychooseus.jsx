import React, { useState, useEffect } from "react";
import image1 from "../assets/card.png";
import image2 from "../assets/2.jpg";
import image3 from "../assets/3.jpg";
import image4 from "../assets/4.jpg";
import doJpg from "../assets/do.jpg";

/* ===========================================================
   TOP SECTION — WHY CHOOSE US (Dark Gradient No BG Image)
   =========================================================== */

export function WhyChooseUsSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const images = [image1, image2, image3, image4, doJpg];

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Auto change every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextImage, 5000);
    return () => clearInterval(interval);
  }, []);

  const toggleFullscreen = () => setIsFullscreen(!isFullscreen);

  const reasons = [
    {
      title: "Specialized Support",
      text: "Experience in real estate, group homes, and small business bookkeeping.",
    },
    {
      title: "Time-Saving",
      text: "We take care of admin so you can focus on clients and growth.",
    },
    {
      title: "Flexible & Scalable",
      text: "Support that adapts as your workload grows.",
    },
    {
      title: "Clear Communication",
      text: "Friendly, reliable, and easy to reach when needed.",
    },
  ];

  return (
    <section
      className="relative overflow-hidden text-light py-20"
      style={{ fontFamily: "Georgia, serif", WebkitFontSmoothing: "antialiased" }}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black/85 to-purple-950" />

      {/* Soft glowing blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600/25 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/30 rounded-full blur-3xl translate-x-1/4 translate-y-1/4" />

      <div className="relative max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1 mb-4 rounded-full border border-light/30 text-light/80 text-xs tracking-[0.25em] uppercase">
            Why Us
          </span>

          <h2 className="text-3xl md:text-4xl font-bold mb-4 
              text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-purple-100 to-white">
            Why Small Businesses Choose
            <span className="block">Visions Within Solutions</span>
          </h2>

          <p className="text-light/70 max-w-3xl mx-auto text-sm md:text-base">
            A partner that keeps your operations organised and compliant while you focus on growth.
          </p>
        </div>

        {/* Main Content — Slider + Reasons */}
        <div className="grid gap-10 lg:grid-cols-2 items-start">
          
          {/* Image Slider */}
          <div className="relative w-full">
            <div
              className={`relative overflow-hidden rounded-xl bg-black/60 ${
                isFullscreen ? "fixed inset-0 z-50 rounded-none" : ""
              }`}
              onClick={toggleFullscreen}
              style={isFullscreen ? { backgroundColor: "rgba(0,0,0,0.9)" } : {}}
            >
             <img
  src={images[currentImageIndex]}
  alt="slider"
  className={`w-full transition-all duration-500 ${
    isFullscreen
      ? "h-full w-full object-contain"
      : "max-h-[420px] object-contain"
  } bg-black/40`}
  style={{ objectFit: "contain" }}
/>


              {/* Bottom overlay */}
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/70 to-transparent" />

              {/* Counter */}
              <div className="absolute bottom-4 left-4 bg-black/60 text-white px-3 py-1 rounded-full text-xs">
                {currentImageIndex + 1} / {images.length}
              </div>

              {/* Dots */}
              <div className="absolute bottom-4 right-4 flex gap-2">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImageIndex(idx);
                    }}
                    className={`h-2.5 w-2.5 rounded-full transition ${
                      idx === currentImageIndex ? "bg-white" : "bg-white/40"
                    }`}
                  />
                ))}
              </div>

              {/* Close button */}
              {isFullscreen && (
                <button
                  className="absolute top-4 right-4 bg-black/60 text-white p-2 rounded-full hover:bg-black/80 transition z-10"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFullscreen();
                  }}
                >
                  ✕
                </button>
              )}

              {/* Arrows */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 text-white p-3 rounded-full hover:bg-black/80 transition z-10"
              >
                ❮
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 text-white p-3 rounded-full hover:bg-black/80 transition z-10"
              >
                ❯
              </button>
            </div>
          </div>

          {/* Reasons */}
          <div className="space-y-6">
            <h3 className="text-xl md:text-2xl font-bold 
                text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-white mb-4">
              What Makes Us Different
            </h3>

            <div className="space-y-4">
              {reasons.map((r, i) => (
                <div
                  key={i}
                  className="flex gap-4 bg-light/5 border border-light/20 rounded-xl p-4 hover:bg-light/10 transition"
                >
                  <div className="h-9 w-9 flex items-center justify-center rounded-full bg-primary/20 text-sm font-semibold">
                    {i + 1}
                  </div>

                  <div>
                    <h4 className="text-sm md:text-base font-semibold text-light mb-1">
                      {r.title}
                    </h4>
                    <p className="text-xs md:text-sm text-light/75">{r.text}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

/* ===========================================================
   BOTTOM CTA SECTION — HERO STYLE BACKGROUND
   =========================================================== */

export function WhyChooseUsCTA() {
  return (
    <section
      className="relative overflow-hidden bg-black text-light py-20"
      style={{ fontFamily: "Georgia, serif", WebkitFontSmoothing: "antialiased" }}
    >
      {/* Hero-style background */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105 opacity-30"
        style={{ backgroundImage: `url(${doJpg})` }}
      />

      <div className="absolute inset-0 bg-gradient-to-br from-black via-black/80 to-purple-900/40" />

      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/25 rounded-full blur-3xl translate-x-1/4 translate-y-1/4" />

      <div className="relative max-w-5xl mx-auto px-6 text-center">

        <p className="text-lg md:text-xl italic text-light/90 mb-6">
          “Working with Visions Within Solutions has taken a huge load off our plate.
          Our transactions, compliance, and books are finally under control.”
        </p>

        <p className="text-light/70 text-sm md:text-base mb-8">
          — Client Name, Business Type
        </p>

        <h3 className="text-xl md:text-2xl font-bold mb-4 
            text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-purple-100 to-white">
          Ready to feel this kind of support?
        </h3>

        <p className="text-light/75 max-w-2xl mx-auto text-sm md:text-base mb-6">
          Let us take care of the back-office work so you can focus on your clients, team, and growth.
        </p>

        <button className="bg-primary hover:bg-primary/80 text-light font-semibold py-3 px-8 rounded-lg transition">
          Book a Call with Our Team
        </button>
      </div>
    </section>
  );
}

/* ===========================================================
   WRAPPER COMPONENT
   =========================================================== */

export default function WhyChooseUs() {
  return (
    <>
      <WhyChooseUsSection />
      <WhyChooseUsCTA />
    </>
  );
}

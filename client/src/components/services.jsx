import React from "react";
import doJpg from "../assets/do.jpg";

const ServiceCard = ({ title, subtitle, items, icon, featured = false }) => (
  <div
    className={[
      "group relative rounded-2xl backdrop-blur-xl p-7 shadow-lg transition-all duration-300",
      "border border-white/10 bg-white/5 hover:shadow-2xl hover:-translate-y-1",
      featured ? "lg:-mt-4 lg:mb-4 lg:bg-white/10 lg:border-primary/60" : "",
    ].join(" ")}
  >
    {/* Hover / featured glow line */}
    <div className="absolute inset-x-6 -top-px h-0.5 bg-gradient-to-r from-white via-purple-200 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

    <div className="flex items-start gap-4 mb-4">
      {/* Icon bubble */}
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 shadow-md text-xl shrink-0">
        <span className="group-hover:scale-110 transition-transform duration-300">
          {icon}
        </span>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-white mb-1">{title}</h3>
        <p className="text-xs text-white/55">{subtitle}</p>
      </div>
    </div>

    <ul className="space-y-2 mt-2">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3 text-white/80 text-sm">
          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-purple-300" />
          {item}
        </li>
      ))}
    </ul>
  </div>
);

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-black text-light py-24"
      style={{ fontFamily: "Georgia, serif", WebkitFontSmoothing: "antialiased" }}
    >
      {/* Background Image - SAME AS HERO */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105 opacity-30"
        style={{ backgroundImage: `url(${doJpg})` }}
      />

      {/* Gradient Overlay - SAME AS HERO */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black/80 to-purple-900/40" />

      {/* Glowing Blobs - SAME AS HERO */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/25 rounded-full blur-3xl translate-x-1/4 translate-y-1/4" />

      {/* CONTENT */}
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1 text-[11px] tracking-[0.25em] uppercase text-white/70 mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Services
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Back-Office Support, Done For You
          </h2>

          <p className="text-white/70 mt-3 text-sm md:text-base">
            Three core ways we keep your operations organised, compliant, and moving forward.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <ServiceCard
            icon="📑"
            title="Real Estate Transaction Management"
            subtitle="From contract to closing — handled with precision."
            items={[
              "Contract & deadline tracking",
              "Full documentation handling",
              "Client & partner coordination",
            ]}
          />

          <ServiceCard
            icon="🏡"
            featured
            title="Group Home Support"
            subtitle="Stay compliant. Stay ready. Stay organised."
            items={[
              "Licensing & application support",
              "Ongoing documentation systems",
              "Compliance management",
            ]}
          />

          <ServiceCard
            icon="📊"
            title="Bookkeeping Services"
            subtitle="Clean, clear, stress-free financial management."
            items={[
              "Income & expense tracking",
              "Reconciliation made simple",
              "Easy monthly snapshots",
            ]}
          />
        </div>

        {/* Bottom line */}
        <p className="mt-14 text-center text-xs text-white/50 tracking-wide">
          One partner for everything that slows your business down.
        </p>
      </div>
    </section>
  );
}

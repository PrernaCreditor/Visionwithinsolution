import React from "react";

export default function Process() {
  const steps = [
    {
      title: "Schedule a Call",
      text: "Tell us about your business, challenges, and the support you need.",
    },
    {
      title: "Choose Your Services",
      text: "Select a recommended package or build a plan tailored to your needs.",
    },
    {
      title: "We Get to Work",
      text: "We handle the admin, paperwork, and back-office tasks quietly in the background.",
    },
    {
      title: "Ongoing Support",
      text: "Receive updates, reports, and dependable communication at every step.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-purple-100/60 to-purple-200/40">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 mb-4 rounded-full border border-primary/30 text-primary text-xs tracking-[0.25em]">
            Process
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-3">
            How We Work With You
          </h2>

          <p className="text-secondary/70 max-w-2xl mx-auto text-sm md:text-base">
            A simple, streamlined process designed to support your business with clarity and confidence.
          </p>
        </div>

        {/* Timeline Steps */}
        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Connector Line (desktop only) */}
          <div className="hidden md:block absolute top-14 left-0 right-0 h-1 bg-primary/20 rounded-full" />

          {steps.map((step, index) => (
            <div
              key={index}
              className="relative bg-white/60 backdrop-blur-xl rounded-2xl border border-primary/20 shadow-lg p-6 text-center hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
            >
              {/* Number Badge */}
              <div className="relative z-10 mx-auto w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-purple-300/30 text-primary text-lg font-bold shadow-md">
                {index + 1}
              </div>

              {/* Connector Dot (desktop only) */}
              {index !== steps.length - 1 && (
                <div className="hidden md:block absolute top-14 right-[-12px] w-3 h-3 rounded-full bg-primary/40 shadow" />
              )}

              <h3 className="mt-5 text-lg font-semibold text-primary">
                {step.title}
              </h3>

              <p className="mt-2 text-secondary/70 text-sm leading-relaxed">
                {step.text}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

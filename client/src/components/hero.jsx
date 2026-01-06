import doJpg from "../assets/do.jpg";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-black text-light"
      style={{
        fontFamily: "Georgia, serif",
        WebkitFontSmoothing: "antialiased",
      }}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105 opacity-30"
        style={{ backgroundImage: `url(${doJpg})` }}
      />

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black/80 to-purple-900/40" />

      {/* Soft glowing blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/25 rounded-full blur-3xl translate-x-1/4 translate-y-1/4" />

      <div className="relative max-w-7xl mx-auto px-6 py-28 lg:py-36">
        <div className="grid lg:grid-cols-2 gap-16 items-center -mt-10 sm:-mt-14 lg:-mt-20">

          {/* LEFT CONTENT */}
          <div className="text-center lg:text-left space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs tracking-widest text-white/70 uppercase backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Back-office support for small businesses
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              <span className="text-white block">Smarter Back-Office</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-primary">
                Support for Growing Teams
              </span>
            </h1>

            <p className="text-base md:text-lg text-white/75 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              We handle admin, operations, bookkeeping, compliance, and
              paperwork so you can scale your business without the daily
              overwhelm.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#contact"
                className="bg-light text-primary px-8 py-3 rounded-xl font-semibold shadow-lg hover:bg-white hover:scale-105 transition text-center"
              >
                Book a Free Consultation
              </a>

              <a
                href="#services"
                className="border border-white/30 px-8 py-3 rounded-xl font-semibold text-white hover:bg-white hover:text-primary hover:scale-105 transition text-center"
              >
                Explore Our Services
              </a>
            </div>
          </div>

          {/* RIGHT SERVICES CARD */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-md rounded-3xl bg-white/10 border border-white/10 backdrop-blur-xl shadow-2xl p-8 space-y-5">
              <p className="text-xs uppercase tracking-wide text-white/60">
                What We Handle For You
              </p>

              <ul className="space-y-4 text-white/90 text-sm md:text-base">
                {[
                  "Real estate transaction & paperwork management",
                  "Group home & care home admin + compliance",
                  "Initial applications & ongoing regulatory tasks",
                  "Day-to-day bookkeeping & organized records",
                  "Document prep, scheduling & operational tasks",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <span className="mt-1 h-2 w-2 rounded-full bg-purple-300" />
                    {item}
                  </li>
                ))}
              </ul>

              <p className="text-xs text-white/60 pt-2">
                One dedicated partner for all the work that slows you down.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

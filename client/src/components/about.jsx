import aboutImg from "../assets/av.jpg";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-purple-50 via-purple-100/60 to-purple-200/40"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT: Image */}
        <div className="relative">
          <div className="rounded-3xl overflow-hidden shadow-xl border border-primary/10 bg-light">
            <img
              src={aboutImg}
              alt="About Visions Within Solutions"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Small badge on image */}
          <div className="absolute bottom-5 left-5 bg-white/90 text-secondary px-4 py-2 rounded-full flex items-center gap-2 shadow-md">
            <span className="h-2.5 w-2.5 rounded-full bg-primary" />
            <span className="text-xs font-medium">
              Your quiet back-office partner
            </span>
          </div>
        </div>

        {/* RIGHT: Content */}
        <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 md:p-10 shadow-lg border border-primary/10">
          
          {/* Tag */}
          <span className="inline-block px-4 py-1 mb-4 rounded-full border border-primary/30 text-primary text-xs tracking-[0.2em]">
            ABOUT
          </span>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-3">
            Visions Within Solutions
          </h2>

          {/* Short line */}
          <p className="text-sm md:text-base text-secondary/80 mb-6">
            Back-office support that keeps your business organised, compliant,
            and ready to grow.
          </p>

          {/* 3 simple pillars */}
          <div className="grid sm:grid-cols-3 gap-4 mb-7">
            <div className="rounded-xl border border-primary/15 bg-light/70 px-4 py-4">
              <h4 className="text-sm font-semibold text-primary mb-1">Compliance</h4>
              <p className="text-xs text-secondary/70">Stay on top of documents and requirements.</p>
            </div>

            <div className="rounded-xl border border-primary/15 bg-light/70 px-4 py-4">
              <h4 className="text-sm font-semibold text-primary mb-1">Organisation</h4>
              <p className="text-xs text-secondary/70">Clear systems behind your daily operations.</p>
            </div>

            <div className="rounded-xl border border-primary/15 bg-light/70 px-4 py-4">
              <h4 className="text-sm font-semibold text-primary mb-1">Support</h4>
              <p className="text-xs text-secondary/70">Reliable help for small and growing teams.</p>
            </div>
          </div>

          {/* Simple closing line */}
          <p className="text-xs md:text-sm text-secondary/70">
            We focus on the back-office work, so you can focus on the vision within your business.
          </p>
        </div>
      </div>
    </section>
  );
}

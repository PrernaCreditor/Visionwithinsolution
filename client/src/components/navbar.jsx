import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();

    const id = href.replace("#", "");
    const el = document.getElementById(id);

    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 shadow-sm">
      {/* Accent bar */}
      <div className="h-1 w-full bg-gradient-to-r from-purple-600 via-primary to-purple-400" />

      <nav className="w-full bg-gradient-to-r from-purple-50/80 via-white/80 to-purple-100/70 backdrop-blur-md border-b border-primary/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* LOGO + NAME */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, "#hero")}
            className="flex items-center space-x-4"
          >
            <img
              src="/logo.jpg"
              alt="Visions Within Solutions Logo"
              className="h-10 w-auto drop-shadow-md"
            />

            <div className="hidden md:block leading-tight">
              <p className="text-xs font-semibold text-secondary/70 tracking-[0.28em] uppercase">
                Visions Within
              </p>
              <p className="text-xl font-bold text-primary tracking-tight">
                Solutions
              </p>
            </div>
          </a>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-secondary">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={(e) => handleNavClick(e, item.href)}
                className="relative group cursor-pointer bg-transparent border-none outline-none"
              >
                <span className="group-hover:text-primary transition-colors">
                  {item.label}
                </span>
                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-gradient-to-r from-primary to-purple-500 rounded-full group-hover:w-full transition-all duration-200" />
              </button>
            ))}

            <button
              onClick={(e) => handleNavClick(e, "#contact")}
              className="bg-primary text-light px-5 py-2.5 rounded-full text-sm shadow-md hover:bg-primary/90 transition font-semibold"
            >
              Get Started
            </button>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden inline-flex flex-col justify-center items-center w-10 h-10 rounded-full border border-primary/30 bg-white/70 text-primary shadow-sm"
          >
            <span
              className={`h-0.5 w-6 bg-primary rounded-full transition-all duration-200 ${
                open ? "translate-y-1.5 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-6 bg-primary rounded-full my-1 transition-all duration-200 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`h-0.5 w-6 bg-primary rounded-full transition-all duration-200 ${
                open ? "-translate-y-1.5 -rotate-45" : ""
              }`}
            />
          </button>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className="md:hidden border-t border-primary/20 bg-purple-50/90 backdrop-blur-lg">
            <ul className="px-6 py-4 space-y-3 text-secondary text-sm font-medium">
              {navItems.map((item) => (
                <li key={item.label}>
                  <button
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="block w-full text-left py-1 hover:text-primary transition"
                  >
                    {item.label}
                  </button>
                </li>
              ))}

              <li className="pt-3">
                <button
                  onClick={(e) => handleNavClick(e, "#contact")}
                  className="block w-full text-center bg-primary text-light py-2.5 rounded-full shadow-md hover:bg-primary/90 transition font-semibold"
                >
                  Get Started
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}

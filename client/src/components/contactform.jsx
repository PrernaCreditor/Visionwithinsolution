import React, { useState } from "react";
import logo from "../assets/logo.png";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Real Estate",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: `
Service Needed: ${formData.service}

Message:
${formData.message}
          `,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to send message");
      }

      setSuccess("✅ Your message has been sent successfully!");
      setFormData({
        name: "",
        email: "",
        service: "Real Estate",
        message: "",
      });
    } catch (err) {
      setError("❌ Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-20 px-4 bg-gradient-to-br from-purple-50 via-white to-purple-100/60"
      style={{ WebkitFontSmoothing: "antialiased" }}
    >
      <div className="max-w-6xl mx-auto relative">
        {/* Background accents */}
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
            Tell us a bit about your business and we’ll follow up with clear next
            steps — no pressure, just support.
          </p>
        </div>

        <div className="relative grid gap-8 md:grid-cols-[1.1fr_1.2fr] items-stretch">
          {/* LEFT CARD */}
          <div className="bg-purple-100/60 backdrop-blur-xl rounded-3xl border border-primary/20 shadow-lg p-7 md:p-8 flex flex-col justify-between">
            <div>
              <div className="mb-6">
                <div className="bg-white rounded-full p-4 inline-flex shadow-md border border-primary/20">
                  <img src={logo} alt="Logo" className="w-24 md:w-28" />
                </div>
              </div>

              <h3 className="text-xl md:text-2xl font-semibold text-secondary mb-3">
                Get in touch with our team
              </h3>

              <p className="text-secondary/70 mb-6">
                Whether you're managing real estate, a group home, or a growing
                small business, we help lighten your admin load.
              </p>

              <div className="space-y-4 text-sm text-secondary/80">
                <p>📍 Supporting businesses nationwide</p>
                <p>📞 Phone: 216.245.8550</p>
                <p>📠 Fax: 216.674.6234</p>
                <p>📧 info@visionswithinsolutions.com</p>
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="bg-purple-50 backdrop-blur-xl rounded-3xl border border-primary/20 shadow-xl p-7 md:p-8 text-secondary">
            <h3 className="text-lg md:text-xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-purple-300 to-purple-700">
              Send us a message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5 text-sm font-medium">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Full Name"
                  className="w-full border px-4 py-2.5 rounded-md"
                />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Email Address"
                  className="w-full border px-4 py-2.5 rounded-md"
                />
              </div>

              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full border px-4 py-2.5 rounded-md"
              >
                <option>Real Estate</option>
                <option>Group Home Support</option>
                <option>Bookkeeping Services</option>
                <option>Other</option>
              </select>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                required
                placeholder="Tell us what support you're looking for..."
                className="w-full border px-4 py-2.5 rounded-md resize-none"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-primary text-white py-3 rounded-md font-semibold hover:bg-primary/90 transition"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

              {success && <p className="text-green-600 text-sm">{success}</p>}
              {error && <p className="text-red-600 text-sm">{error}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

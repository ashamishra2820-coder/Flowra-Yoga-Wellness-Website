
import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    e.target.reset();
  };

  return (
    <section className="min-h-screen bg-[#f5efec]">

      {/* Contact Hero Banner */}
      <div
        className="relative flex min-h-[380px] items-center justify-center bg-cover bg-center md:min-h-[450px]"
        style={{
          backgroundImage: `linear-gradient(rgba(25, 25, 22, 0.60), rgba(25, 25, 22, 0.60)), url("https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1920")`,
        }}
      >
        <div className="text-center text-white">
          <h1 className="font-serif text-5xl md:text-6xl">
            Contact
          </h1>

          <div className="mt-5 flex items-center justify-center gap-4 text-base">
            <a href="/" className="transition hover:text-[#d6b5a2]">
              Home
            </a>

            <span>—</span>

            <span className="text-[#e2c9bb]">Contact</span>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="px-5 py-20 md:py-24">
        <div className="mx-auto max-w-6xl">

          {/* Heading */}
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-semibold tracking-[4px] text-[#987965]">
              GET IN TOUCH
            </p>

            <h2 className="font-serif text-4xl font-semibold text-[#352820] md:text-5xl">
              We'd Love To Hear From You
            </h2>

            <p className="mt-4 text-[#76645a]">
              Have a question? Send us a message and we'll get back to you.
            </p>
          </div>

          {/* Form */}
          <div className="rounded-2xl bg-[#eee3de] p-6 md:p-12">

            {sent && (
              <p className="mb-6 rounded-lg bg-white p-4 text-[#765b49]">
                Thank you! Your inquiry has been received.
              </p>
            )}

            <form onSubmit={handleSubmit}>

              <div className="grid gap-7 md:grid-cols-2">

                {/* First Name */}
                <div>
                  <label className="mb-3 block text-lg text-[#352820]">
                    First Name <span className="text-[#987965]">*</span>
                  </label>

                  <input
                    type="text"
                    name="firstName"
                    placeholder="Your First Name"
                    required
                    className="w-full rounded-md border-0 bg-white px-7 py-5 text-[#352820] outline-none focus:ring-2 focus:ring-[#987965]"
                  />
                </div>

                {/* Last Name */}
                <div>
                  <label className="mb-3 block text-lg text-[#352820]">
                    Last Name <span className="text-[#987965]">*</span>
                  </label>

                  <input
                    type="text"
                    name="lastName"
                    placeholder="Your Last Name"
                    required
                    className="w-full rounded-md border-0 bg-white px-7 py-5 text-[#352820] outline-none focus:ring-2 focus:ring-[#987965]"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="mb-3 block text-lg text-[#352820]">
                    Email Address <span className="text-[#987965]">*</span>
                  </label>

                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    className="w-full rounded-md border-0 bg-white px-7 py-5 text-[#352820] outline-none focus:ring-2 focus:ring-[#987965]"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="mb-3 block text-lg text-[#352820]">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    placeholder="Your Phone Number"
                    className="w-full rounded-md border-0 bg-white px-7 py-5 text-[#352820] outline-none focus:ring-2 focus:ring-[#987965]"
                  />
                </div>

                {/* Message */}
                <div className="md:col-span-2">
                  <label className="mb-3 block text-lg text-[#352820]">
                    Message <span className="text-[#987965]">*</span>
                  </label>

                  <textarea
                    name="message"
                    rows="6"
                    placeholder="Write Your Message Here"
                    required
                    className="w-full resize-none rounded-md border-0 bg-white px-7 py-5 text-[#352820] outline-none focus:ring-2 focus:ring-[#987965]"
                  />
                </div>

              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="mt-8 inline-flex items-center gap-4 rounded-md bg-[#8b6957] px-8 py-5 text-sm font-semibold text-white transition hover:bg-[#70513f]"
              >
                SEND INQUIRY
                <span className="text-lg">→</span>
              </button>

            </form>
          </div>
        </div>
      </div>

    </section>
  );
}

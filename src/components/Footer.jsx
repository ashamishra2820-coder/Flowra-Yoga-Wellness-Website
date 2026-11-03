import flowraLogo from "../assets/img/Logo-Light.png";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
} from "react-icons/fa";

const quickLinks = [
  "About",
  "Classes",
  "Instructors",
  "Products",
  "Blog",
  "Contact",
];

const socials = [
  { Icon: FaFacebookF, label: "Facebook" },
  { Icon: FaTwitter, label: "Twitter" },
  { Icon: FaInstagram, label: "Instagram" },
  { Icon: FaYoutube, label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="bg-[#242a20] px-6 text-[#c8c9c5]">
      <div className="mx-auto max-w-[1430px]">

        {/* Newsletter */}
        <div className="grid gap-8 border-b border-white/10 py-16 md:grid-cols-2 md:items-center">

          <div>
            <h2 className="mb-4 font-serif text-3xl text-white">
              Subscribe Our Newsletter
            </h2>

            <p className="max-w-[680px] text-base leading-7">
              Subscribe to our newsletter for yoga tips, wellness
              inspiration, exclusive offers, and the latest studio updates.
            </p>
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              required
              placeholder="Your Email Address"
              className="h-[53px] min-w-0 flex-1 rounded-md border-none bg-[#343b30] px-7 text-base text-white placeholder:text-gray-300 focus:ring-1 focus:ring-[#99745e]"
            />

            <button
              type="submit"
              className="flex h-[53px] items-center justify-center gap-3 rounded-md bg-white px-7 text-sm font-medium text-black transition hover:bg-[#e9e5df]"
            >
              SUBSCRIBE
              <FaEnvelope size={14} />
            </button>
          </form>
        </div>

        {/* Footer Main Content */}
        <div className="grid gap-12 border-b border-white/10 py-14 md:grid-cols-3">

          {/* Brand */}
          <div>
            <a href="#home" className="mb-7 inline-flex items-center">
              <img
                src={flowraLogo}
                alt="Flowra Logo"
                className="h-12 w-auto object-contain"
              />
            </a>

            <p className="max-w-[340px] text-base leading-[27px]">
              Experience the harmony of mind, body, and spirit in a space
              designed for growth, balance, and well-being.
            </p>

            <h3 className="mb-6 mt-11 font-serif text-xl text-white">
              Follow Us:
            </h3>

            <div className="flex gap-3">
              {socials.map(({ Icon, label }) => (
                <a
                  href="#"
                  key={label}
                  aria-label={label}
                  className="flex h-[43px] w-[41px] items-center justify-center rounded-md bg-[#343b30] text-white transition hover:bg-[#99745e]"
                >
                  <Icon size={19} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:pl-5 lg:pl-10">
            <h3 className="mb-7 font-serif text-2xl text-white">
              Quick Links
            </h3>

            <ul className="space-y-[15px]">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(" ", "-")}`}
                    className="text-base transition hover:text-white"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:pl-5 lg:pl-10">

            <div className="mb-8">
              <h3 className="mb-3 font-serif text-2xl text-white">
                Email Address:
              </h3>
              <p className="text-base">Flowra@support.com</p>
            </div>

            <div className="mb-8">
              <h3 className="mb-3 font-serif text-2xl text-white">
                Our Phone:
              </h3>
              <p className="text-base">(555) 987-6543</p>
            </div>

            <div>
              <h3 className="mb-3 font-serif text-2xl text-white">
                Our Location:
              </h3>
              <p className="max-w-[270px] text-base leading-7">
                Jalan By Pass Ngurah Rai – Denpasar, Bali.
              </p>
            </div>

          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col justify-between gap-5 py-8 sm:flex-row sm:items-center">

          <p className="text-base">
            <span className="text-[#c5a58a]">©</span> Flowra by
            aminastudio. All Right Reserved 2026.
          </p>

          <div className="flex gap-8 text-base">
            <a href="#privacy" className="transition hover:text-white">
              Privacy Policy
            </a>

            <a href="#terms" className="transition hover:text-white">
              Terms & Services
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
}

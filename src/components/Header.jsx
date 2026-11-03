import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";

import flowraLogo from "../assets/img/Logo-Light.png";


const links = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/#about" },
  { label: "Classes", href: "/#classes" },
  { label: "Pages", href: "/#pages" },
  { label: "Blog", href: "/#blog" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-[#252c20] shadow-md"
          : "bg-transparent"
      }`}
    >
      <Navbar
  fluid
  className="mx-auto max-w-[1600px] bg-transparent px-5 py-4 md:px-9"
>
  <NavbarBrand as={Link} to="/">
  <img
    src={flowraLogo}
    alt="Flowra Logo"
    className="h-10 w-auto object-contain md:h-12"
  />
</NavbarBrand>

<div className="flex items-center gap-3 md:order-2">
  <a
    href="/contact"
    className="inline-flex items-center gap-3 rounded bg-white px-4 py-3 text-xs font-semibold tracking-wide text-black transition hover:bg-[#e9e5df] sm:px-6"
  >
    CONTACT US
    <span className="text-base">↗</span>
  </a>

  <NavbarToggle className="text-white hover:bg-white/10 focus:ring-0" />
</div>

        <NavbarCollapse>
          {links.map((link) => (
            <NavbarLink
              key={link.href}
              href={link.href}
              className="font-medium uppercase tracking-wide text-white hover:text-[#c5a58a] md:bg-transparent md:text-white"
            >
              {link.label}
            </NavbarLink>
          ))}
        </NavbarCollapse>
      </Navbar>
    </header>
  );
}

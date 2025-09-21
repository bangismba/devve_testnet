// src/components/Footer.tsx
import { Facebook, Twitter, Linkedin, Github, Mail, Phone, MapPin } from "lucide-react";
import ghunaghostLogo from "../assets/img/ghunaghostlogo.png";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 pt-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Company Info */}
        <div>
          <img
            src={ghunaghostLogo}
            alt="Ghunaghost Tech Logo"
            className="w-28 mb-4"
          />
          <p className="text-sm leading-relaxed">
            Ghunaghost Tech Ltd is a leading provider of digital solutions, 
            offering services in web and mobile app development, cybersecurity, UI/UX design, 
            and technology consulting to empower businesses across Africa and beyond.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#about" className="hover:text-blue-400 transition">About</a></li>
            <li><a href="#projects" className="hover:text-blue-400 transition">Projects</a></li>
            <li><a href="#services" className="hover:text-blue-400 transition">Services</a></li>
            <li><a href="#contact" className="hover:text-blue-400 transition">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white font-semibold mb-4">Our Services</h3>
          <ul className="space-y-2 text-sm">
            <li>Website Development</li>
            <li>Cybersecurity Solutions</li>
            <li>UI/UX Design</li>
            <li>IT Consulting</li>
            <li>Tech Education</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-blue-400" />
              ghunaghost@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-blue-400" />
              +234 903 820 2718
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-blue-400" />
              No 3 Jim Nwobodo St, Apo Legislative Quarters, Abuja, Nigeria
            </li>
          </ul>
          <div className="flex gap-4 mt-6">
            <a href="https://web.facebook.com/itzbangismba" className="hover:text-blue-400 transition"><Facebook className="w-5 h-5" /></a>
            <a href="https://x.com/itz_bangismba" className="hover:text-blue-400 transition"><Twitter className="w-5 h-5" /></a>
            <a href="https://www.linkedin.com/in/muhammadu-aliyu-babangida" className="hover:text-blue-400 transition"><Linkedin className="w-5 h-5" /></a>
            <a href="https://github.com/bangismba" className="hover:text-blue-400 transition"><Github className="w-5 h-5" /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 mt-12 py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Ghunaghost Tech Ltd. All rights reserved.
      </div>
    </footer>
  );
}

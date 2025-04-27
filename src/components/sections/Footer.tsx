'use client';

import Link from "next/link";
import AppLogo from "@/components/AppLogo";
import { FaGithub, FaLinkedin } from "react-icons/fa";

interface FooterLink {
  href: string;
  label: string;
}

const quickLinks: FooterLink[] = [
  { href: "/", label: "Home" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
  { href: "#contact", label: "Contact Us" },
];

const socialLinks = [
  { href: "https://github.com", icon: FaGithub, label: "GitHub" },
  { href: "https://linkedin.com", icon: FaLinkedin, label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 py-12 bg-gray-50 font-poppins">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Logo and Description */}
            <div>
              <div className="flex items-center mb-4">
                <AppLogo className="w-40 h-40" />
                <div className="text-xl font-bold text-primary ml-2">
                  MediScan
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Empowering healthcare decisions with AI-powered medicine
                identification and information.
              </p>
              <p className="text-sm text-gray-500">
                © 2023 MediScan by Kethan VR. All rights reserved.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-bold text-gray-800 mb-4">Quick Links</h3>              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-primary text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}              </ul>
            </div>

            {/* Connect */}
            <div>
              <h3 className="font-bold text-gray-800 mb-4">
                Connect With Us
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Have questions or feedback? We'd love to hear from you.
              </p>
              <div className="flex space-x-4">                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <Link
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="bg-white p-2 rounded-full text-gray-500 hover:text-primary"
                    >
                      <Icon className="w-5 h-5" />
                    </Link>
                  );
                })}              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 mt-8 pt-8 text-center">
            <p className="text-sm text-gray-500">
              MediScan is designed to assist with medicine identification but
              is not a substitute for professional medical advice.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

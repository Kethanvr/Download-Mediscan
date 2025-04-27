import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import PhoneMockup from "@/components/PhoneMockup";
import AppLogo from "@/components/AppLogo";
import PlaceholderAppScreen from "@/components/PlaceholderAppScreen";
import { FaDownload, FaGithub, FaLinkedin } from "react-icons/fa";
import {
  MdStar,
  MdHistory,
  MdChat,
  MdCameraAlt,
  MdUpload,
  MdSpeed,
} from "react-icons/md";
import { RiAdvertisementLine } from "react-icons/ri";

export default function Home() {
  return (
  
  
    <main className="min-h-screen">
      {/* Header Section */}
      <header className="bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="container mx-auto pt-4 pb-6 text-center">
          {/* App Logo */}
          <div className="flex justify-center mb-8">
            <AppLogo className="w-40 h-40" />
          </div>

          {/* Badge */}
          <div className="inline-block bg-blue-100 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            Built for Rural Healthcare Empowerment
          </div>

          {/* Tagline */}
          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-gray-800">
            AI Medicine Scanner{" "}
            <span className="text-primary">at Your Fingertips</span>
          </h1>

          {/* App Description */}
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-12 text-gray-600">
            Capture a photo and access instant, AI-powered medicine information
            — faster, safer, smarter healthcare for everyone, everywhere.
          </p>

          {/* Download Button */}
          <a href="/app-release.apk" download>
            <button
              type="button"
              className="flex items-center mx-auto bg-primary text-white px-8 py-4 rounded-lg font-semibold text-lg mb-16 hover:bg-blue-600 transition-colors shadow-lg"
            >
              <FaDownload className="mr-2" />
              Download APK
            </button>
          </a>

          {/* Phone Demo */}
          <div className="flex justify-center">
            <PhoneMockup className="scale-75 md:scale-90 lg:scale-100">
              <div className="bg-blue-500 text-white h-full flex flex-col">
                <Image
                  src="/assets/Homage-page.png"
                  alt="MediScan Home Page"
                  width={300}
                  height={600}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </PhoneMockup>
          </div>
        </div>
      </header>

      {/* About App Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            🩺 About MediScan
          </h2>

          <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center mb-16">
            MediScan is your trusted AI-powered health companion designed to
            simplify medicine identification and understanding. Whether
            you&apos;re a healthcare professional, a caregiver, or an individual
            from rural areas or senior communities — MediScan empowers you to
            make informed decisions, instantly.
          </p>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-8">
                🔍 Features
              </h3>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="bg-primary rounded-full p-2 text-white mr-4 mt-1">
                    <MdCameraAlt className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">
                      Instant Medicine Scanning
                    </h4>
                    <p className="text-gray-600">
                      Identify all key details with just one click.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary rounded-full p-2 text-white mr-4 mt-1">
                    <MdChat className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">
                      AI Assistant (Doc AI Chatbot)
                    </h4>
                    <p className="text-gray-600">
                      Ask any health-related questions about your scanned
                      medicine.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary rounded-full p-2 text-white mr-4 mt-1">
                    <MdHistory className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">History Tracking</h4>
                    <p className="text-gray-600">
                      Save and manage your scan history for future reference.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary rounded-full p-2 text-white mr-4 mt-1">
                    <MdUpload className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">
                      Health Record Upload
                    </h4>
                    <p className="text-gray-600">
                      Securely upload and access your medical records.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary rounded-full p-2 text-white mr-4 mt-1">
                    <RiAdvertisementLine className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">
                      No Ads, No Clutter
                    </h4>
                    <p className="text-gray-600">100% ad-free experience.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary rounded-full p-2 text-white mr-4 mt-1">
                    <MdSpeed className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">
                      Fast & Lightweight
                    </h4>
                    <p className="text-gray-600">
                      Designed for speed and efficiency.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="flex justify-center">
              <PhoneMockup>
                <Image
                  src="/assets/Accunt-gold.png"
                  alt="MediScan Home Page"
                  width={300}
                  height={600}
                  className="w-full h-full object-cover rounded-lg"
                />
              </PhoneMockup>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshots Gallery */}
      <section className="py-20 container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-yellow-500">
          ✨ Introducing MediScan Gold
        </h2>
        <p className="text-gray-600 text-center mb-12">
          Unlock the ultimate MediScan experience! With{" "}
          <span className="font-semibold text-yellow-500">Gold Membership</span>
          , enjoy a stunning gold-themed UI, early access to new features,
          unlimited scans, unlimited uploads, priority support, and so much
          more.
          <br />
          Be more than a user —{" "}
          <span className="font-semibold">be a Gold Member</span>! 🚀
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

            <div className="flex justify-center">
            <PhoneMockup className="scale-75 md:scale-90">
             <Image
                  src="/assets/Gold-plan.png"
                  alt="MediScan Home Page"
                  width={300}
                  height={600}
                  className="w-full h-full object-cover rounded-lg"
                />
            </PhoneMockup>
          </div>
          <div className="flex justify-center">
            <PhoneMockup className="scale-75 md:scale-90">
              <Image
                  src="/assets/Home-gold.png"
                  alt="MediScan Home Page"
                  width={300}
                  height={600}
                  className="w-full h-full object-cover rounded-lg"
                />
            </PhoneMockup>
          </div>

          <div className="flex justify-center">
            <PhoneMockup className="scale-75 md:scale-90">
          <Image
                  src="/assets/Histroy-gold.png"
                  alt="MediScan Home Page"
                  width={300}
                  height={600}
                  className="w-full h-full object-cover rounded-lg"
                />
            </PhoneMockup>
          </div>

        

          <div className="flex justify-center">
            <PhoneMockup className="scale-75 md:scale-90">
              <Image
                  src="/assets/Accunt-gold.png"
                  alt="MediScan Home Page"
                  width={300}
                  height={600}
                  className="w-full h-full object-cover rounded-lg"
                />
            </PhoneMockup>
          </div>
        </div>
      </section>

      {/* Rural Healthcare Section */}
      <section className="py-20">
        <div className="container mx-auto">
          <div className="bg-blue-50 rounded-2xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-block bg-blue-100 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                Rural Healthcare Empowerment
              </div>

              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Bridging the Healthcare Gap
              </h2>

              <p className="text-lg text-gray-700 mb-8">
                MediScan was designed with rural communities in mind, where
                access to pharmacists and doctors is limited. Our app helps
                individuals identify medications, understand dosages, and access
                critical information without needing internet connectivity for
                every scan.
              </p>

              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div className="bg-white p-6 rounded-lg">
                  <div className="text-primary font-bold text-lg mb-2">
                    Offline Access
                  </div>
                  <p className="text-gray-600">
                    Core functionality works without continuous internet
                    connection after initial setup.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg">
                  <div className="text-primary font-bold text-lg mb-2">
                    Multilingual Support
                  </div>
                  <p className="text-gray-600">
                    Access medicine information in your preferred regional
                    language.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg">
                  <div className="text-primary font-bold text-lg mb-2">
                    Low Resource Design
                  </div>
                  <p className="text-gray-600">
                    Optimized to work on older smartphones with limited
                    processing power.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-12">
            ⭐ What Our Users Say
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex justify-center mb-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((index) => (
                    <MdStar key={index} className="text-yellow-400 w-5 h-5" />
                  ))}
                </div>
              </div>

              <blockquote className="text-gray-600 italic mb-6">
                "Finally an app that makes medicine scanning easy, especially
                helpful for my grandparents who can't read small print on
                medicine boxes!"
              </blockquote>

              <div className="font-medium">Suman R.</div>
              <div className="text-sm text-gray-500">Rural Health Worker</div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex justify-center mb-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((index) => (
                    <MdStar key={index} className="text-yellow-400 w-5 h-5" />
                  ))}
                </div>
              </div>

              <blockquote className="text-gray-600 italic mb-6">
                "MediScan's Doc AI chatbot answered my doubts about medication
                interactions in seconds. A game-changer for our community
                clinic!"
              </blockquote>

              <div className="font-medium">Prakash D.</div>
              <div className="text-sm text-gray-500">Community Pharmacist</div>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">
            📱 Download MediScan Today
          </h2>

          <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-5xl mx-auto">
            <div className="md:w-1/2 flex justify-center">
              <PhoneMockup className="scale-75 md:scale-90">
              <Image
                  src="/assets/Home-gold.png"
                  alt="MediScan Home Page"
                  width={300}
                  height={600}
                  className="w-full h-full object-cover rounded-lg"
                />
            </PhoneMockup>
            </div>

            <div className="md:w-1/2 text-left">
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold mb-4">
                  MediScan (Beta Release)
                </h3>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="border rounded-lg p-3">
                    <div className="text-sm text-gray-500 mb-1">Version</div>
                    <div className="font-medium">v1.0.0-beta</div>
                  </div>

                  <div className="border rounded-lg p-3">
                    <div className="text-sm text-gray-500 mb-1">Size</div>
                    <div className="font-medium">~6 MB</div>
                  </div>

                  <div className="border rounded-lg p-3">
                    <div className="text-sm text-gray-500 mb-1">Platform</div>
                    <div className="font-medium">Android 6.0+</div>
                  </div>

                  <div className="border rounded-lg p-3">
                    <div className="text-sm text-gray-500 mb-1">Updated</div>
                    <div className="font-medium">May 2025</div>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg mb-6">
                  <div className="flex items-start">
                    <div className="text-blue-500 mr-3 mt-1">ℹ️</div>
                    <div>
                      <div className="font-medium text-blue-700 mb-1">
                        Installation Note
                      </div>
                      <p className="text-sm text-gray-600">
                        This app requires camera permission for scanning
                        medicine. You may need to enable installation from
                        unknown sources.
                      </p>
                    </div>
                  </div>
                </div>

                <a href="/app-release.apk" download>
                  <button
                    type="button"
                    className="w-full flex items-center justify-center bg-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-600 transition-colors"
                  >
                    <FaDownload className="mr-2" />
                    Download APK
                  </button>
                </a>
              </div>

              <div className="mt-6 bg-blue-50 p-4 rounded-lg text-center">
                <p className="text-sm text-blue-600">
                  <span className="font-medium">Coming Soon:</span> iOS Version
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-12 bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
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

              <div>
                <h3 className="font-bold text-gray-800 mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/"
                      className="text-gray-600 hover:text-primary text-sm"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/privacy"
                      className="text-gray-600 hover:text-primary text-sm"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/terms"
                      className="text-gray-600 hover:text-primary text-sm"
                    >
                      Terms of Service
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#contact"
                      className="text-gray-600 hover:text-primary text-sm"
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-gray-800 mb-4">
                  Connect With Us
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Have questions or feedback? We'd love to hear from you.
                </p>
                <div className="flex space-x-4">
                  <Link
                    href="https://github.com"
                    aria-label="GitHub"
                    className="bg-white p-2 rounded-full text-gray-500 hover:text-primary"
                  >
                    <FaGithub className="w-5 h-5" />
                  </Link>
                  <Link
                    href="https://linkedin.com"
                    aria-label="LinkedIn"
                    className="bg-white p-2 rounded-full text-gray-500 hover:text-primary"
                  >
                    <FaLinkedin className="w-5 h-5" />
                  </Link>
                </div>
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
    </main>
    
  );
}

import Image from "next/image";
import Link from "next/link";
import PhoneMockup from "@/components/PhoneMockup";
import AppLogo from "@/components/AppLogo";
import PlaceholderAppScreen from "@/components/PlaceholderAppScreen";
import { FaDownload, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { MdStar } from "react-icons/md";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Header Section */}
      <header className="container mx-auto pt-10 pb-6 text-center">
        {/* Placeholder Logo */}
        <div className="flex justify-center mb-6">
          <AppLogo width={96} height={96} />
        </div>
        
        {/* Tagline */}
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Scan Smarter, Stay Healthier
        </h1>
        
        {/* App Description */}
        <p className="text-lg md:text-xl max-w-lg mx-auto mb-8 text-gray-600">
          MediScan helps you identify medications, track prescriptions, and stay on top of your health with just a quick scan.
        </p>
        
        {/* Download Button */}
        <button type="button" className="flex items-center mx-auto bg-primary text-white px-8 py-4 rounded-lg font-semibold text-lg mb-20 hover:bg-blue-600 transition-colors">
          <FaDownload className="mr-2" />
          Download APK
        </button>
      </header>
      
      {/* About App Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">About MediScan</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="bg-primary rounded-full p-2 text-white mr-4 mt-1">
                    <div className="w-5 h-5 flex items-center justify-center">✓</div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Instant Medication Identification</h3>
                    <p className="text-gray-600">Simply scan any pill or medication packaging for immediate identification and information.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary rounded-full p-2 text-white mr-4 mt-1">
                    <div className="w-5 h-5 flex items-center justify-center">✓</div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Prescription Tracking</h3>
                    <p className="text-gray-600">Set reminders for medications and track your prescription history with ease.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary rounded-full p-2 text-white mr-4 mt-1">
                    <div className="w-5 h-5 flex items-center justify-center">✓</div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Interaction Checker</h3>
                    <p className="text-gray-600">Check for potential drug interactions and side effects before taking multiple medications.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary rounded-full p-2 text-white mr-4 mt-1">
                    <div className="w-5 h-5 flex items-center justify-center">✓</div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Health Profile</h3>
                    <p className="text-gray-600">Store your medical history and health data securely in one place.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="flex justify-center">
              <PhoneMockup>
                <div className="bg-blue-50 h-full flex items-center justify-center p-4">
                  <PlaceholderAppScreen />
                </div>
              </PhoneMockup>
            </div>
          </div>
        </div>
      </section>
      
      {/* Screenshots Gallery */}
      <section className="py-20 container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">App Screenshots</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((index) => (
            <div key={index} className="flex justify-center">
              <PhoneMockup className="scale-75 md:scale-90">
                <div className="bg-blue-500 text-white h-full flex flex-col">
                  <div className="p-4 flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-white" />
                    <div className="text-sm font-medium">MediScan</div>
                  </div>
                  <div className="flex-1 bg-white p-4">
                    <PlaceholderAppScreen />
                  </div>
                </div>
              </PhoneMockup>
            </div>
          ))}
        </div>
      </section>
      
      {/* Testimonial Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-12">What Our Users Say</h2>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex justify-center mb-4">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((index) => (
                  <MdStar key={index} className="text-yellow-400 w-6 h-6" />
                ))}
              </div>
            </div>
            
            <blockquote className="text-lg md:text-xl italic text-gray-600 mb-6">
              "MediScan has completely changed how I manage my medications. The scanning feature is incredibly accurate, and the reminders ensure I never miss a dose."
            </blockquote>
            
            <div className="flex items-center justify-center">
              <div className="w-12 h-12 bg-gray-300 rounded-full mr-4" />
              <div className="text-left">
                <div className="font-medium">Sarah Johnson</div>
                <div className="text-sm text-gray-500">MediScan User</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Second Download Button */}
      <section className="py-20 container mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to get started?</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          Download MediScan today and take control of your medication management
        </p>
        
        <button type="button" className="flex items-center mx-auto bg-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-600 transition-colors">
          <FaDownload className="mr-2" />
          Download APK
        </button>
      </section>
      
      {/* Footer */}
      <footer className="border-t border-gray-200 py-12">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="text-xl font-bold text-primary mb-2">MediScan</div>
              <p className="text-sm text-gray-500">© 2025 MediScan. All rights reserved.</p>
            </div>
            
            <div className="flex flex-col items-center md:items-end mb-6 md:mb-0">
              <div className="flex space-x-6 mb-4">
                <Link href="/privacy" className="text-gray-600 hover:text-primary text-sm">Privacy Policy</Link>
                <Link href="/terms" className="text-gray-600 hover:text-primary text-sm">Terms of Service</Link>
                <Link href="#contact" className="text-gray-600 hover:text-primary text-sm">Contact Us</Link>
              </div>
            </div>
            
            <div className="flex space-x-6">
              <Link href="https://facebook.com" aria-label="Facebook" className="text-gray-500 hover:text-primary">
                <FaFacebook className="w-6 h-6" />
              </Link>
              <Link href="https://twitter.com" aria-label="Twitter" className="text-gray-500 hover:text-primary">
                <FaTwitter className="w-6 h-6" />
              </Link>
              <Link href="https://instagram.com" aria-label="Instagram" className="text-gray-500 hover:text-primary">
                <FaInstagram className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

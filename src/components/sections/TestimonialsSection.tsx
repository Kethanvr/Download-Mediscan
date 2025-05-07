"use client";

import { MdStar } from "react-icons/md";

interface Testimonial {
  content: string;
  name: string;
  role: string;
  rating: number; // Added rating property to reflect dynamic ratings
}

const testimonials: Testimonial[] = [
  {
    content:
      "Finally an app that makes medicine scanning easy, especially helpful for my grandparents who can't read small print on medicine boxes!",
    name: "Suman R.",
    role: "Rural Health Worker",
    rating: 5, // Rating out of 5
  },
  {
    content:
      "MediScan's Doc AI chatbot answered my doubts about medication interactions in seconds. A game-changer for our community clinic!",
    name: "Prakash D.",
    role: "Community Pharmacist",
    rating: 4, // Rating out of 5
  },
  {
    content:
      "MediScan has been incredibly useful in identifying medications in our remote village. It helps people save time and avoid harmful medications!",
    name: "Ravi K.",
    role: "Village Healthcare Worker",
    rating: 5, // Rating out of 5
  },
  {
    content:
      "MediScan has truly transformed the way we manage medications in our rural clinic. It's quick, easy to use, and has helped us avoid critical mistakes in patient care.",
    name: "Anjali S.",
    role: "Rural Clinic Nurse",
    rating: 5, // Rating out of 5
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 font-poppins bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-12">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
              USER TESTIMONIALS
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            ⭐ What Our Users Say
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of satisfied users who trust MediScan for their
            healthcare needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Star Rating */}
              <div className="flex justify-center mb-4">
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, idx) => (
                    <MdStar
                      key={`star-${testimonial.name}-${idx}`}
                      className="text-yellow-400 w-5 h-5"
                    />
                  ))}
                </div>
              </div>

              {/* Testimonial Content */}
              <blockquote className="text-gray-600 italic mb-6 text-base md:text-lg">
                "{testimonial.content}"
              </blockquote>

              {/* User Info */}
              <div className="flex items-center justify-center space-x-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-medium text-gray-800">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-500">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

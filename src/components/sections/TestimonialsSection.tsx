'use client';

import { MdStar } from "react-icons/md";

interface Testimonial {
  content: string;
  name: string;
  role: string;
  rating: number; // Added rating property to reflect dynamic ratings
}

const testimonials: Testimonial[] = [
  {
    content: "Finally an app that makes medicine scanning easy, especially helpful for my grandparents who can't read small print on medicine boxes!",
    name: "Suman R.",
    role: "Rural Health Worker",
    rating: 5, // Rating out of 5
  },
  {
    content: "MediScan's Doc AI chatbot answered my doubts about medication interactions in seconds. A game-changer for our community clinic!",
    name: "Prakash D.",
    role: "Community Pharmacist",
    rating: 4, // Rating out of 5
  },
  {
    content: "MediScan has been incredibly useful in identifying medications in our remote village. It helps people save time and avoid harmful medications!",
    name: "Ravi K.",
    role: "Village Healthcare Worker",
    rating: 5, // Rating out of 5
  },{
  content: "MediScan has truly transformed the way we manage medications in our rural clinic. It's quick, easy to use, and has helped us avoid critical mistakes in patient care.",
  name: "Anjali S.",
  role: "Rural Clinic Nurse",
  rating: 5, // Rating out of 5
}

];

export default function TestimonialsSection() {
  return (
    <section className="bg-gray-50 py-20 font-poppins">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
          ⭐ What Our Users Say
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-white p-6 rounded-lg shadow-lg transition-all transform hover:scale-105 hover:shadow-xl"
            >
              {/* Star Rating */}
              <div className="flex justify-center mb-4">
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, idx) => (
                    <MdStar key={`star-${testimonial.name}-${idx}`} className="text-yellow-400 w-5 h-5" />
                  ))}
                </div>
              </div>

              {/* Testimonial Content */}
              <blockquote className="text-gray-600 italic mb-6">
                "{testimonial.content}"
              </blockquote>

              {/* User Info */}
              <div className="font-medium text-gray-800">{testimonial.name}</div>
              <div className="text-sm text-gray-500">{testimonial.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

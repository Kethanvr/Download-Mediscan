'use client';

import { MdStar } from "react-icons/md";

interface Testimonial {
  content: string;
  name: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    content: "Finally an app that makes medicine scanning easy, especially helpful for my grandparents who can't read small print on medicine boxes!",
    name: "Suman R.",
    role: "Rural Health Worker",
  },
  {
    content: "MediScan's Doc AI chatbot answered my doubts about medication interactions in seconds. A game-changer for our community clinic!",
    name: "Prakash D.",
    role: "Community Pharmacist",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-12">
          ⭐ What Our Users Say
        </h2>        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex justify-center mb-4"><div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <MdStar 
                      key={`star-${star}-${testimonial.name}`} 
                      className="text-yellow-400 w-5 h-5" 
                    />
                  ))}
                </div>
              </div>

              <blockquote className="text-gray-600 italic mb-6">
                "{testimonial.content}"
              </blockquote>

              <div className="font-medium">{testimonial.name}</div>
              <div className="text-sm text-gray-500">{testimonial.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

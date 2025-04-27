export default function RuralHealthcareSection() {
  const benefits = [
   
    {
      title: "Multilingual Support",
      description: "Access health and medicine information in multiple regional languages, making it easier for everyone to use.",
    },
    {
      title: "Low Resource Design",
      description: "Optimized for older smartphones with limited processing power, ensuring accessibility to all.",
    },
    {
      title: "Affordable Healthcare",
      description: "Low-cost access to critical healthcare information, empowering individuals in rural communities to make informed decisions.",
    },
  ];

  return (
    <section className="py-20 font-poppins bg-blue-50">
      <div className="container mx-auto">
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="max-w-3xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-block bg-blue-100 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              Rural Healthcare Empowerment
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Bridging the Healthcare Gap
            </h2>

            {/* Description */}
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              MediScan was designed specifically for rural communities where access to healthcare professionals can be limited. The app helps individuals identify medicines, understand dosages, and access vital health information with ease and without requiring constant internet connectivity.
            </p>

            {/* Benefits */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                  <div className="text-primary font-semibold text-lg mb-3">{benefit.title}</div>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

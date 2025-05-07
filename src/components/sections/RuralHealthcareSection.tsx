export default function RuralHealthcareSection() {
  const benefits = [
    {
      icon: "🌐",
      title: "Multilingual Support",
      description:
        "Access health and medicine information in multiple regional languages, making it easier for everyone to use.",
    },
    {
      icon: "📱",
      title: "Low Resource Design",
      description:
        "Optimized for older smartphones with limited processing power, ensuring accessibility to all.",
    },
    {
      icon: "💰",
      title: "Affordable Healthcare",
      description:
        "Low-cost access to critical healthcare information, empowering individuals in rural communities to make informed decisions.",
    },
  ];
  return (
    <section className="py-16 md:py-24 font-poppins bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
            RURAL HEALTHCARE INITIATIVE
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 md:mb-6 text-gray-800">
          Bridging the Healthcare Gap
        </h2>

        {/* Description */}
        <p className="text-base md:text-lg text-gray-600 text-center mb-10 md:mb-12 leading-relaxed max-w-3xl mx-auto">
          MediScan was designed specifically for rural communities where access
          to healthcare professionals can be limited. The app helps individuals
          identify medicines, understand dosages, and access vital health
          information with ease and without requiring constant internet
          connectivity.
        </p>

        {/* Card with benefits */}
        <div className="bg-white rounded-2xl p-6 md:p-12 shadow-xl border border-gray-100 max-w-6xl mx-auto">
          {/* Benefits */}
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-blue-600">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>

          {/* Call to action */}
          <div className="mt-10 md:mt-12 text-center">
            <p className="text-blue-600 font-medium mb-3 text-lg">
              Making healthcare accessible to everyone
            </p>
            <div className="inline-flex h-1 w-20 bg-gradient-to-r from-blue-400 to-cyan-400 rounded"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function RuralHealthcareSection() {
  const benefits = [
    {
      icon: "🌐",
      title: "Multilingual Support",
      description: "Access health and medicine information in multiple regional languages, making it easier for everyone to use.",
    },
    {
      icon: "📱",
      title: "Low Resource Design",
      description: "Optimized for older smartphones with limited processing power, ensuring accessibility to all.",
    },
    {
      icon: "💰",
      title: "Affordable Healthcare",
      description: "Low-cost access to critical healthcare information, empowering individuals in rural communities to make informed decisions.",
    },
  ];
  return (
    <section className="py-24 font-poppins">

      <div className="container mx-auto px-4">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
            RURAL HEALTHCARE INITIATIVE
          </div>
        </div>
        
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-800">
          Bridging the Healthcare Gap
        </h2>
        
        {/* Description */}
        <p className="text-lg md:text-xl text-gray-700 text-center mb-12 leading-relaxed max-w-3xl mx-auto">
          MediScan was designed specifically for rural communities where access to healthcare professionals can be limited. 
          The app helps individuals identify medicines, understand dosages, and access vital health information with ease 
          and without requiring constant internet connectivity.
        </p>        {/* Card with benefits */}
        <div className="bg-white rounded-lg p-8 md:p-12 shadow-md border border-gray-100 max-w-6xl mx-auto">
          {/* Benefits */}
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <div 
                key={benefit.title} 
                className="bg-blue-50 p-6 rounded-lg"
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
          <div className="mt-12 text-center">
            <p className="text-blue-600 font-medium mb-3">Making healthcare accessible to everyone</p>
            <div className="inline-flex h-1 w-20 bg-gradient-to-r from-blue-400 to-cyan-400 rounded"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

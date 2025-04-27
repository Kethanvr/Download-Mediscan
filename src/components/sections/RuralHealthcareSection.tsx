export default function RuralHealthcareSection() {
  const benefits = [
    {
      title: "Offline Access",
      description: "Core functionality works without continuous internet connection after initial setup.",
    },
    {
      title: "Multilingual Support",
      description: "Access medicine information in your preferred regional language.",
    },
    {
      title: "Low Resource Design",
      description: "Optimized to work on older smartphones with limited processing power.",
    },
  ];

  return (
    <section className="py-20 font-poppins">
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
            </p>            <div className="grid md:grid-cols-3 gap-6 text-left">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="bg-white p-6 rounded-lg">
                  <div className="text-primary font-bold text-lg mb-2">
                    {benefit.title}
                  </div>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

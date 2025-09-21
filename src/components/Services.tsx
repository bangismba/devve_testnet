// src/components/Services.tsx
import { Code, Palette, ShieldCheck, Rocket } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Web Development",
      description:
        "We craft scalable, secure, and high-performance web solutions that drive business growth and customer engagement.",
      icon: <Code className="w-10 h-10 text-blue-500" />,
    },
    {
      title: "UI/UX Design",
      description:
        "Our design team delivers stunning, user-centered interfaces that combine creativity with functionality for seamless experiences.",
      icon: <Palette className="w-10 h-10 text-pink-500" />,
    },
    {
      title: "Cybersecurity",
      description:
        "We safeguard businesses with advanced cybersecurity solutions, ensuring protection against evolving digital threats.",
      icon: <ShieldCheck className="w-10 h-10 text-green-500" />,
    },
    {
      title: "Startup Acceleration",
      description:
        "From MVP development to branding and market strategy, we help startups launch fast and scale sustainably.",
      icon: <Rocket className="w-10 h-10 text-purple-500" />,
    },
  ];

  return (
    <section id="services" className="w-full bg-gray-50 text-gray-800 px-6 py-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          What We <span className="text-blue-500">Offer</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
          At <span className="font-semibold text-gray-900">GhunaGhost Tech Ltd</span>, 
          we provide cutting-edge technology solutions to empower individuals, startups, 
          and enterprises to thrive in the digital era.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-2xl p-6 text-center transform hover:-translate-y-2 hover:shadow-2xl transition duration-300"
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

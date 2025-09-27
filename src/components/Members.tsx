
import { motion } from "framer-motion";
import profile  from "../assets/img/profile.jpg";

const members = [
  {
    name: "Aliyu Muhammadu Babangida",
    title: "CEO & Founder",
    image: profile, 
  },
  {
    name: "John Doe",
    title: "Lead Developer",
    image: "dev.jpg",
  },
  {
    name: "Jane Smith",
    title: "UI/UX Designer",
    image: "designer.jpg",
  },
  {
    name: "Michael Lee",
    title: "Blockchain Engineer",
    image: "blockchain.jpg",
  },
  {
    name: "Sarah Johnson",
    title: "Marketing Manager",
    image: "marketing.jpg",
  },
];

export default function Members() {
  return (
    <section
      id="members"
      className="w-full bg-gray-900 text-white px-6 py-20 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold">
          Meet Our <span className="text-blue-500">Team</span>
        </h2>
        <p className="text-gray-400 mt-2">The people behind Ghunaghost</p>
      </div>

      {/* Marquee Effect */}
      <motion.div
        className="flex gap-8"
        initial={{ x: "100%" }}
        animate={{ x: "-100%" }}
        transition={{ repeat: Infinity, duration: 50, ease: "linear" }}
      >
        {[...members, ...members].map((member, index) => (
          <div
            key={index}
            className="min-w-[220px] bg-gray-800 rounded-xl shadow-lg overflow-hidden"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-blue-400">
                {member.name}
              </h3>
              <p className="text-gray-300 text-sm">{member.title}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

"use client";
import { motion } from "framer-motion";

const reviews = [
  {
    text: "Fantastic host, she was very communicative and welcoming! The space itself is gorgeous, we were able to create content here easily. The fridge is stocked with beverages and tasty snacks. There was a speaker so we could jam out while being creative and the A/C was nice too! Thank you for having us!",
    name: "Diamond B.",
    role: "Model"
  },
  {
    text: "Had a great experience shooting here. Mallory was very communicative and accommodating. Highly recommend and would book again!",
    name: "Yasmin S.",
    role: "Creator"
  },
  {
    text: "Quality space, communicative host, great overall. The studio had great daylight and was fully equipped.",
    name: "Moises M.",
    role: "Photographer"
  },
  {
    text: "Amazing host!! Love Mallory's studio! Can't wait to come back thank you!",
    name: "Antonia T.",
    role: "Creator"
  },
  {
    text: "Fantastic studio/experience—would 100% book again. Mallory is super responsive and kind. The location was easy to find, the elevators were quick, and there's a little market downstairs. We also really appreciated the stocked fridge!! Overall just a smooth, easy experience from start to finish.",
    name: "Brittany M.",
    role: "Creative Manager"
  }
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-studio-bg">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-light tracking-tight mb-4">What Creators Are Saying</h2>
          <p className="text-xl text-gray-600">Real stories from people who’ve shot here</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-10 rounded-3xl shadow-sm"
            >
              <p className="text-lg leading-relaxed text-gray-700 mb-8">
                “{review.text}”
              </p>
              <div>
                <div className="font-medium">{review.name}</div>
                <div className="text-sm text-gray-500">{review.role}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-600 text-lg">⭐️⭐️⭐️⭐️⭐️ Loved by 61+ creators on Peerspace</p>
        </div>
      </div>
    </section>
  );
}
"use client"; // Only needed for Next.js 13+ app directory

import { motion as Motion } from "framer-motion";
import { Eye, Lightbulb, Globe2 } from "lucide-react";

// Motion variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

export function Features() {
  const features = [
    {
      icon: Eye,
      title: "Vision Beyond",
      desc: "Seeing possibilities where others see limitations."
    },
    {
      icon: Lightbulb,
      title: "Shattering Status Quo",
      desc: "Breaking barriers in education and accessibility."
    },
    {
      icon: Globe2,
      title: "The Future Within",
      desc: "Equipping students for a global tomorrow."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {features.map((feature, idx) => (
            <Motion.div
              key={idx}
              variants={fadeInUp}
              className="group p-8 rounded-2xl bg-background border border-border/50 
                         hover:border-secondary/20 hover:shadow-xl hover:shadow-secondary/5 
                         transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/5 text-primary 
                              group-hover:bg-secondary group-hover:text-white 
                              flex items-center justify-center mb-6 transition-colors duration-300">
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
            </Motion.div>
          ))}
        </Motion.div>
      </div>
    </section>
  );
}

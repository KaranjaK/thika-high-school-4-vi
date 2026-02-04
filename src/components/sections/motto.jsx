import { motion as Motion, useReducedMotion } from "framer-motion";
import { useId } from "react";

export function Motto() {
  const headingId = useId();
  const prefersReducedMotion = useReducedMotion();

  const items = ["Honesty", "Excellence", "Discipline", "Diligence", "Integrity", "Focus", "Faith", "Inspiration", "Positivity"];

  const itemAnimation = {
    initial: prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.5, ease: "easeOut" },
  };

  return (
    <section
      aria-labelledby={headingId}
      className="relative py-24 bg-secondary text-secondary-foreground overflow-hidden"
    >
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="
          absolute top-0 right-0 
          w-[400px] sm:w-[500px] 
          h-[400px] sm:h-[500px] 
          bg-white/5 
          rounded-full 
          blur-3xl 
          -translate-y-1/2 
          translate-x-1/2 
          pointer-events-none
        "
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <header className="text-center mb-16">
          <p className="text-sm font-bold tracking-widest uppercase opacity-70 mb-3">
            Our Motto
          </p>
          <h2
            id={headingId}
            className="text-3xl md:text-5xl font-display font-bold"
          >
            Faith &amp; Courage Yields Excellence
          </h2>
        </header>

        {/* Core Values */}
        <p className="text-center text-sm font-bold tracking-widest uppercase opacity-70 mb-3">
          Our Core Values
        </p>
        <ul role="list" className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          {items.map((value, index) => (
            <Motion.li
              key={value}
              {...itemAnimation}
              transition={{
                ...itemAnimation.transition,
                delay: prefersReducedMotion ? 0 : index * 0.1,
              }}
              className="
                group
                bg-white/10 
                backdrop-blur-sm 
                border border-white/20 
                p-8 
                rounded-xl 
                transition-all
                hover:bg-white/20
                focus-within:bg-white/20
              "
            >
              <span
                aria-hidden="true"
                className="
                  block h-1 w-12 
                  bg-white/40 
                  mb-6 
                  rounded-full
                  transition-all
                  group-hover:w-16
                "
              />
              <h3 className="text-xl font-bold mb-2">{value}</h3>
              <p className="text-sm opacity-80 max-w-prose">
                Core pillar of our educational philosophy.
              </p>
            </Motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

import { motion, useReducedMotion } from "framer-motion";
import { Play } from "lucide-react";
import { useId } from "react";

export function Mission() {
  const headingId = useId();
  const prefersReducedMotion = useReducedMotion();

  const items = [
    { title: "Leading with Vision", color: "bg-primary" },
    { title: "Education Beyond Limits", color: "bg-secondary" },
    { title: "Empowering Future", color: "bg-zinc-900" },
    { title: "The Choice for Excellence", color: "bg-primary/80" },
  ];

  const cardAnimation = {
    initial: prefersReducedMotion
      ? { opacity: 1, scale: 1 }
      : { opacity: 0, scale: 0.96 },
    whileInView: { opacity: 1, scale: 1 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.45, ease: "easeOut" },
  };

  return (
    <section
      aria-labelledby={headingId}
      className="py-24 bg-background"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Intro */}
        <header className="max-w-3xl mb-16">
          <h2
            id={headingId}
            className="text-4xl font-display font-bold text-primary mb-4"
          >
            To be the school of choice in the region and beyond.
          </h2>
          <p className="text-muted-foreground text-lg max-w-prose">
            Our strategic pillars ensure we deliver on our promise of excellence
            every single day.
          </p>
        </header>

        {/* Mission Cards */}
        <div className="grid gap-6 md:grid-cols-2">
          {items.map((card, index) => (
            <motion.article
              key={card.title}
              {...cardAnimation}
              transition={{
                ...cardAnimation.transition,
                delay: prefersReducedMotion ? 0 : index * 0.08,
              }}
              tabIndex={0}
              className={`
                ${card.color}
                group
                relative
                min-h-[240px]
                p-10
                rounded-3xl
                text-white
                overflow-hidden
                flex
                flex-col
                justify-between
                outline-none
                focus-visible:ring-2
                focus-visible:ring-white/80
                focus-visible:ring-offset-2
                focus-visible:ring-offset-background
              `}
            >
              {/* Decorative glow */}
              <div
                aria-hidden="true"
                className="
                  absolute top-0 right-0 
                  w-64 h-64 
                  bg-white/5 
                  rounded-full 
                  blur-3xl 
                  -translate-y-1/2 
                  translate-x-1/2 
                  transition-colors
                  group-hover:bg-white/10
                  group-focus-visible:bg-white/10
                "
              />

              {/* Title */}
              <h3 className="relative z-10 text-2xl font-bold max-w-[70%]">
                {card.title}
              </h3>

              {/* Action Icon (decorative) */}
              <div
                aria-hidden="true"
                className="
                  relative z-10
                  self-end
                  w-12 h-12
                  rounded-full
                  bg-white/20
                  backdrop-blur-sm
                  flex items-center justify-center
                  transition-transform
                  group-hover:scale-110
                  group-focus-visible:scale-110
                "
              >
                <Play className="w-5 h-5 fill-current" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion as Motion, useReducedMotion } from "framer-motion";
import { useId } from "react";

export function Team() {
  const headingId = useId();
  const prefersReducedMotion = useReducedMotion();

  const members = [
    {
      name: "Janet Doe",
      role: "Principal",
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop",
    },
    {
      name: "Dr. John Doe",
      role: "Head of Academics",
      img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop",
    },
    {
      name: "Sarah Smith",
      role: "Student Welfare",
      img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop",
    },
    {
      name: "Mike Johnson",
      role: "Sports Director",
      img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1974&auto=format&fit=crop",
    },
  ];

  const fadeIn = {
    initial: prefersReducedMotion
      ? { opacity: 1, y: 0 }
      : { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  return (
    <section
      id="team"
      aria-labelledby={headingId}
      className="py-24 bg-background"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-16 max-w-2xl mx-auto">
          <h2
            id={headingId}
            className="text-3xl md:text-4xl font-display font-bold text-primary mb-4"
          >
            A Commitment to Quality Education
          </h2>
          <p className="text-muted-foreground">
            Led by a team of dedicated professionals passionate about inclusive
            education.
          </p>
        </header>

        <ul role="list" className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((member) => (
            <Motion.li
              key={member.name}
              {...fadeIn}
              className="group outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-2xl"
              tabIndex={0}
            >
              {/* Image Card */}
              <div className="aspect-3/4 rounded-2xl overflow-hidden mb-4 relative">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 group-focus-visible:scale-105"
                />
                {/* Overlay on hover/focus */}
                <div
                  aria-hidden="true"
                  className="
                    absolute inset-0
                    bg-linear-to-t from-primary/80 to-transparent
                    opacity-0
                    group-hover:opacity-100
                    group-focus-visible:opacity-100
                    transition-opacity duration-300
                    flex items-end p-6
                  "
                >
                  <div className="text-white">
                    <p className="font-bold">{member.name}</p>
                    <p className="text-sm opacity-90">{member.role}</p>
                  </div>
                </div>
              </div>

              {/* Names & Role */}
              <h3 className="font-bold text-lg text-primary group-hover:text-secondary transition-colors">
                {member.name}
              </h3>
              <p className="text-sm text-muted-foreground">{member.role}</p>
            </Motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

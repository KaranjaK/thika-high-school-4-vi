import { motion as Motion, useReducedMotion } from "framer-motion";
import { useId } from "react";
import chiefPrincipal from "../../assets/images/Chief Principal.jpeg";
import deputyPrincipal from "../../assets/images/Deputy Principal.JPG";
import deanAcademics from "../../assets/images/Dean Academics.JPG";
import transportManager from "../../assets/images/Transport Manager.JPG";


export function Team() {
  const headingId = useId();
  const prefersReducedMotion = useReducedMotion();

  const members = [
    {
      name: "Madam Grace Kiarie",
      role: "Principal",
      img: chiefPrincipal,
    },
    {
      name: "Madam Jane Doe",
      role: "Deputy Principal",
      img: deputyPrincipal,
    },
    {
      name: "Madam Ogongo",
      role: "Dean Academics",
      img: deanAcademics,
    },
    {
      name: "Mr. John Doe",
      role: "Transport Manager",
      img: transportManager,
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

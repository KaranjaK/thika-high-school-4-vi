import { motion as Motion, useReducedMotion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { useId } from "react";
import gateImage from "../../assets/images/gate1.JPG";
import { Button } from "../ui/button";
import { Link } from "wouter";

export function Experience() {
  const sectionId = useId();
  const prefersReducedMotion = useReducedMotion();

  const fadeIn = {
    initial: prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const items = [
    "Holistic Education Approach",
    "Building Energy for Life",
    "Adaptive Learning Technologies",
    "World-class Faculty & Support",
  ];

  return (
    <section
      id="about"
      aria-labelledby={sectionId}
      className="py-20 bg-background overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image / Visual Section */}
          <Motion.figure {...fadeIn} className="relative">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={gateImage}
                alt="Students engaged in an inclusive classroom learning environment"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-primary/20 mix-blend-multiply"
              />
            </div>

            {/* Experience Badge */}
            <div
              className="
                absolute 
                bottom-4 right-4 
                sm:-bottom-10 sm:-right-10 
                w-40 sm:w-48 
                h-40 sm:h-48 
                bg-secondary 
                rounded-2xl 
                p-6 
                flex flex-col 
                justify-center 
                items-center 
                text-center 
                shadow-xl 
                text-white
              "
              aria-label="58 years of experience"
            >
              <span className="text-4xl sm:text-5xl font-display font-bold">
                59
              </span>
              <span className="text-sm font-medium mt-2 opacity-90 leading-tight">
                Years of <br /> Experience
              </span>
            </div>
          </Motion.figure>

          {/* Text Content */}
          <Motion.div {...fadeIn} className="lg:pl-8">
            <h2
              id={sectionId}
              className="text-3xl md:text-5xl font-display font-bold mb-6 text-primary"
            >
              The Outstanding Difference You Can Trust
            </h2>

            <p className="text-lg text-muted-foreground mb-8 max-w-prose">
              For over five decades, we have been a beacon of hope and
              excellence, providing specialized education that transcends
              physical limitations.
            </p>

            <ul role="list" className="space-y-4">
              {items.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-1 w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0"
                  >
                    <CheckCircle2
                      className="w-4 h-4 text-secondary"
                      strokeWidth={2.5}
                    />
                  </span>
                  <span className="font-medium text-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-4 mt-10">
              <Link href="/thika-high-school-4-vi/history">
                <Button className="bg-secondary hover:bg-secondary/90 text-white shadow-lg shadow-secondary/25 hover:shadow-xl hover:-translate-y-0.5 transition-all">
                  Read More
                </Button>
              </Link>
            </div>
          </Motion.div>
        </div>
      </div>
    </section>
  );
}

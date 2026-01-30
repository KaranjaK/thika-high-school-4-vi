import { Quote } from "lucide-react";

export function QuoteSection() {
  return (
    <section
      aria-labelledby="quote-section-heading"
      className="py-24 bg-white relative"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Decorative quote icon */}
          <Quote
            aria-hidden="true"
            className="w-16 h-16 text-secondary/20 mx-auto mb-8"
          />

          {/* Quote */}
          <blockquote
            id="quote-section-heading"
            className="text-3xl md:text-5xl font-display font-bold text-primary leading-tight mb-8"
          >
            Teaching is not just a profession but a gospel.
          </blockquote>

          {/* Attribution */}
          <p className="text-xl text-muted-foreground font-medium">
            The rejected stones will surely become the key cornerstones.
          </p>
        </div>
      </div>
    </section>
  );
}

import { motion as Motion } from "framer-motion";
import { InquiryDialog } from "./InquiryDialog";
import { Button } from "../ui/button";
import { Play } from "lucide-react";

export function Hero() {
  return (
    <section className="relative bg-primary overflow-hidden min-h-[90vh] flex items-center">
      {/* Background image overlay */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544396821-4dd40b938ad3?q=80&w=2073&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>

      {/* Animated background circle */}
      <Motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute -right-20 md:right-0 top-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-secondary rounded-full blur-3xl opacity-20"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          {/* Headline */}
          <Motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-[1.1] mb-6"
          >
            A Visually Impaired Sight Is Not A Visually Impaired{" "}
            <span className="text-secondary">Mind.</span>
          </Motion.h1>

          {/* Subtext */}
          <Motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl leading-relaxed"
          >
            Empowering students through holistic education, building faith, and
            cultivating courage for a future of excellence.
          </Motion.p>

          {/* Buttons */}
          <Motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <InquiryDialog>
              <Button
                size="lg"
                variant="outline"
                className="text-primary border-white bg-white hover:bg-white/90 font-semibold px-8 h-14 rounded-full text-lg"
              >
                Join Us Today
              </Button>
            </InquiryDialog>

            <Button
              size="lg"
              variant="ghost"
              className="text-white hover:bg-white/10 hover:text-white px-8 h-14 rounded-full text-lg gap-3"
            >
              <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                <Play className="w-3 h-3 fill-current" />
              </div>
              Watch Our Story
            </Button>
          </Motion.div>
        </div>
      </div>
    </section>
  );
}

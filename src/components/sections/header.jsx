import { useState } from "react";
import { Link } from "wouter";
import { Menu, X, GraduationCap } from "lucide-react";
import { Button } from "../ui/button";
import { InquiryDialog } from "./InquiryDialog";
import { AnimatePresence, motion as Motion } from "framer-motion";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-border/40 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3 group cursor-pointer">
            <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
              <GraduationCap className="w-8 h-8 text-primary" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-xl leading-none text-primary">Salvation Army</span>
              <span className="font-body text-xs font-medium text-muted-foreground tracking-widest uppercase">Thika High School for the Blind</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {["Home", "About", "Stats", "Programs"].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                {item}
              </a>
            ))}
            <div className="flex items-center gap-4">
              <InquiryDialog>
                <Button className="bg-secondary hover:bg-secondary/90 text-white shadow-lg shadow-secondary/25 hover:shadow-xl hover:-translate-y-0.5 transition-all">
                  Join Us
                </Button>
              </InquiryDialog>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-foreground/80 hover:bg-accent/10"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <Motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-border/40"
          >
            <div className="px-4 py-6 space-y-4">
              {["Home", "About", "Stats", "Programs"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-base font-medium text-foreground/80 hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              ))}
              <div className="pt-4">
                <InquiryDialog>
                  <Button className="w-full bg-secondary text-white">Join Us</Button>
                </InquiryDialog>
              </div>
            </div>
          </Motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

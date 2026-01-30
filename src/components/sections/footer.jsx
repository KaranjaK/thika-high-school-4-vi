import { GraduationCap, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  const socialLinks = [
    { Icon: Facebook, label: "Facebook", href: "#" },
    { Icon: Twitter, label: "Twitter", href: "#" },
    { Icon: Instagram, label: "Instagram", href: "#" },
    { Icon: Linkedin, label: "LinkedIn", href: "#" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground pt-20 pb-10" role="contentinfo">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid */}
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          
          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-white/10 rounded-lg shrink-0">
                <GraduationCap className="w-6 h-6 text-white" aria-hidden="true" />
              </div>
              <span className="font-display font-bold text-xl">SA Thika High</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Empowering the visually impaired with quality education, skills, and the confidence to conquer the world.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm text-white/60">
              {["Admissions", "Academic Calendar", "News & Events", "Contact Us"].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-primary rounded"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-bold mb-6">Programs</h4>
            <ul className="space-y-3 text-sm text-white/60">
              {["Secondary Education", "Vocational Training", "Music & Arts", "Sports & Recreation"].map((program) => (
                <li key={program}>
                  <a
                    href="#"
                    className="hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-primary rounded"
                  >
                    {program}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-bold mb-6">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
          <p>© {new Date().getFullYear()} SA Thika High School. All rights reserved.</p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service"].map((link) => (
              <a
                key={link}
                href="#"
                className="hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-primary rounded"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

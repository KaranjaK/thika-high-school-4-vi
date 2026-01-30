import { Header } from "../components/sections/header";
import { Hero } from "../components/sections/hero";
import { Features } from "../components/sections/features";
import { Experience } from "../components/Experience";
import { Motto } from "../components/Motto";
import { Stats } from "../components/Stats";
import { Mission } from "../components/Mission";
import { Team } from "../components/Team";
import { QuoteSection } from "../components/QuoteSection";
import { Footer } from "../components/Footer";


export default function Landingpage() {
  return (
    <div className="min-h-screen bg-background font-body">
      <Header />

      <main id="main" role="main" tabIndex={-1}>
        <Hero />
        <Features />
        <Experience />
        <Motto />
        <Stats />
        <Mission />
        <Team />
        <QuoteSection />
      </main>

      <Footer />
    </div>
  );
}

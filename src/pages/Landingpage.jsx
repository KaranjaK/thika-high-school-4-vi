import { Header } from "../components/sections/header";
import { Hero } from "../components/sections/hero";
import { Features } from "../components/sections/features";
import { Experience } from "../components/sections/experience";
import { Motto } from "../components/sections/motto";
import { Stats } from "../components/sections/stats";

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
      </main>
    </div>
  );
}

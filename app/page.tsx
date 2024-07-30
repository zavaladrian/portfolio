import About from "./about/page";
import FloatingBottomNav from "./components/mobilenavbar/MobileNav";
import Contact from "./contact/page";
import Experience from "./experience/page";
import Projects from "./projects/page";
import Hero from "./components/hero/Hero"
import { SimpleFloatingNav } from "./components/FloatingNav.tsx/SimpleFloatingNav";



export default function Home() {
  return (
      <div>
        <main>
          <SimpleFloatingNav/>
          <FloatingBottomNav />
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Contact />
        </main>
      </div>
  );
}

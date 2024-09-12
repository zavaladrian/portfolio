import About from "./about/page";
import FloatingBottomNav from "./components/mobilenavbar/MobileNav";
import Contact from "./contact/page";
import Experience from "./experience/page";
import Projects from "./projects/page";
import Hero from "./components/hero/Hero"
import { SimpleFloatingNav } from "./components/FloatingNav.tsx/SimpleFloatingNav";
import Footer from "./components/Footer";



export default function Home() {
  return (
      <div className="bg-gradient-to-b from-black via-antwhite to-mblue dark:bg-dark-gradient">
        <main>
          <SimpleFloatingNav/>
          <FloatingBottomNav />
          <Hero />
          <About />
          <Projects />
          {/* <Experience /> */}
          <Contact />
          <Footer />
        </main>
      </div>
  );
}

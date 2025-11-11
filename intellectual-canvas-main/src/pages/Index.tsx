import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import TableOfContents from "@/components/TableOfContents";
import About from "@/components/About";
import Resume from "@/components/Resume";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import GlobalAwareness from "@/components/GlobalAwareness";
import Future from "@/components/Future";
import Conclusion from "@/components/Conclusion";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <TableOfContents />
      <About />
      <Resume />
      <Projects />
      <Skills />
      <GlobalAwareness />
      <Future />
      <Conclusion />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;

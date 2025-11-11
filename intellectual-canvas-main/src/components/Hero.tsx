import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone, Download } from "lucide-react";
import profileImage from "@/assets/joy-profile.jpg";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center section-padding pt-24">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-4">
              <p className="text-secondary font-medium text-lg">Hello, I'm</p>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Joy Patel
              </h1>
              <p className="text-2xl md:text-3xl text-muted-foreground">
                Computer Engineering Student
              </p>
              <p className="text-lg text-muted-foreground max-w-xl">
                Building innovative solutions through code • Passionate about full-stack development and AI
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="hero-gradient text-white shadow-elegant hover:scale-105 transition-smooth"
                onClick={() => scrollToSection("#projects")}
              >
                View Projects
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white transition-smooth"
                onClick={() => scrollToSection("#contact")}
              >
                Get in Touch
              </Button>
            </div>

            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com/Joy1509"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-muted hover:bg-primary hover:text-white transition-smooth shadow-card"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/joy-patel-16192b2ab/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-muted hover:bg-primary hover:text-white transition-smooth shadow-card"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="relative animate-scale-in">
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 hero-gradient rounded-full blur-3xl opacity-30 animate-float"></div>
              <div className="relative aspect-square rounded-full overflow-hidden shadow-elegant border-8 border-background ring-4 ring-primary/30">
                <img 
                  src={profileImage} 
                  alt="Joy Patel - Computer Engineering Student"
                  className="relative w-full h-full object-cover right-4 scale-110 top-2 hover:scale-115 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in">
          <div className="text-center">
            <p className="text-4xl font-bold text-primary">5+</p>
            <p className="text-muted-foreground mt-2">Projects</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-primary">5+</p>
            <p className="text-muted-foreground mt-2">Technologies</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-primary">2023</p>
            <p className="text-muted-foreground mt-2">Started B.Tech</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-primary">100%</p>
            <p className="text-muted-foreground mt-2">Dedication</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

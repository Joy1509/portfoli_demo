import { Card } from "@/components/ui/card";
import { 
  Home, User, FileText, FolderKanban, Award, 
  Globe, Target, FileCheck, Mail 
} from "lucide-react";

const TableOfContents = () => {
  const sections = [
    { id: "home", label: "Cover Page", icon: Home },
    { id: "about", label: "Introduction & Learning Philosophy", icon: User },
    { id: "resume", label: "Resume/CV", icon: FileText },
    { id: "projects", label: "Interdisciplinary Projects & Research", icon: FolderKanban },
    { id: "skills", label: "Advanced Skill Development & Mastery", icon: Award },
    { id: "global", label: "Global Awareness & Ethical Considerations", icon: Globe },
    { id: "future", label: "Future Aspirations & Professional Development", icon: Target },
    { id: "conclusion", label: "Conclusion & Self-Assessment", icon: FileCheck },
    { id: "contact", label: "Contact & Testimonials", icon: Mail },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Table of Contents</h2>
          <p className="text-muted-foreground text-lg">
            Navigate through my portfolio
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {sections.map((section, index) => (
            <Card
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className="p-6 card-gradient shadow-card border-primary/10 hover:shadow-elegant cursor-pointer transition-smooth animate-scale-in group"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary group-hover:text-white transition-smooth">
                  <section.icon className="h-5 w-5 text-primary group-hover:text-white transition-smooth" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground mb-1">Section {index + 1}</p>
                  <h3 className="font-semibold group-hover:text-primary transition-smooth">
                    {section.label}
                  </h3>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TableOfContents;

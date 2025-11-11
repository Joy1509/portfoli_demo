import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "BRAINLY – A Second Brain Platform",
      description: "A full-stack collaborative learning platform where students can share knowledge, ask questions, and upvote helpful content in real-time.",
      technologies: ["JavaScript", "React", "Node.js", "MongoDB", "Express.js", "JWT"],
      highlights: [
        "Developed intuitive React frontend with Tailwind CSS for responsive UX",
        "Built RESTful APIs for authentication and content management",
        "Implemented JWT-based authentication with role-based access control",
        "Optimized MongoDB queries with indexing for better performance"
      ],
      category: "Full-Stack Development"
    },
    {
      title: "E-commerce Store",
      description: "A complete online shopping platform with product management, cart functionality, and secure payment integration.",
      technologies: ["Next.js", "Node.js", "MongoDB", "Express.js", "JavaScript"],
      highlights: [
        "Built dynamic shopping cart with real-time updates",
        "Developed RESTful APIs for products and order processing",
        "Integrated secure authentication and session management",
        "Designed responsive UI with product listings and checkout flow"
      ],
      category: "E-commerce"
    },
    {
      title: "AI-Powered Blog Post Generator",
      description: "An intelligent content creation tool leveraging OpenAI's GPT models to generate SEO-optimized blog posts based on user topics.",
      technologies: ["React.js", "Node.js", "OpenAI API", "MongoDB", "Express"],
      highlights: [
        "Integrated OpenAI API for high-quality content generation",
        "Built intuitive UI for topic input and tone/style selection",
        "Implemented content filtering and prompt customization",
        "Added export features (PDF/HTML) and real-time editing"
      ],
      category: "Artificial Intelligence"
    },
    {
      title: "TIC-TAC-TOE – Interactive Web Game",
      description: "A browser-based game demonstrating clean code architecture and advanced DOM manipulation techniques.",
      technologies: ["HTML", "CSS", "JavaScript", "DOM API"],
      highlights: [
        "Built using vanilla JavaScript without dependencies",
        "Implemented win detection and draw handling logic",
        "Designed responsive interface with CSS Grid",
        "Applied modular coding practices for maintainability"
      ],
      category: "Game Development"
    }
  ];

  return (
    <section id="projects" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Interdisciplinary Projects & Research
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Showcasing innovative solutions that integrate multiple technologies and demonstrate
            complex problem-solving abilities
          </p>
        </div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="p-8 card-gradient shadow-card border-primary/10 hover:shadow-elegant transition-smooth animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="space-y-2">
                    <Badge className="bg-primary/10 text-primary hover:bg-primary hover:text-white">
                      {project.category}
                    </Badge>
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                    <p className="text-muted-foreground">{project.description}</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-secondary/10 text-secondary hover:bg-secondary hover:text-white transition-smooth"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-4 pt-4">
                  <Button
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-white transition-smooth"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Demo
                  </Button>
                  <Button
                    variant="outline"
                    className="border-secondary text-secondary hover:bg-secondary hover:text-white transition-smooth"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Source Code
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 p-8 bg-card rounded-2xl shadow-card border border-border animate-fade-in">
          <h3 className="text-xl font-bold mb-4">Critical Analysis & Problem-Solving Approach</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Each project presented unique challenges that required systematic problem-solving and integration
              of multiple technologies. Key learnings include:
            </p>
            <ul className="space-y-2 ml-6">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span>
                  <strong>Scalability:</strong> Designing systems that handle growth through proper database
                  indexing and efficient API design
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span>
                  <strong>Security:</strong> Implementing authentication, authorization, and data validation
                  to protect user information
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span>
                  <strong>User Experience:</strong> Creating intuitive interfaces that prioritize usability
                  and accessibility
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span>
                  <strong>Code Quality:</strong> Maintaining clean, modular, and well-documented code for
                  long-term maintainability
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Code2, Brain, Users, Palette } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Full-Stack Development",
      icon: Code2,
      color: "primary",
      description: "Building complete web applications from frontend to backend",
      skills: [
        { name: "React.js & Next.js", level: 85, evidence: "Built multiple SPAs with modern React patterns" },
        { name: "Node.js & Express", level: 80, evidence: "Developed RESTful APIs and server-side logic" },
        { name: "MongoDB & MySQL", level: 75, evidence: "Designed database schemas and optimized queries" },
      ]
    },
    {
      title: "Problem-Solving & Algorithms",
      icon: Brain,
      color: "secondary",
      description: "Analytical thinking and efficient algorithm implementation",
      skills: [
        { name: "Data Structures", level: 85, evidence: "Implemented complex DS in various projects" },
        { name: "Algorithm Design", level: 80, evidence: "Optimized solutions for time and space complexity" },
        { name: "System Design", level: 70, evidence: "Architected scalable application structures" },
      ]
    },
    {
      title: "Leadership & Collaboration",
      icon: Users,
      color: "accent",
      description: "Working effectively in teams and leading initiatives",
      skills: [
        { name: "Team Collaboration", level: 90, evidence: "Successfully worked on group projects" },
        { name: "Communication", level: 85, evidence: "Clear documentation and code reviews" },
        { name: "Project Management", level: 75, evidence: "Managed timelines and deliverables" },
      ]
    },
    {
      title: "Creative & Design Thinking",
      icon: Palette,
      color: "primary",
      description: "Creating intuitive and visually appealing user experiences",
      skills: [
        { name: "UI/UX Design", level: 80, evidence: "Designed responsive and accessible interfaces" },
        { name: "Tailwind CSS", level: 85, evidence: "Styled modern web applications efficiently" },
        { name: "User-Centric Design", level: 75, evidence: "Prioritized usability in all projects" },
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Advanced Skill Development & Mastery
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Comprehensive overview of technical proficiencies, soft skills, and creative competencies
            developed through academic work and practical projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="p-8 card-gradient shadow-card border-primary/10 hover:shadow-elegant transition-smooth animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className={`p-3 rounded-lg bg-${category.color}/10`}>
                  <category.icon className={`h-6 w-6 text-${category.color}`} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                  <p className="text-muted-foreground text-sm">{category.description}</p>
                </div>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                    <p className="text-sm text-muted-foreground italic">{skill.evidence}</p>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 space-y-8">
          <Card className="p-8 card-gradient shadow-card border-primary/10 animate-fade-in">
            <h3 className="text-2xl font-bold mb-6">Code Artifacts & Portfolio Evidence</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-muted/50 rounded-lg">
                <h4 className="font-semibold mb-3">GitHub Repository</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Multiple production-ready projects demonstrating clean code practices
                </p>
                <a
                  href="https://github.com/Joy1509"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline text-sm font-medium"
                >
                  View on GitHub →
                </a>
              </div>
              <div className="p-6 bg-muted/50 rounded-lg">
                <h4 className="font-semibold mb-3">Technical Documentation</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Comprehensive project documentation and API specifications
                </p>
                <span className="text-muted-foreground text-sm">Available in project repositories</span>
              </div>
            </div>
          </Card>

          <Card className="p-8 card-gradient shadow-card border-secondary/10 animate-fade-in">
            <h3 className="text-2xl font-bold mb-6">Collaborative & Leadership Experiences</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-2">Team Project Contributions</h4>
                <p className="text-muted-foreground">
                  Actively participated in collaborative coding projects, taking on responsibilities for
                  both frontend and backend development. Facilitated code reviews and maintained project
                  documentation to ensure team alignment.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Conflict Resolution & Communication</h4>
                <p className="text-muted-foreground">
                  Successfully navigated technical disagreements through clear communication and
                  data-driven decision making. Promoted knowledge sharing within study groups and
                  peer programming sessions.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Key Achievements in Teamwork</h4>
                <ul className="space-y-2 mt-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-secondary mt-2"></div>
                    <span className="text-muted-foreground">
                      Led development of collaborative features in BRAINLY platform
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-secondary mt-2"></div>
                    <span className="text-muted-foreground">
                      Mentored peers in React and Node.js best practices
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-secondary mt-2"></div>
                    <span className="text-muted-foreground">
                      Contributed to open-source projects and technical discussions
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;

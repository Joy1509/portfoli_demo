import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Code, Wrench, Heart } from "lucide-react";

const Resume = () => {
  const technicalSkills = [
    "C", "C++", "Java", "Python", "JavaScript", "TypeScript",
    "HTML", "CSS", "Tailwind", "EJS", "React", "Node.js",
    "MongoDB", "MySQL", "Git/GitHub", "VSCode"
  ];

  const softSkills = [
    "Logic Building", "Critical Thinking", "Problem-Solving",
    "Team Collaboration", "Communication", "Adaptability"
  ];

  const coursework = [
    "C Programming", "Introduction to Python", "OOPs in JAVA",
    "Data Structures", "Design and Analysis of Algorithms",
    "Database Management System", "Operating Systems",
    "Theory of Computation", "Design Patterns", "Statistics"
  ];

  return (
    <section id="resume" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Resume</h2>
          <p className="text-muted-foreground text-lg">
            My academic background, skills, and competencies
          </p>
        </div>

        <div className="space-y-12">
          {/* Education */}
          <Card className="p-8 card-gradient shadow-card border-primary/10 animate-slide-up">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 rounded-lg bg-primary/10">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Education</h3>
                <p className="text-muted-foreground">Academic credentials and achievements</p>
              </div>
            </div>

            <div className="ml-16">
              <div className="space-y-4">
                <div>
                  <h4 className="text-xl font-bold">Bachelor of Technology</h4>
                  <p className="text-primary font-medium">Computer Engineering</p>
                  <p className="text-muted-foreground">
                    Pandit Deendayal Energy University (PDEU), Gandhinagar
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">June 2023 - Present</p>
                </div>

                <div className="pt-4">
                  <h5 className="font-semibold mb-3">Relevant Coursework:</h5>
                  <div className="flex flex-wrap gap-2">
                    {coursework.map((course) => (
                      <Badge
                        key={course}
                        variant="secondary"
                        className="bg-muted hover:bg-primary hover:text-white transition-smooth"
                      >
                        {course}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Technical Skills */}
          <Card className="p-8 card-gradient shadow-card border-secondary/10 animate-slide-up">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 rounded-lg bg-secondary/10">
                <Code className="h-6 w-6 text-secondary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Technical Skills</h3>
                <p className="text-muted-foreground">
                  Programming languages, frameworks, and tools
                </p>
              </div>
            </div>

            <div className="ml-16 space-y-6">
              <div>
                <h5 className="font-semibold mb-3">Languages & Technologies:</h5>
                <div className="flex flex-wrap gap-2">
                  {technicalSkills.map((skill) => (
                    <Badge
                      key={skill}
                      className="bg-primary/10 text-primary hover:bg-primary hover:text-white transition-smooth"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h5 className="font-semibold mb-3">Tools & Platforms:</h5>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span className="text-muted-foreground">Git/GitHub - Version Control</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span className="text-muted-foreground">VSCode - Development Environment</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span className="text-muted-foreground">MongoDB - NoSQL Database</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span className="text-muted-foreground">MySQL - Relational Database</span>
                  </div>
                </div>
              </div>

              <div>
                <h5 className="font-semibold mb-3">Operating Systems:</h5>
                <div className="flex gap-4">
                  <Badge variant="outline">Ubuntu/Linux</Badge>
                  <Badge variant="outline">Windows</Badge>
                </div>
              </div>
            </div>
          </Card>

          {/* Soft Skills */}
          <Card className="p-8 card-gradient shadow-card border-accent/10 animate-slide-up">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 rounded-lg bg-accent/10">
                <Heart className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Soft Skills</h3>
                <p className="text-muted-foreground">
                  Personal competencies and professional attributes
                </p>
              </div>
            </div>

            <div className="ml-16">
              <div className="grid md:grid-cols-2 gap-4">
                {softSkills.map((skill) => (
                  <div key={skill} className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                    <span className="font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* Areas of Interest */}
          <Card className="p-8 card-gradient shadow-card border-primary/10 animate-slide-up">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 rounded-lg bg-primary/10">
                <Wrench className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Areas of Interest</h3>
                <p className="text-muted-foreground">Fields of specialization and focus</p>
              </div>
            </div>

            <div className="ml-16 grid md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-semibold mb-2">Full-Stack Web Development</h5>
                <p className="text-muted-foreground text-sm">
                  Building end-to-end web applications with modern frameworks and best practices
                </p>
              </div>
              <div>
                <h5 className="font-semibold mb-2">Artificial Intelligence</h5>
                <p className="text-muted-foreground text-sm">
                  Exploring AI/ML technologies and their practical applications
                </p>
              </div>
              <div>
                <h5 className="font-semibold mb-2">Database Management</h5>
                <p className="text-muted-foreground text-sm">
                  Designing efficient database schemas and optimizing queries
                </p>
              </div>
              <div>
                <h5 className="font-semibold mb-2">System Design</h5>
                <p className="text-muted-foreground text-sm">
                  Creating scalable and maintainable software architectures
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Resume;

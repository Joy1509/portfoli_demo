import { Card } from "@/components/ui/card";
import { CheckCircle2, TrendingUp, AlertCircle, Award } from "lucide-react";

const Conclusion = () => {
  return (
    <section id="conclusion" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Conclusion & Self-Assessment
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Reflecting on achievements, lessons learned, and areas for future growth
          </p>
        </div>

        <div className="space-y-12">
          <Card className="p-8 card-gradient shadow-card border-primary/10 animate-slide-up">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 rounded-lg bg-primary/10">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Key Achievements</h3>
                <p className="text-muted-foreground">
                  Significant milestones in my academic and technical journey
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Built 4+ Full-Stack Applications</h4>
                    <p className="text-sm text-muted-foreground">
                      Successfully developed and deployed multiple production-ready web applications
                      demonstrating proficiency in modern tech stack
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Mastered Multiple Programming Languages</h4>
                    <p className="text-sm text-muted-foreground">
                      Gained expertise in C, C++, Java, Python, and JavaScript with focus on
                      practical application development
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Strong Foundation in CS Fundamentals</h4>
                    <p className="text-sm text-muted-foreground">
                      Completed comprehensive coursework in DSA, DBMS, OS, and Algorithms with
                      practical implementation experience
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Integrated AI Technologies</h4>
                    <p className="text-sm text-muted-foreground">
                      Successfully integrated OpenAI API into projects, demonstrating ability to work
                      with emerging technologies
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8 card-gradient shadow-card border-secondary/10 animate-slide-up">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 rounded-lg bg-secondary/10">
                <TrendingUp className="h-6 w-6 text-secondary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Lessons Learned</h3>
                <p className="text-muted-foreground">
                  Valuable insights gained through academic work and project development
                </p>
              </div>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <div className="p-4 bg-muted/50 rounded-lg">
                <h4 className="font-semibold text-foreground mb-2">The Importance of Fundamentals</h4>
                <p>
                  While frameworks and libraries change rapidly, strong understanding of data structures,
                  algorithms, and design patterns provides a solid foundation that makes learning new
                  technologies much easier. Time invested in mastering fundamentals pays long-term dividends.
                </p>
              </div>
              <div className="p-4 bg-muted/50 rounded-lg">
                <h4 className="font-semibold text-foreground mb-2">Learning by Building</h4>
                <p>
                  Theoretical knowledge is essential, but practical implementation reveals the real challenges.
                  Each project taught me something new about debugging, optimization, user experience, and
                  the importance of clean, maintainable code.
                </p>
              </div>
              <div className="p-4 bg-muted/50 rounded-lg">
                <h4 className="font-semibold text-foreground mb-2">The Value of Documentation</h4>
                <p>
                  Good documentation – both reading it and writing it – is crucial. Well-documented code is
                  easier to maintain, and clear project documentation makes collaboration smoother and helps
                  future developers (including future me) understand design decisions.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-8 card-gradient shadow-card border-accent/10 animate-slide-up">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 rounded-lg bg-accent/10">
                <AlertCircle className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Areas for Growth</h3>
                <p className="text-muted-foreground">
                  Identified opportunities for improvement and skill development
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-semibold">Technical Skills</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-accent">→</span>
                    <span>Deepen knowledge of system design and scalability patterns</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent">→</span>
                    <span>Improve testing practices (unit, integration, E2E)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent">→</span>
                    <span>Learn DevOps tools and deployment pipelines</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent">→</span>
                    <span>Strengthen understanding of security best practices</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold">Professional Development</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-accent">→</span>
                    <span>Gain more experience in team-based development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent">→</span>
                    <span>Improve technical communication and presentation skills</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent">→</span>
                    <span>Build a stronger professional network in tech industry</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent">→</span>
                    <span>Contribute more actively to open-source communities</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-card shadow-card border border-border animate-fade-in">
            <h3 className="text-2xl font-bold mb-6 text-center">SWOT Analysis</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="p-6 bg-primary/5 rounded-lg border border-primary/20">
                  <h4 className="font-bold text-primary mb-3 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5" />
                    Strengths
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Strong programming fundamentals across multiple languages</li>
                    <li>• Practical full-stack development experience</li>
                    <li>• Quick learner with proven ability to adapt to new technologies</li>
                    <li>• Solid problem-solving and analytical thinking skills</li>
                  </ul>
                </div>
                <div className="p-6 bg-accent/5 rounded-lg border border-accent/20">
                  <h4 className="font-bold text-accent mb-3 flex items-center gap-2">
                    <AlertCircle className="h-5 w-5" />
                    Weaknesses
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Limited professional work experience in industry settings</li>
                    <li>• Need more exposure to large-scale system architectures</li>
                    <li>• Testing and debugging skills could be more systematic</li>
                    <li>• Public speaking and presentation skills need improvement</li>
                  </ul>
                </div>
              </div>
              <div className="space-y-4">
                <div className="p-6 bg-secondary/5 rounded-lg border border-secondary/20">
                  <h4 className="font-bold text-secondary mb-3 flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />
                    Opportunities
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Growing demand for full-stack developers in the market</li>
                    <li>• Emerging AI/ML technologies creating new career paths</li>
                    <li>• Open-source contributions to build reputation</li>
                    <li>• Internship opportunities at innovative tech companies</li>
                  </ul>
                </div>
                <div className="p-6 bg-muted/50 rounded-lg border border-border">
                  <h4 className="font-bold mb-3">Threats</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Rapidly changing technology landscape requires constant learning</li>
                    <li>• High competition for entry-level positions</li>
                    <li>• AI tools potentially automating basic development tasks</li>
                    <li>• Need to stay updated with industry best practices</li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>

          <div className="p-8 bg-gradient-to-r from-primary to-secondary rounded-2xl shadow-elegant text-white animate-scale-in">
            <h3 className="text-2xl font-bold mb-4 text-center">Final Reflection</h3>
            <p className="text-center text-lg max-w-4xl mx-auto leading-relaxed">
              My journey in computer engineering has been transformative. From writing my first "Hello World"
              program to building complex full-stack applications, I've grown not just as a developer but as
              a problem solver and creative thinker. While I'm proud of what I've achieved so far, I recognize
              that this is just the beginning. The tech industry rewards those who remain curious, humble, and
              committed to continuous improvement – qualities I strive to embody every day. I'm excited about
              the challenges ahead and ready to make meaningful contributions to the field of technology.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Conclusion;

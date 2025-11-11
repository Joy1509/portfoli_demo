import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, GraduationCap, Briefcase, TrendingUp } from "lucide-react";

const Future = () => {
  return (
    <section id="future" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Future Aspirations & Professional Development
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            My vision for career growth, continuous learning, and long-term professional goals
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="p-8 card-gradient shadow-card border-primary/10 hover:shadow-elegant transition-smooth animate-slide-up">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 rounded-lg bg-primary/10">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Short-Term Goals (1-2 Years)</h3>
                <p className="text-sm text-muted-foreground">Immediate focus areas</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-muted/50 rounded-lg">
                <h4 className="font-semibold mb-2">Master Advanced Web Technologies</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Deep dive into Next.js, TypeScript, GraphQL, and modern state management solutions
                  to build scalable production-grade applications.
                </p>
                <Badge className="bg-primary/10 text-primary">In Progress</Badge>
              </div>
              <div className="p-4 bg-muted/50 rounded-lg">
                <h4 className="font-semibold mb-2">Contribute to Open Source</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Actively contribute to popular open-source projects to learn from experienced developers
                  and give back to the community.
                </p>
                <Badge variant="outline">Planned</Badge>
              </div>
              <div className="p-4 bg-muted/50 rounded-lg">
                <h4 className="font-semibold mb-2">Build Production-Ready Portfolio</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Launch 2-3 fully deployed applications with real users, focusing on solving actual problems
                  and gathering user feedback.
                </p>
                <Badge variant="outline">2024-2025</Badge>
              </div>
            </div>
          </Card>

          <Card className="p-8 card-gradient shadow-card border-secondary/10 hover:shadow-elegant transition-smooth animate-slide-up">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 rounded-lg bg-secondary/10">
                <Briefcase className="h-6 w-6 text-secondary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Long-Term Career Vision (3-5 Years)</h3>
                <p className="text-sm text-muted-foreground">Professional aspirations</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-muted/50 rounded-lg">
                <h4 className="font-semibold mb-2">Full-Stack Software Engineer</h4>
                <p className="text-sm text-muted-foreground">
                  Work at a product-focused company or innovative startup where I can contribute to
                  meaningful projects and learn from experienced engineers.
                </p>
              </div>
              <div className="p-4 bg-muted/50 rounded-lg">
                <h4 className="font-semibold mb-2">Technical Leadership</h4>
                <p className="text-sm text-muted-foreground">
                  Grow into a senior engineering role where I can mentor junior developers and make
                  architectural decisions that impact product success.
                </p>
              </div>
              <div className="p-4 bg-muted/50 rounded-lg">
                <h4 className="font-semibold mb-2">Specialization in AI/ML</h4>
                <p className="text-sm text-muted-foreground">
                  Develop expertise in machine learning and AI integration to build intelligent applications
                  that solve complex real-world problems.
                </p>
              </div>
            </div>
          </Card>
        </div>

        <Card className="p-8 card-gradient shadow-card border-accent/10 mb-12 animate-slide-up">
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 rounded-lg bg-accent/10">
              <GraduationCap className="h-6 w-6 text-accent" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Areas for Further Study</h3>
              <p className="text-muted-foreground">Continuous learning roadmap</p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-3">
              <h4 className="font-semibold">Advanced Computer Science</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-accent">•</span>
                  <span>Advanced Algorithms & Data Structures</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">•</span>
                  <span>Distributed Systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">•</span>
                  <span>Computer Networks</span>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold">Emerging Technologies</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-accent">•</span>
                  <span>Machine Learning & Deep Learning</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">•</span>
                  <span>Cloud Architecture (AWS/Azure)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">•</span>
                  <span>DevOps & CI/CD</span>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold">Professional Skills</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-accent">•</span>
                  <span>System Design & Architecture</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">•</span>
                  <span>Agile Development Methodologies</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">•</span>
                  <span>Technical Writing & Documentation</span>
                </li>
              </ul>
            </div>
          </div>
        </Card>

        <Card className="p-8 bg-card shadow-card border border-border animate-fade-in">
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 rounded-lg bg-primary/10">
              <TrendingUp className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Strategies for Continuous Improvement</h3>
              <p className="text-muted-foreground">My commitment to lifelong learning</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="font-semibold">Daily Practices</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">→</span>
                  <span>Code at least one hour daily on personal projects or LeetCode challenges</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">→</span>
                  <span>Read technical blogs and documentation to stay updated with industry trends</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">→</span>
                  <span>Review and refactor old code to identify areas for improvement</span>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Long-term Commitments</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">→</span>
                  <span>Complete at least one major technical course or certification per year</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">→</span>
                  <span>Attend tech conferences and networking events to learn from peers</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">→</span>
                  <span>Build a strong professional network through LinkedIn and GitHub</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 p-6 bg-muted/30 rounded-lg">
            <p className="text-center text-muted-foreground italic">
              "The only way to stay relevant in technology is to never stop learning. 
              I'm committed to embracing challenges, seeking feedback, and constantly pushing 
              my boundaries to become a better engineer every single day."
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Future;

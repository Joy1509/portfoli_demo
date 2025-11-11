import { Card } from "@/components/ui/card";
import { BookOpen, Target, Lightbulb } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Introduction & Learning Philosophy
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            My journey in computer engineering and the principles that guide my academic pursuits
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
          <div className="space-y-6 animate-slide-up">
            <h3 className="text-2xl font-bold text-primary">My Learning Journey</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                As a Computer Engineering student at Pandit Deendayal Energy University, I've embarked on 
                an exciting journey to master the art of software development and problem-solving. My academic 
                path has been driven by a deep curiosity for technology and its potential to transform lives.
              </p>
              <p>
                From my first line of code in C programming to building full-stack web applications with modern 
                frameworks, each project has been a stepping stone in understanding complex systems and developing 
                innovative solutions. I believe in learning by doing, which is why my portfolio showcases practical 
                implementations of theoretical concepts.
              </p>
              <p>
                My approach to learning is interdisciplinary – combining computer science fundamentals with 
                software engineering practices, database management, and modern web technologies. This holistic 
                perspective enables me to tackle challenges from multiple angles and create comprehensive solutions.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="p-6 card-gradient shadow-card border-primary/10 hover:shadow-elegant transition-smooth">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Continuous Learning</h4>
                  <p className="text-muted-foreground">
                    I embrace a growth mindset, constantly seeking new knowledge through courses, projects, 
                    and hands-on experimentation with emerging technologies.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 card-gradient shadow-card border-secondary/10 hover:shadow-elegant transition-smooth">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-secondary/10">
                  <Target className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Problem-Solving First</h4>
                  <p className="text-muted-foreground">
                    Every challenge is an opportunity to develop critical thinking and analytical skills. 
                    I approach problems methodically, breaking them down into manageable components.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 card-gradient shadow-card border-accent/10 hover:shadow-elegant transition-smooth">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-accent/10">
                  <Lightbulb className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Innovation Through Collaboration</h4>
                  <p className="text-muted-foreground">
                    I value teamwork and knowledge sharing, believing that the best solutions emerge 
                    from diverse perspectives and collaborative efforts.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        <div className="bg-card p-8 rounded-2xl shadow-card border border-border">
          <h3 className="text-2xl font-bold mb-4 text-center">Core Academic Philosophy</h3>
          <blockquote className="text-center text-lg text-muted-foreground italic max-w-3xl mx-auto">
            "Technology is not just about writing code; it's about understanding problems deeply, 
            designing elegant solutions, and creating meaningful impact. Every line of code I write 
            is a commitment to excellence, innovation, and continuous improvement."
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default About;

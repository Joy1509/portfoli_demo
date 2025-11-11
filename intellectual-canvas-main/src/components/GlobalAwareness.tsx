import { Card } from "@/components/ui/card";
import { Globe, Shield, Users2, Lightbulb } from "lucide-react";

const GlobalAwareness = () => {
  return (
    <section id="global" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Global Awareness & Ethical Considerations
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Understanding the global impact of technology and the ethical responsibilities
            that come with being a software developer
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="p-8 card-gradient shadow-card border-primary/10 hover:shadow-elegant transition-smooth animate-slide-up">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 rounded-lg bg-primary/10">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Digital Divide & Accessibility</h3>
                <p className="text-sm text-muted-foreground">Case Study</p>
              </div>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong className="text-foreground">Challenge:</strong> Many web applications fail to
                consider users with disabilities or those in regions with limited internet connectivity.
              </p>
              <p>
                <strong className="text-foreground">My Approach:</strong> In every project, I prioritize
                responsive design, optimize images and assets for faster loading, and follow WCAG guidelines
                to ensure accessibility for all users regardless of their location or abilities.
              </p>
              <p>
                <strong className="text-foreground">Impact:</strong> Creating inclusive technology that
                serves diverse populations and doesn't leave anyone behind in the digital transformation.
              </p>
            </div>
          </Card>

          <Card className="p-8 card-gradient shadow-card border-secondary/10 hover:shadow-elegant transition-smooth animate-slide-up">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 rounded-lg bg-secondary/10">
                <Shield className="h-6 w-6 text-secondary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Data Privacy & Security</h3>
                <p className="text-sm text-muted-foreground">Ethical Dilemma</p>
              </div>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong className="text-foreground">Issue:</strong> User data collection is essential for
                many applications, but mishandling it can lead to privacy breaches and loss of trust.
              </p>
              <p>
                <strong className="text-foreground">My Stance:</strong> I implement secure authentication
                systems (JWT, bcrypt), never store sensitive data in plain text, and follow the principle
                of data minimization – collecting only what's necessary.
              </p>
              <p>
                <strong className="text-foreground">Responsibility:</strong> Protecting user privacy is not
                just a legal requirement but a moral obligation. Users trust developers with their data,
                and that trust must be honored.
              </p>
            </div>
          </Card>

          <Card className="p-8 card-gradient shadow-card border-accent/10 hover:shadow-elegant transition-smooth animate-slide-up">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 rounded-lg bg-accent/10">
                <Users2 className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">AI Ethics & Bias</h3>
                <p className="text-sm text-muted-foreground">Emerging Technology Consideration</p>
              </div>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong className="text-foreground">Concern:</strong> As AI becomes more prevalent, the
                risk of algorithmic bias and misuse of AI-generated content increases.
              </p>
              <p>
                <strong className="text-foreground">My Perspective:</strong> In my AI Blog Post Generator
                project, I implemented content filtering and made it clear that AI-generated content should
                be reviewed and edited by humans before publication.
              </p>
              <p>
                <strong className="text-foreground">Future Commitment:</strong> As I continue working with
                AI technologies, I commit to understanding their limitations, testing for bias, and using
                them responsibly to augment rather than replace human judgment.
              </p>
            </div>
          </Card>

          <Card className="p-8 card-gradient shadow-card border-primary/10 hover:shadow-elegant transition-smooth animate-slide-up">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 rounded-lg bg-primary/10">
                <Lightbulb className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Sustainable Technology</h3>
                <p className="text-sm text-muted-foreground">Environmental Impact</p>
              </div>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong className="text-foreground">Global Issue:</strong> The tech industry's carbon
                footprint continues to grow with increased cloud computing and data center usage.
              </p>
              <p>
                <strong className="text-foreground">My Actions:</strong> I write efficient code that
                minimizes server load, optimize database queries to reduce computational overhead, and
                implement lazy loading to decrease unnecessary data transfers.
              </p>
              <p>
                <strong className="text-foreground">Long-term Goal:</strong> Continuously learning about
                green computing practices and implementing them in future projects to contribute to a more
                sustainable tech ecosystem.
              </p>
            </div>
          </Card>
        </div>

        <Card className="p-8 bg-card shadow-card border border-border animate-fade-in">
          <h3 className="text-2xl font-bold mb-6 text-center">Personal Reflections on Ethical Technology</h3>
          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="space-y-4 text-muted-foreground">
              <p>
                As a computer engineering student, I've come to realize that writing code is not just about
                solving technical problems – it's about understanding the broader implications of the
                technology we create. Every line of code has the potential to impact people's lives, and
                with that comes great responsibility.
              </p>
              <p>
                Through my coursework in Introduction to HRM and real-world project development, I've learned
                that ethical considerations must be integrated from the beginning of the development process,
                not added as an afterthought. This means:
              </p>
              <ul className="space-y-3 ml-6">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl">→</span>
                  <span>
                    Asking "Who might this affect?" before implementing features
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl">→</span>
                  <span>
                    Considering accessibility, privacy, and security as core requirements, not optional features
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl">→</span>
                  <span>
                    Being transparent about data usage and giving users control over their information
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl">→</span>
                  <span>
                    Staying informed about global issues and how technology can either help or harm
                  </span>
                </li>
              </ul>
              <p className="pt-4">
                <strong className="text-foreground">My Commitment:</strong> As I progress in my career, I
                pledge to remain mindful of these ethical considerations, to advocate for responsible
                technology practices, and to use my skills to create solutions that benefit society while
                minimizing potential harm. Technology should be a force for good, and I'm committed to
                making sure my work reflects that principle.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default GlobalAwareness;

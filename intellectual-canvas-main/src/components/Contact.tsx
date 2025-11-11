import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, Github, MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            I'm always open to discussing new projects, opportunities, or collaborations
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          <div className="space-y-8 animate-slide-up">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <Card className="p-6 card-gradient shadow-card border-primary/10 hover:shadow-elegant transition-smooth">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Email</p>
                      <a
                        href="mailto:joypatel1509@gmail.com"
                        className="font-medium hover:text-primary transition-smooth"
                      >
                        joypatel1509@gmail.com
                      </a>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 card-gradient shadow-card border-secondary/10 hover:shadow-elegant transition-smooth">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-secondary/10">
                      <Phone className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Phone</p>
                      <a
                        href="tel:+919265900554"
                        className="font-medium hover:text-secondary transition-smooth"
                      >
                        +91 9265900554
                      </a>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 card-gradient shadow-card border-accent/10 hover:shadow-elegant transition-smooth">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-accent/10">
                      <MapPin className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Location</p>
                      <p className="font-medium">Gandhinagar, Gujarat, India</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Connect on Social Media</h3>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/JOY-PATEL"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-primary/10 hover:bg-primary hover:text-white transition-smooth shadow-card flex-1 text-center"
                >
                  <Linkedin className="h-6 w-6 mx-auto mb-2" />
                  <p className="text-sm font-medium">LinkedIn</p>
                </a>
                <a
                  href="https://github.com/Joy1509"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-secondary/10 hover:bg-secondary hover:text-white transition-smooth shadow-card flex-1 text-center"
                >
                  <Github className="h-6 w-6 mx-auto mb-2" />
                  <p className="text-sm font-medium">GitHub</p>
                </a>
              </div>
            </div>
          </div>

          <Card className="p-8 card-gradient shadow-card border-primary/10 animate-slide-up">
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            <form className="space-y-6">
              <div>
                <label className="text-sm font-medium mb-2 block">Your Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-smooth"
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Your Email</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-smooth"
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Subject</label>
                <input
                  type="text"
                  placeholder="Project Opportunity"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-smooth"
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Message</label>
                <textarea
                  rows={5}
                  placeholder="Tell me about your project or opportunity..."
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-smooth resize-none"
                ></textarea>
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full hero-gradient text-white shadow-elegant hover:scale-105 transition-smooth"
              >
                <Send className="h-5 w-5 mr-2" />
                Send Message
              </Button>
            </form>
          </Card>
        </div>

        <div className="mt-16 p-8 bg-muted/50 rounded-2xl text-center animate-fade-in">
          <h3 className="text-xl font-bold mb-4">Testimonials</h3>
          <div className="max-w-3xl mx-auto space-y-6">
            <Card className="p-6 card-gradient shadow-card text-left">
              <h4 className="text-lg font-semibold mb-2">Certificate</h4>
              <p className="font-bold text-xl mb-1">Fundamentals of Deep Learning</p>
              <p className="text-sm text-muted-foreground mb-4">Certificate of Competency — NVIDIA</p>

              <p className="mb-4">
                Awarded to <span className="font-semibold">Joy Patel</span> on <span className="font-medium">July 18, 2025</span> for
                successful completion of the "Fundamentals of Deep Learning" program.
              </p>

              <div className="mt-4">
                <a href="/certi/image.png" target="_blank" rel="noreferrer noopener" className="inline-block">
                  <img
                    src="/certi/image.png"
                    alt="NVIDIA Fundamentals of Deep Learning certificate - Joy Patel"
                    className="w-full max-w-xs mx-auto rounded-lg shadow-md border border-border"
                  />
                </a>
              </div>

              
            </Card>
            <p className="text-sm text-muted-foreground">
              This certificate verifies completion of NVIDIA's "Fundamentals of Deep Learning" course.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

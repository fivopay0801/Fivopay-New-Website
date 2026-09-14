import Layout from "@/components/layout";
import ContactForm from "@/components/sections/contact/contact-form";
import Container from "@/components/container";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";
import { StaggerContainer } from "@/components/ui/motion/stagger";

const contactDetails = [
  {
    icon: Mail,
    title: "Email Us",
    detail: "info@fivopay.com",
    subtext: "We'll respond within 24 hours"
  },
  {
    icon: Phone,
    title: "Call Us",
    detail: "+91 9096081885",
    subtext: "Mon-Fri from 9am to 6pm IST"
  },
  {
    icon: MapPin,
    title: "Visit Us",
    detail: "10 Biz Park, Viman Nagar",
    subtext: "Pune, Maharashtra, India"
  },
  {
    icon: Clock,
    title: "Support Hours",
    detail: "24/7 Available",
    subtext: "For enterprise clients"
  }
];

const Contact = () => {
  return (
    <Layout>
      <section className="py-20 md:py-[120px] bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-background to-background pointer-events-none -z-10"></div>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mt-10">
            
            {/* Left side: Contact Details */}
            <div className="space-y-8">
              <AnimateOnView blur>
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-white">
                  SAIKHLEARN & SCHOLAR NEXUS PRIVATE LIMITED
                </h1>
                <p className="text-muted-foreground text-lg mb-10">
                  Reach out through any of these channels
                </p>
              </AnimateOnView>

              <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactDetails.map((item, index) => (
                  <AnimateOnView key={index} delay={index * 0.1} className="h-full">
                    <div className="bg-card/40 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-card/60 transition-all duration-300 h-full flex flex-col group hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(59,130,246,0.15)]">
                      <div className="w-12 h-12 bg-primary text-primary-foreground rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-primary/30">
                        <item.icon className="w-6 h-6" strokeWidth={1.5} />
                      </div>
                      <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                      <p className="text-primary font-medium mb-1">{item.detail}</p>
                      <p className="text-muted-foreground text-sm">{item.subtext}</p>
                    </div>
                  </AnimateOnView>
                ))}
              </StaggerContainer>
            </div>

            {/* Right side: Contact Form */}
            <div>
              <AnimateOnView blur delay={0.2} className="h-full">
                <div className="bg-card/40 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl h-full">
                  <h2 className="text-2xl font-semibold mb-6">Send us a message</h2>
                  <ContactForm />
                </div>
              </AnimateOnView>
            </div>

          </div>
        </Container>
      </section>
    </Layout>
  );
};

export default Contact;


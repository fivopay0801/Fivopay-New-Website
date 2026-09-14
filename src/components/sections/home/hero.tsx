import { Button } from "@/components/ui/button";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";
import { StaggerContainer } from "@/components/ui/motion/stagger";
import { ShieldCheck, Activity, Headphones } from "lucide-react";
import { Link } from "react-router-dom";

const trustBadges = [
  { icon: ShieldCheck, label: "Bank-Level Security" },
  { icon: Activity, label: "99.9% Uptime SLA" },
  { icon: Headphones, label: "24/7 Support" },
];

const Hero = () => {
  return (
    <section className="relative flex items-center justify-center overflow-hidden hero-padding-top pb-10 md:pb-0 bg-[linear-gradient(150deg,_var(--tw-gradient-stops))] from-primary/30 via-background to-background">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <StaggerContainer>
            <AnimateOnView blur>
              <span className="inline-block mb-5 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-sm text-primary">
                Registered Fintech Solutions Provider
              </span>
            </AnimateOnView>
            <AnimateOnView blur>
              <h1 className="h2 text-foreground mb-4">
                Complete Financial Solutions for <span className="text-gradient">Modern Banking</span>
              </h1>
            </AnimateOnView>

            <AnimateOnView blur delay={0.2}>
              <p className="text-body-md max-w-2xl mx-auto mb-6">
                From Cooperative Societies to Core Banking and Ethical Finance — comprehensive SaaS
                solutions for all financial institutions. Making Banking Easier.
              </p>
            </AnimateOnView>

            <AnimateOnView className="flex flex-wrap items-center justify-center gap-3 mb-8" delay={0.3}>
              <Button asChild>
                <Link to="/product">Explore Products</Link>
              </Button>
              <Button asChild variant="outline" className="border-white/20 bg-white/5 hover:bg-white/10 text-white backdrop-blur-md px-6 py-[15px] text-[18px] h-auto">
                <Link to="/contact">Schedule Demo</Link>
              </Button>
            </AnimateOnView>

            <AnimateOnView className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mb-14" delay={0.4}>
              {trustBadges.map((badge) => (
                <div key={badge.label} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <badge.icon className="w-4 h-4 text-primary" />
                  {badge.label}
                </div>
              ))}
            </AnimateOnView>
          </StaggerContainer>

          <div className="relative flex items-center justify-center">
            <StaggerContainer className="relative w-full max-w-[840px] flex items-center justify-center">
              <AnimateOnView delay={0.1} className="absolute right-0 top-1/2 -translate-y-1/2 aspect-[429/259] w-[51%] z-0">
                <img
                  src="/images/home/card-2.png"
                  alt="FivoPay digital banking card"
                  className="w-full h-full object-cover"
                />
              </AnimateOnView>

              <AnimateOnView delay={0.2} className="aspect-[525/317] w-[63%] z-10 bg-[url('/images/home/card-bg.png')] bg-cover bg-center rounded-[19px]">
                <img
                  src="/images/home/card-1.png"
                  alt="FivoPay banking platform card"
                  className="w-full h-full object-cover"
                />
              </AnimateOnView>

              <AnimateOnView delay={0.3} className="absolute left-0 top-1/2 -translate-y-1/2 aspect-[429/259] w-[51%] z-0">
                <img
                  src="/images/home/card-2.png"
                  alt="FivoPay digital banking card"
                  className="w-full h-full object-cover"
                />
              </AnimateOnView>
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

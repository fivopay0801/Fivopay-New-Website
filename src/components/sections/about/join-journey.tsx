import { Link } from "react-router-dom";
import Container from "@/components/container";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";
import { StaggerContainer } from "@/components/ui/motion/stagger";
import { Button } from "@/components/ui/button";

const JoinJourney = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-primary/5">
      <div className="absolute inset-0 bg-[url(/images/grid-pattern.png)] bg-repeat opacity-10"></div>
      
      <Container className="relative z-10">
        <StaggerContainer className="max-w-3xl mx-auto text-center flex flex-col items-center">
          <AnimateOnView blur delay={0.1}>
            <h2 className="h2 mb-6 text-foreground">
              Join Our <span className="text-primary">Journey</span>
            </h2>
          </AnimateOnView>

          <AnimateOnView blur delay={0.2}>
            <p className="text-xl text-muted-foreground mb-10">
              Partner with us to transform your financial operations
            </p>
          </AnimateOnView>

          <AnimateOnView blur delay={0.3}>
            <Button size="lg" className="rounded-full px-8 text-base shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-shadow" asChild>
              <Link to="/contact">
                Get in Touch
              </Link>
            </Button>
          </AnimateOnView>
        </StaggerContainer>
      </Container>
    </section>
  );
};

export default JoinJourney;

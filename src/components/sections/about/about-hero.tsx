import Container from "@/components/container";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";
import { StaggerContainer } from "@/components/ui/motion/stagger";

const AboutHero = () => {
    return (
        <section className="relative md:h-screen flex items-center justify-center overflow-hidden pt-32 pb-20 bg-[url(/images/about/about-hero.png)] bg-cover bg-center">
            {/* Background Placeholder */}
            <div className="absolute inset-0 bg-black/35">
            </div>

            <Container className="w-full">
                <StaggerContainer className="max-w-[800px] mx-auto text-center flex flex-col items-center">
                    {/* Headline */}
                    <AnimateOnView blur once>
                        <h1 className="h1 mb-6">
                            About <span className="text-gradient">FivoPay</span>
                        </h1>
                    </AnimateOnView>

                    {/* Subheadline */}
                    <AnimateOnView blur once delay={0.1}>
                        <p className="text-lg md:text-xl text-white max-w-[700px]">
                            <span className="text-gradient font-semibold">FivoPay</span> is a product of SAIKHLEARN & SCHOLAR NEXUS PRIVATE LIMITED. Making Banking Easier. We're on a mission to transform financial services with innovative technology solutions.
                        </p>
                    </AnimateOnView>
                </StaggerContainer>
            </Container>
        </section>
    );
};

export default AboutHero;

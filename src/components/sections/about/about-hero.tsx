import Container from "@/components/container";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";
import { StaggerContainer } from "@/components/ui/motion/stagger";
import { useLanguage } from "@/context/language-context";

const AboutHero = () => {
    const { t } = useLanguage();

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
                            {t.about.hero.title} <span className="text-gradient">FivoPay</span>
                        </h1>
                    </AnimateOnView>

                    {/* Subheadline */}
                    <AnimateOnView blur once delay={0.1}>
                        <p className="text-lg md:text-xl text-white max-w-[700px]">
                            <span className="text-gradient font-semibold">FivoPay</span> {t.about.hero.subtitle}
                        </p>
                    </AnimateOnView>
                </StaggerContainer>
            </Container>
        </section>
    );
};

export default AboutHero;

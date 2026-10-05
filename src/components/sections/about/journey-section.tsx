import Container from "@/components/container";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";
import { StaggerContainer } from "@/components/ui/motion/stagger";
import { Target, Heart, Eye, Users } from "lucide-react";
import { useLanguage } from "@/context/language-context";

const JourneySection = () => {
    const { t } = useLanguage();

    const values = [
        {
            title: t.about.values.v1Title,
            description: t.about.values.v1Desc,
            icon: Target,
        },
        {
            title: t.about.values.v2Title,
            description: t.about.values.v2Desc,
            icon: Heart,
        },
        {
            title: t.about.values.v3Title,
            description: t.about.values.v3Desc,
            icon: Eye,
        },
        {
            title: t.about.values.v4Title,
            description: t.about.values.v4Desc,
            icon: Users,
        },
    ];

    return (
        <section className="py-12 md:py-[60px]">
            <Container className="space-y-12">
                <StaggerContainer className="text-center max-w-2xl mx-auto flex flex-col items-center">
                    <AnimateOnView blur once>
                        <h2 className="h2 mb-4">
                            {t.about.values.title} <span className="text-primary">{t.about.values.titleGradient}</span>
                        </h2>
                    </AnimateOnView>
                    <AnimateOnView blur once delay={0.1}>
                        <p className="text-muted-foreground text-lg">
                            {t.about.values.subtitle}
                        </p>
                    </AnimateOnView>
                </StaggerContainer>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {values.map((value, index) => (
                        <AnimateOnView
                            key={index}
                            delay={index * 0.1}
                            className="p-8 rounded-[24px] bg-card border border-border flex flex-col items-center text-center gap-6"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-primary text-white flex items-center justify-center shadow-lg shadow-primary/20">
                                <value.icon className="w-8 h-8" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    {value.description}
                                </p>
                            </div>
                        </AnimateOnView>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default JourneySection;

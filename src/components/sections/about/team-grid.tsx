import Container from "@/components/container";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";
import { StaggerContainer } from "@/components/ui/motion/stagger";
import { Users } from "lucide-react";
import { useLanguage } from "@/context/language-context";

const TeamGrid = () => {
    const { t } = useLanguage();

    const teamGroups = [
        {
            title: t.about.team.techTitle,
            department: t.about.team.techDept,
            description: t.about.team.techDesc,
            icon: Users,
        },
        {
            title: t.about.team.csTitle,
            department: t.about.team.csDept,
            description: t.about.team.csDesc,
            icon: Users,
        }
    ];

    const stats = [
        {
            value: "200+",
            label: t.about.team.stat1,
        },
        {
            value: "50+",
            label: t.about.team.stat2,
        },
        {
            value: "5+",
            label: t.about.team.stat3,
        },
        {
            value: "24/7",
            label: t.about.team.stat4,
        },
    ];

    return (
        <section className="py-12 md:py-[60px]">
            <Container className="space-y-16">
                <StaggerContainer className="text-center max-w-2xl mx-auto flex flex-col items-center">
                    <AnimateOnView blur once>
                        <h2 className="h2 mb-4">
                            {t.about.team.title} <span className="text-gradient">{t.about.team.titleGradient}</span>
                        </h2>
                    </AnimateOnView>
                    <AnimateOnView blur once delay={0.1}>
                        <p className="text-muted-foreground text-lg">
                            {t.about.team.subtitle}
                        </p>
                    </AnimateOnView>
                </StaggerContainer>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {teamGroups.map((group, index) => (
                        <AnimateOnView
                            key={index}
                            delay={index * 0.1}
                            className="p-8 rounded-[24px] bg-card border border-border flex flex-col items-center text-center gap-4 shadow-sm"
                        >
                            <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center mb-2">
                                <group.icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold">{group.title}</h3>
                            <span className="text-sm font-semibold text-primary uppercase tracking-wider">{group.department}</span>
                            <p className="text-muted-foreground mt-2">
                                {group.description}
                            </p>
                        </AnimateOnView>
                    ))}
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-border/50">
                    {stats.map((stat, index) => (
                        <AnimateOnView
                            key={index}
                            delay={0.2 + (index * 0.1)}
                            className="flex flex-col items-center text-center space-y-2"
                        >
                            <span className="text-4xl md:text-5xl font-bold text-gradient">{stat.value}</span>
                            <span className="text-sm md:text-base text-muted-foreground font-medium">{stat.label}</span>
                        </AnimateOnView>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default TeamGrid;

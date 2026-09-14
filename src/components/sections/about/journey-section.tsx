import Container from "@/components/container";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";
import { StaggerContainer } from "@/components/ui/motion/stagger";
import { Target, Heart, Eye, Users } from "lucide-react";

const values = [
    {
        title: "Innovation First",
        description: "We constantly push boundaries to deliver cutting-edge financial technology solutions.",
        icon: Target,
    },
    {
        title: "Customer Centric",
        description: "Every decision we make is guided by how it benefits our customers and their end-users.",
        icon: Heart,
    },
    {
        title: "Transparency",
        description: "We believe in open communication, honest pricing, and clear documentation.",
        icon: Eye,
    },
    {
        title: "Collaboration",
        description: "We work closely with our clients to understand their unique needs and challenges.",
        icon: Users,
    },
];

const JourneySection = () => {
    return (
        <section className="py-12 md:py-[60px]">
            <Container className="space-y-12">
                <StaggerContainer className="text-center max-w-2xl mx-auto flex flex-col items-center">
                    <AnimateOnView blur once>
                        <h2 className="h2 mb-4">
                            Our <span className="text-primary">Values</span>
                        </h2>
                    </AnimateOnView>
                    <AnimateOnView blur once delay={0.1}>
                        <p className="text-muted-foreground text-lg">
                            The principles that guide everything we do
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

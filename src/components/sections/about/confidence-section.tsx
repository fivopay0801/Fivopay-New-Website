import Container from "@/components/container";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";
import { StaggerContainer } from "@/components/ui/motion/stagger";
import { Shield } from "lucide-react";
import { useLanguage } from "@/context/language-context";

const ConfidenceSection = () => {
    const { t } = useLanguage();

    return (
        <section className="py-12 md:py-[60px]">
            <Container className="space-y-12">
                <StaggerContainer className="text-center max-w-2xl mx-auto flex flex-col items-center">
                    <AnimateOnView blur once>
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold mb-6 uppercase tracking-wider">
                            <Shield className="w-4 h-4" />
                            {t.about.confidence.badge}
                        </div>
                    </AnimateOnView>
                    <AnimateOnView blur once delay={0.1}>
                        <h2 className="h2">
                            {t.about.confidence.titleStart} <span className="text-primary">{t.about.confidence.titleGradient}</span>
                        </h2>
                    </AnimateOnView>
                </StaggerContainer>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <AnimateOnView className="p-8 md:p-12 rounded-[32px] bg-card border border-border flex flex-col justify-center">
                        <p className="text-xl md:text-[22px] font-medium leading-relaxed">
                            "{t.about.confidence.quote}"
                        </p>
                    </AnimateOnView>
                    
                    <AnimateOnView delay={0.2} className="p-8 md:p-12 rounded-[32px] bg-card border border-border flex flex-col justify-center gap-4">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="p-2 rounded-lg bg-primary/10 text-primary">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                            </div>
                            <h3 className="text-xl font-bold">{t.about.confidence.modelTitle}</h3>
                        </div>
                        <div className="space-y-3">
                            <h4 className="font-semibold text-white">{t.about.confidence.infraOnly}</h4>
                            <p className="text-muted-foreground leading-relaxed">
                                {t.about.confidence.infraDesc}
                            </p>
                        </div>
                    </AnimateOnView>
                </div>
            </Container>
        </section>
    );
};

export default ConfidenceSection;

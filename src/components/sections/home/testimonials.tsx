import Container from "@/components/container"
import { AnimateOnView } from "@/components/ui/motion/animate-on-view"
import { StaggerContainer } from "@/components/ui/motion/stagger"
import { LockKeyhole, ScanFace, Radar, Server, UserCheck, Network } from "lucide-react"
import { useLanguage } from "@/context/language-context"

const Security = () => {
    const { t } = useLanguage();

    const securityIcons = [LockKeyhole, ScanFace, Radar, Server, UserCheck, Network];
    const securityFeatures = t.home.security.items.map((item, index) => ({
        ...item,
        icon: securityIcons[index % securityIcons.length],
    }));

    return (
        <section className="py-16 md:py-[80px] bg-background overflow-hidden relative">
            <style>
                {`
                @keyframes scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(calc(-50% - 12px)); }
                }
                .animate-scroll {
                    animation: scroll 40s linear infinite;
                }
                .animate-scroll:hover {
                    animation-play-state: paused;
                }
                `}
            </style>
            <Container className="mb-14">
                <StaggerContainer className="text-center max-w-2xl mx-auto">
                    <AnimateOnView blur>
                        <h2 className="h2 mb-5">
                            {t.home.security.title}
                        </h2>
                    </AnimateOnView>
                    <AnimateOnView blur delay={0.2}>
                        <p className="text-muted-foreground">
                            {t.home.security.subtitle}
                        </p>
                    </AnimateOnView>
                </StaggerContainer>
            </Container>

            <div className="relative w-full max-w-[100vw] flex overflow-hidden py-4">
                {/* Fade edges */}
                <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
                <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>
                
                <div className="flex w-max animate-scroll gap-6 px-6">
                    {/* Render array twice for infinite seamless loop */}
                    {[...securityFeatures, ...securityFeatures].map((feature, index) => (
                        <div key={index} className="w-[320px] md:w-[400px] shrink-0">
                            <div className="bg-card/40 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:bg-card/60 transition-all duration-300 h-full flex flex-col group hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(59,130,246,0.2)]">
                                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/60 text-primary-foreground rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                                    <feature.icon className="w-8 h-8" strokeWidth={1.5} />
                                </div>
                                <h3 className="h4 mb-3 group-hover:text-primary transition-colors">{feature.title}</h3>
                                <p className="text-muted-foreground text-body-sm leading-relaxed">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Security

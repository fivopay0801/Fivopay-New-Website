import spinningLogo from '@/assets/lottie/big spinning logo.json'
import { AnimateOnView } from '@/components/ui/motion/animate-on-view'
import { StaggerContainer } from '@/components/ui/motion/stagger'
import Lottie from 'lottie-react'
import Container from '../../container'
import { Database, Shield, Zap, RefreshCw, BarChart, Users, LineChart, Cpu } from 'lucide-react'

const featuresLeft = [
    { text: "Core Banking", icon: Database, top: "18%", left: "5%" },
    { text: "Ethical Finance", icon: Shield, top: "38%", left: "5%" },
    { text: "Fast Transactions", icon: Zap, top: "58%", left: "5%" },
    { text: "Automation", icon: RefreshCw, top: "78%", left: "5%" }
];

const featuresRight = [
    { text: "Deep Analytics", icon: BarChart, top: "18%", right: "5%" },
    { text: "Cooperative Mgmt", icon: Users, top: "38%", right: "5%" },
    { text: "Forecasting", icon: LineChart, top: "58%", right: "5%" },
    { text: "AI Integration", icon: Cpu, top: "78%", right: "5%" }
];

const FeatureGrowth = () => {

    return (
        <section className="md:py-[60px] py-12 relative">
            <Container className="md:space-y-16 space-y-8">
                <StaggerContainer className="text-center md:max-w-none max-w-xs mx-auto">
                    <AnimateOnView blur>
                        <h2 className="h2 md:mb-5 mb-3">
                            Smarter Banking, Built for Growth
                        </h2>
                    </AnimateOnView>
                    <AnimateOnView blur delay={0.2}>
                        <p className="text-muted-foreground">
                            Discover the powerful tools that make <span className="text-gradient font-semibold">FivoPay</span> the future of finance.
                        </p>
                    </AnimateOnView>
                </StaggerContainer>
                
                {/* Lottie Animation with Overlay Pills */}
                <div className="relative w-full max-w-6xl mx-auto aspect-[1173/403] mt-8 hidden md:block">
                    {/* The Lottie itself */}
                    <AnimateOnView className="absolute inset-0 z-0">
                        <Lottie animationData={spinningLogo} className="w-full h-full object-contain" />
                    </AnimateOnView>

                    {/* Overlay Options - Left */}
                    {featuresLeft.map((feature, idx) => (
                        <div 
                            key={`left-${idx}`}
                            className="absolute z-10 flex items-center gap-3 bg-card/60 backdrop-blur-xl border border-white/10 rounded-full px-5 py-2.5 shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:border-primary/50 hover:bg-card/80 transition-all cursor-pointer group"
                            style={{ top: feature.top, left: feature.left }}
                        >
                            <div className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                                <feature.icon className="w-4 h-4" />
                            </div>
                            <span className="text-sm font-semibold tracking-wide text-white/90 group-hover:text-white">{feature.text}</span>
                        </div>
                    ))}

                    {/* Overlay Options - Right */}
                    {featuresRight.map((feature, idx) => (
                        <div 
                            key={`right-${idx}`}
                            className="absolute z-10 flex items-center gap-3 bg-card/60 backdrop-blur-xl border border-white/10 rounded-full px-5 py-2.5 shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:border-primary/50 hover:bg-card/80 transition-all cursor-pointer group flex-row-reverse"
                            style={{ top: feature.top, right: feature.right }}
                        >
                            <div className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                                <feature.icon className="w-4 h-4" />
                            </div>
                            <span className="text-sm font-semibold tracking-wide text-white/90 group-hover:text-white">{feature.text}</span>
                        </div>
                    ))}
                </div>

                {/* Mobile Fallback (since the diagram is too wide for mobile) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden mt-8">
                    {[...featuresLeft, ...featuresRight].map((feature, idx) => (
                        <div key={`mobile-${idx}`} className="flex items-center gap-4 bg-card/40 border border-white/5 rounded-xl p-4">
                            <div className="w-10 h-10 rounded-full bg-primary/20 text-primary flex items-center justify-center">
                                <feature.icon className="w-5 h-5" />
                            </div>
                            <span className="font-medium">{feature.text}</span>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    )
}

export default FeatureGrowth

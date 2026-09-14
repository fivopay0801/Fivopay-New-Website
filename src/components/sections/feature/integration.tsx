import featureIntegration from '@/assets/lottie/feature-integration.json'
import { AnimateOnView } from '@/components/ui/motion/animate-on-view'
import { StaggerContainer } from '@/components/ui/motion/stagger'
import { ArrowRight } from 'lucide-react'
import Lottie from 'lottie-react'
import Container from '../../container'

const FeatureIntegration = () => {

    return (
        <section className="md:py-[60px] py-12 bg-background">
            <Container className="md:space-y-16 space-y-8">
                <AnimateOnView>
                    <Lottie animationData={featureIntegration} />
                </AnimateOnView>
                <StaggerContainer className="text-center md:max-w-none max-w-xs mx-auto">
                    <AnimateOnView blur>
                        <h2 className="h2 md:mb-5 mb-3 flex items-center justify-center flex-wrap gap-2 md:gap-3.5">
                            <span className="text-gradient font-bold">Finance</span>
                            <span className="inline-flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-r from-primary/20 to-purple-500/20 border border-primary/30 text-primary shadow-[0_0_15px_rgba(59,130,246,0.25)] shrink-0">
                                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                            </span>
                            <span>Connected, Effortless & Control</span>
                        </h2>
                    </AnimateOnView>
                    <AnimateOnView blur delay={0.2}>
                        <p className="text-muted-foreground">
                            Link <span className="text-gradient font-semibold">FivoPay</span> to your favorite business tools and take charge of your finances
                        </p>
                    </AnimateOnView>
                </StaggerContainer>
            </Container>
        </section>
    )
}

export default FeatureIntegration

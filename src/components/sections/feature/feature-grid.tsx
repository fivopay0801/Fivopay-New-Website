import feature3 from "@/assets/lottie/19k-earning.json"
import feature1 from "@/assets/lottie/growth-100.json"
import feature4 from "@/assets/lottie/integrations.json"
import feature2 from "@/assets/lottie/unlimited-cashback.json"

import { AnimateOnView } from '@/components/ui/motion/animate-on-view'
import { StaggerContainer } from '@/components/ui/motion/stagger'
import Lottie from 'lottie-react'
import Container from '../../container'
import { useLanguage } from '@/context/language-context'

const FeatureGrid = () => {
    const { t } = useLanguage();

    const features = [
        {
            id: 1,
            title: t.product.grid.feature1Title,
            description: t.product.grid.feature1Desc,
            lottieData: feature1,
        },
        {
            id: 2,
            title: t.product.grid.feature2Title,
            description: t.product.grid.feature2Desc,
            lottieData: feature2,
        },
        {
            id: 3,
            title: t.product.grid.feature3Title,
            description: t.product.grid.feature3Desc,
            lottieData: feature3,
        },
        {
            id: 4,
            title: t.product.grid.feature4Title,
            description: t.product.grid.feature4Desc,
            lottieData: feature4,
        }
    ];

    return (
        <section className="md:py-[60px] py-12">
            <Container className="md:space-y-20 space-y-8">
                <StaggerContainer className="text-center md:max-w-xl max-w-sm mx-auto">
                    <AnimateOnView blur>
                        <h2 className="h2 md:mb-5 mb-3">
                            {t.product.grid.title}
                        </h2>
                    </AnimateOnView>
                    <AnimateOnView blur delay={0.2}>
                        <p className="text-muted-foreground">
                            {t.product.grid.subtitle}
                        </p>
                    </AnimateOnView>
                </StaggerContainer>

                <StaggerContainer>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {features.map((feature, index) => (
                            <AnimateOnView
                                key={feature.id}
                                delay={index * 0.1}
                                className={`h-full`}
                            >
                                <div className="border-0 bg-card rounded-[32px] overflow-hidden">
                                    <div className="w-full">
                                        <Lottie
                                            animationData={feature.lottieData}
                                            loop={true}
                                            className="w-full h-full"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <h3 className="h4 mb-[9px]">
                                            {feature.title}
                                        </h3>
                                        <p className="text-muted-foreground">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            </AnimateOnView>
                        ))}
                    </div>
                </StaggerContainer>
            </Container>
        </section>
    )
}

export default FeatureGrid

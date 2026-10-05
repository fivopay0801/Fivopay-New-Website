import { AnimateOnView } from '@/components/ui/motion/animate-on-view'
import { StaggerContainer } from '@/components/ui/motion/stagger'
import { Link } from 'react-router-dom'
import Container from '../../container'
import { Button } from '../../ui/button'

import cooperativeImg from '@/assets/CooperativeB.png'
import coreImg from '@/assets/coreB.png'
import ethicalImg from '@/assets/EthicalB.png'
import employeeCredImg from '@/assets/employeeCred.png'
import fivoLinkImg from '@/assets/fivoLink.png'
import fivoUnionImg from '@/assets/fivoUniion.jpeg'
import mudroxImg from '@/assets/MudroxImage.png'
import {
  FeatureCard,
  FeatureCardAction,
  FeatureCardContent,
  FeatureCardDescription,
  FeatureCardImage,
  FeatureCardOverlay,
  FeatureCardTitle
} from '../../ui/feature-card'
import { useLanguage } from '@/context/language-context'

const cardDataMap: Record<number, { imageSrc: string; imageAlt: string; overlayData: any; overlayPosition: "bottom-left" }> = {
  5: {
    imageSrc: fivoLinkImg,
    imageAlt: "FivoLink business platform",
    overlayData: {
      src: "images/home/feature-stat-1.webp",
      alt: "Business shopping and management",
      className: "aspect-[203/188] w-full max-w-[203px]"
    },
    overlayPosition: "bottom-left"
  },
  6: {
    imageSrc: fivoUnionImg,
    imageAlt: "Fivo Union donation platform",
    overlayData: {
      src: "images/home/feature-stat-2.png",
      alt: "Donation and payment metrics",
      className: "aspect-[244/130] w-full max-w-[244px]"
    },
    overlayPosition: "bottom-left"
  },
  7: {
    imageSrc: mudroxImg,
    imageAlt: "Mudrox Escrow platform",
    overlayData: {
      src: "images/home/feature-stat-3.png",
      alt: "Escrow deal statistics",
      className: "aspect-[173/180] w-full max-w-[173px]"
    },
    overlayPosition: "bottom-left"
  },
  1: {
    imageSrc: cooperativeImg,
    imageAlt: "Cooperative society management dashboard",
    overlayData: {
      src: "images/home/feature-stat-1.webp",
      alt: "Member and share management statistics",
      className: "aspect-[203/188] w-full max-w-[203px]"
    },
    overlayPosition: "bottom-left"
  },
  2: {
    imageSrc: ethicalImg,
    imageAlt: "Ethical banking platform",
    overlayData: {
      src: "images/home/feature-stat-2.png",
      alt: "Profit sharing and Zakat automation",
      className: "aspect-[244/130] w-full max-w-[244px]"
    },
    overlayPosition: "bottom-left"
  },
  3: {
    imageSrc: coreImg,
    imageAlt: "Core banking platform interface",
    overlayData: {
      src: "images/home/feature-stat-3.png",
      alt: "Real-time transaction processing metrics",
      className: "aspect-[173/180] w-full max-w-[173px]"
    },
    overlayPosition: "bottom-left"
  },
  4: {
    imageSrc: employeeCredImg,
    imageAlt: "Employee credit cooperative banking",
    overlayData: {
      src: "images/home/feature-stat-2.png",
      alt: "Employee loan and benefit automation",
      className: "aspect-[244/130] w-full max-w-[244px]"
    },
    overlayPosition: "bottom-left"
  }
};

const Features = () => {
  const { t } = useLanguage();

  const cards = t.product.productsSection.cards.map((card) => ({
    ...card,
    ...cardDataMap[card.id],
  }));

  return (
    <section className="py-12 md:py-[60px] bg-background">
      <Container className="space-y-8 md:space-y-20">
        <StaggerContainer className="text-center max-w-xl mx-auto">
          <AnimateOnView
            blur
          >
            <h2
              className="h2 mb-6"
            >
              {t.product.productsSection.title}
            </h2>
          </AnimateOnView>
          <AnimateOnView
            blur
            delay={0.2}
          >
            <p
              className='text-muted-foreground'
            >
              {t.product.productsSection.subtitle}
            </p>
          </AnimateOnView>
        </StaggerContainer>
        <StaggerContainer
          className='max-w-[1062px] mx-auto md:space-y-[60px] space-y-8'
        >
          {cards.map((card, index) => (
            <AnimateOnView
              delay={index * 0.1}
              key={card.id}
              className={`md:sticky md:top-24 z-10 bg-background md:rounded-[30px] rounded-lg`}
            >
              <FeatureCard
                imagePosition="right"
              >
                <FeatureCardContent>
                  <FeatureCardTitle>{card.title}</FeatureCardTitle>
                  <FeatureCardDescription>{card.description}</FeatureCardDescription>
                  <FeatureCardAction>
                    <Button asChild>
                      <Link to="/product">
                        {t.product.productsSection.learnMore}
                      </Link>
                    </Button>
                  </FeatureCardAction>
                </FeatureCardContent>
                <FeatureCardImage src={card.imageSrc} alt={card.imageAlt}>
                  <FeatureCardOverlay
                    src={card.overlayData.src}
                    alt={card.overlayData.alt}
                    position={card.overlayPosition}
                    className={card.overlayData.className}
                  />
                </FeatureCardImage>
              </FeatureCard>
            </AnimateOnView>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  )
}

export default Features

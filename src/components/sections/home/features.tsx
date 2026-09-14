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

const cards = [
  {
    id: 5,
    title: "FivoLink",
    description: "FivoLink is your all-in-one business shopping and management platform designed to simplify the way you buy, manage, and grow your business.",
    imageSrc: fivoLinkImg,
    imageAlt: "FivoLink business platform",
    overlayData: {
      src: "images/home/feature-stat-1.webp",
      alt: "Business shopping and management",
      className: "aspect-[203/188] w-full max-w-[203px]"
    },
    overlayPosition: "bottom-left" as const
  },
  {
    id: 6,
    title: "Fivo Union",
    description: "Fivo Union is a unified digital platform that allows devotees to donate seamlessly and securely.",
    imageSrc: fivoUnionImg,
    imageAlt: "Fivo Union donation platform",
    overlayData: {
      src: "images/home/feature-stat-2.png",
      alt: "Donation and payment metrics",
      className: "aspect-[244/130] w-full max-w-[244px]"
    },
    overlayPosition: "bottom-left" as const
  },
  {
    id: 7,
    title: "Mudrox",
    description: "Mudrox is our premier Escrow platform where buyers and sellers can make trustworthy deals with complete financial protection.",
    imageSrc: mudroxImg,
    imageAlt: "Mudrox Escrow platform",
    overlayData: {
      src: "images/home/feature-stat-3.png",
      alt: "Escrow deal statistics",
      className: "aspect-[173/180] w-full max-w-[173px]"
    },
    overlayPosition: "bottom-left" as const
  },
  {
    id: 1,
    title: "Cooperative Management",
    description: "Complete financial cooperative society management with member services, share management, dividend distribution and full loan processing.",
    imageSrc: cooperativeImg,
    imageAlt: "Cooperative society management dashboard",
    overlayData: {
      src: "images/home/feature-stat-1.webp",
      alt: "Member and share management statistics",
      className: "aspect-[203/188] w-full max-w-[203px]"
    },
    overlayPosition: "bottom-left" as const
  },
  {
    id: 2,
    title: "Ethical Banking",
    description: "Ethical banking with profit-sharing accounts, Qard Hasan loans, automated Zakat calculation and compliance monitoring.",
    imageSrc: ethicalImg,
    imageAlt: "Ethical banking platform",
    overlayData: {
      src: "images/home/feature-stat-2.png",
      alt: "Profit sharing and Zakat automation",
      className: "aspect-[244/130] w-full max-w-[244px]"
    },
    overlayPosition: "bottom-left" as const
  },
  {
    id: 3,
    title: "Core Banking Platform",
    description: "Enterprise banking infrastructure with payments, lending, multi-branch support and real-time transaction processing.",
    imageSrc: coreImg,
    imageAlt: "Core banking platform interface",
    overlayData: {
      src: "images/home/feature-stat-3.png",
      alt: "Real-time transaction processing metrics",
      className: "aspect-[173/180] w-full max-w-[173px]"
    },
    overlayPosition: "bottom-left" as const
  },
  {
    id: 4,
    title: "Employee Credit Cooperatives",
    description: "Specialised workplace banking for manufacturing, defence and government employees with flexible, sector-specific loan products.",
    imageSrc: employeeCredImg,
    imageAlt: "Employee credit cooperative banking",
    overlayData: {
      src: "images/home/feature-stat-2.png",
      alt: "Employee loan and benefit automation",
      className: "aspect-[244/130] w-full max-w-[244px]"
    },
    overlayPosition: "bottom-left" as const
  }
]

const Features = () => {

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
              Our Products
            </h2>
          </AnimateOnView>
          <AnimateOnView
            blur
            delay={0.2}
          >
            <p
              className='text-muted-foreground'
            >
              Discover our comprehensive suite of products designed for your financial and operational needs.
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
                      <Link to="/products">
                        Learn More
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

import { AnimateOnView } from '@/components/ui/motion/animate-on-view'
import { StaggerContainer } from '@/components/ui/motion/stagger'
import Container from '../../container'
import { Button } from '@/components/ui/button'
import { CheckCircle2, Info } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useLanguage } from '@/context/language-context'

const Pricing = () => {
  const { t } = useLanguage();

  const pricingTiers = [
    {
      id: 'silver',
      name: 'SILVER',
      description: t.home.pricing.silverDesc,
      price: t.home.pricing.custom,
      period: '',
      tag: t.home.pricing.userBasedAccess,
      color: 'from-slate-400 to-slate-500',
      headerBg: 'bg-slate-500/10',
      borderColor: 'border-slate-500/20',
      serviceExperience: t.home.pricing.silverFeatures,
    },
    {
      id: 'gold',
      name: 'GOLD',
      description: t.home.pricing.goldDesc,
      price: t.home.pricing.custom,
      period: '',
      tag: t.home.pricing.userBasedAccess,
      color: 'from-yellow-400 to-yellow-600',
      headerBg: 'bg-yellow-500/10',
      borderColor: 'border-yellow-500/30',
      isPopular: true,
      serviceExperience: t.home.pricing.goldFeatures,
    },
    {
      id: 'platinum',
      name: 'PLATINUM',
      description: t.home.pricing.platinumDesc,
      price: t.home.pricing.custom,
      period: '',
      tag: t.home.pricing.userBasedAccess,
      color: 'from-purple-500 to-purple-600',
      headerBg: 'bg-purple-500/10',
      borderColor: 'border-purple-500/20',
      serviceExperience: t.home.pricing.platinumFeatures,
    },
  ];

  const comparisonRows = t.home.pricing.tableRows;

  return (
    <section className="py-12 md:py-[80px]">
      <Container className="space-y-16">
        <StaggerContainer className="text-center max-w-2xl mx-auto flex flex-col items-center">
          <AnimateOnView blur once>
            <h2 className="h2 mb-4">
              {t.home.pricing.title} <span className="text-primary">{t.home.pricing.titleGradient}</span>
            </h2>
          </AnimateOnView>
          <AnimateOnView blur delay={0.1} once>
            <p className="text-muted-foreground text-lg">
              {t.home.pricing.subtitle}
            </p>
          </AnimateOnView>
        </StaggerContainer>

        {/* Pricing Cards */}
        <StaggerContainer>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <AnimateOnView
                key={tier.id}
                delay={index * 0.1}
                className={`relative rounded-[24px] overflow-hidden border flex flex-col bg-card shadow-sm transition-all duration-300 hover:border-white/20 ${tier.borderColor}`}
              >
                {/* Header Strip */}
                <div className={`h-1.5 w-full bg-gradient-to-r ${tier.color}`} />

                {tier.isPopular && (
                  <div className="absolute top-0 right-1/2 translate-x-1/2 bg-yellow-500 text-black text-[10px] font-bold px-3 py-1 rounded-b-lg uppercase tracking-wider z-10">
                    {t.home.pricing.mostPopular}
                  </div>
                )}

                <div className={`p-8 ${tier.headerBg} border-b ${tier.borderColor}`}>
                  <h3 className="text-2xl font-bold tracking-tight mb-2 text-center text-white">{tier.name}</h3>
                  <p className="text-sm text-muted-foreground text-center mb-6 min-h-[40px]">{tier.description}</p>
                  
                  <div className="flex flex-col items-center gap-1 mb-4">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold">{tier.price}</span>
                      <span className="text-muted-foreground text-sm">{tier.period}</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-center mb-6">
                    <span className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-muted-foreground font-medium">
                      {tier.tag}
                    </span>
                  </div>

                  <Button asChild className="w-full font-semibold" variant={tier.isPopular ? "default" : "secondary"}>
                    <Link to="/contact">{t.home.pricing.getStarted}</Link>
                  </Button>
                </div>

                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex items-center justify-center gap-2 mb-6">
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground text-center">
                      {t.home.pricing.serviceExperience}
                    </h4>
                  </div>
                  
                  <ul className="space-y-4 flex-1">
                    {tier.serviceExperience.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span className="text-white/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimateOnView>
            ))}
          </div>
        </StaggerContainer>

        {/* Detailed Comparison Table */}
        <AnimateOnView className="overflow-x-auto border border-border rounded-2xl bg-card/50 backdrop-blur-sm hidden md:block">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead>
              <tr className="border-b border-border bg-white/5">
                <th className="p-4 font-semibold text-white/90">{t.home.pricing.featuresComparison}</th>
                <th className="p-4 font-bold text-center text-slate-300 w-1/4">SILVER</th>
                <th className="p-4 font-bold text-center text-yellow-500 w-1/4">GOLD</th>
                <th className="p-4 font-bold text-center text-purple-400 w-1/4">PLATINUM</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {comparisonRows.map((row, i) => (
                <tr key={i} className="hover:bg-white/5 transition-colors">
                  <td className="p-4 flex items-center gap-2 text-white/90">
                    <Info className="w-4 h-4 text-muted-foreground" />
                    {row.feature}
                  </td>
                  <td className="p-4 text-center text-muted-foreground whitespace-normal break-words">{row.silver}</td>
                  <td className="p-4 text-center text-white/80 font-medium whitespace-normal break-words">{row.gold}</td>
                  <td className="p-4 text-center text-muted-foreground whitespace-normal break-words">{row.platinum}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </AnimateOnView>

        {/* Bottom Banner */}
        <AnimateOnView className="bg-primary/10 border border-primary/20 rounded-2xl p-6 text-center">
          <p className="text-primary font-medium text-sm md:text-base">
            {t.home.pricing.bannerText} <span className="font-bold text-white">{t.home.pricing.bannerHighlight}</span>
          </p>
          <p className="text-muted-foreground text-xs md:text-sm mt-1">
            {t.home.pricing.bannerSub}
          </p>
        </AnimateOnView>

      </Container>
    </section>
  )
}

export default Pricing

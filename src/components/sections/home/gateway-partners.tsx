import Container from "@/components/container";
import FeatureTicker from "@/components/ui/feature-ticker";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";

interface Partner {
  name: string;
  logo: string;
  className?: string;
}

const partners: Partner[] = [
  {
    name: "Razorpay",
    logo: "/images/partners/razorpay_dark.svg",
    className: "h-7 md:h-8 max-w-[145px]",
  },
  {
    name: "Cashfree",
    logo: "/images/partners/cashfree_trans.png",
    className: "h-7 md:h-8 max-w-[130px]",
  },
  {
    name: "PayU",
    logo: "/images/partners/payu_dark.png",
    className: "h-8 md:h-9 max-w-[110px]",
  },
  {
    name: "Easebuzz",
    logo: "/images/partners/easebuzz_dark.png",
    className: "h-6 md:h-7 max-w-[150px]",
  },
  {
    name: "PhonePe",
    logo: "/images/partners/phonepe_dark.png",
    className: "h-7 md:h-8 max-w-[140px]",
  },
];

// Double list for wider spread in ticker
const tickerPartners = [...partners, ...partners];

const GatewayPartners = () => {
  return (
    <section className="overflow-hidden py-10 md:py-14 border-y border-white/[0.06] bg-black/20 relative">
      <Container>
        <AnimateOnView y={20} className="text-center mb-6">
          <p className="text-xs md:text-sm font-semibold uppercase tracking-[0.25em] text-muted-foreground">
            Our Gateway Partners
          </p>
        </AnimateOnView>

        <AnimateOnView y={30} delay={0.1} className="relative w-full">
          <FeatureTicker speed={35} pauseOnHover={true} gap="6">
            {tickerPartners.map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex items-center justify-center px-6 py-3 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-primary/40 transition-all duration-300 shadow-sm backdrop-blur-md shrink-0 h-[64px] min-w-[190px] md:min-w-[210px] group"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className={`w-auto object-contain transition-transform duration-300 group-hover:scale-105 ${partner.className || "h-7 md:h-8"}`}
                  loading="lazy"
                />
              </div>
            ))}
          </FeatureTicker>
        </AnimateOnView>
      </Container>
    </section>
  );
};

export default GatewayPartners;

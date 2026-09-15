import Container from "@/components/container";
import FeatureTicker from "@/components/ui/feature-ticker";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";
import {
  ArrowRight,
  CheckCircle2,
  Cpu,
  Plus,
  RefreshCw,
  Zap,
} from "lucide-react";

interface GatewayItem {
  name: string;
  logo?: string;
  isCustom?: boolean;
  className?: string;
  statusTag: string;
}

const gateways: GatewayItem[] = [
  {
    name: "Razorpay",
    logo: "/images/partners/razorpay_dark.svg",
    className: "h-7 md:h-8 max-w-[145px]",
    statusTag: "Primary & Failover Rail",
  },
  {
    name: "Cashfree",
    logo: "/images/partners/cashfree_trans.png",
    className: "h-7 md:h-8 max-w-[130px]",
    statusTag: "Auto-Cascade Route",
  },
  {
    name: "PayU",
    logo: "/images/partners/payu_dark.png",
    className: "h-8 md:h-9 max-w-[110px]",
    statusTag: "Redundant Route",
  },
  {
    name: "Easebuzz",
    logo: "/images/partners/easebuzz_dark.png",
    className: "h-6 md:h-7 max-w-[150px]",
    statusTag: "Dynamic Switch Rail",
  },
  {
    name: "PhonePe",
    logo: "/images/partners/phonepe_dark.png",
    className: "h-7 md:h-8 max-w-[140px]",
    statusTag: "Instant UPI Fallback",
  },
  {
    name: "Custom Gateway API",
    isCustom: true,
    statusTag: "Plug Any Provider",
  },
];

// Double list for seamless spread in continuous ticker
const tickerGateways = [...gateways, ...gateways];

const GatewayPartners = () => {
  return (
    <section className="overflow-hidden py-14 md:py-20 border-y border-white/[0.06] bg-gradient-to-b from-black/40 via-black/20 to-black/40 relative">
      {/* Subtle background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[250px] bg-primary/10 blur-[130px] rounded-full pointer-events-none" />

      <Container className="relative z-10">
        {/* Header Section */}
        <AnimateOnView y={20} className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-xs font-semibold text-emerald-400 mb-4 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Intelligent Multi-Gateway Failover</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
            Multi-Gateway Redundancy.{" "}
            <span className="text-gradient">Zero Payment Dropoffs.</span>
          </h2>

          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
            Pre-integrated with India&apos;s top payment gateways with automated failover logic.
            If one gateway encounters downtime or bank failure, transactions dynamically cascade to the next
            active gateway — ensuring 99.99% payment continuity.
          </p>
        </AnimateOnView>

        {/* Dynamic Failover Architecture Flow Indicator */}
        <AnimateOnView y={25} delay={0.1} className="max-w-3xl mx-auto mb-10">
          <div className="p-3.5 md:p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md shadow-lg shadow-black/20">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              {/* Step 1: Initiated */}
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.05] border border-white/10 text-foreground font-medium w-full sm:w-auto justify-center shadow-sm">
                <span className="w-2 h-2 rounded-full bg-blue-400" />
                <span>Customer Checkout</span>
              </div>

              <ArrowRight className="w-4 h-4 text-muted-foreground/60 hidden sm:block shrink-0" />

              {/* Step 2: Router */}
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-primary/10 border border-primary/30 text-primary font-semibold w-full sm:w-auto justify-center shadow-sm">
                <RefreshCw
                  className="w-3.5 h-3.5 animate-spin text-primary"
                  style={{ animationDuration: "5s" }}
                />
                <span>Smart Routing Engine</span>
              </div>

              <ArrowRight className="w-4 h-4 text-muted-foreground/60 hidden sm:block shrink-0" />

              {/* Step 3: Gateway 1 fails -> Auto-cascade to Gateway 2 */}
              <div className="flex items-center gap-2 w-full sm:w-auto justify-center flex-wrap">
                <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-300 line-through opacity-70 text-[11px]">
                  <span>Gateway 1 Down</span>
                </div>
                <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1">
                  <Zap className="w-3 h-3 text-emerald-400 fill-emerald-400" />
                  Auto-Cascade
                </span>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 font-semibold shadow-[0_0_15px_rgba(16,185,129,0.2)] text-[11px]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Gateway 2 Success</span>
                </div>
              </div>
            </div>
          </div>
        </AnimateOnView>

        {/* Feature Highlights Grid */}
        <AnimateOnView y={30} delay={0.15} className="max-w-4xl mx-auto mb-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
            <div className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/[0.07] hover:border-white/15 transition-all">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                <RefreshCw className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-foreground mb-1">
                  Instant Auto-Failover
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Automatic retry & rerouting to secondary rail within milliseconds if primary gateway times out.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/[0.07] hover:border-white/15 transition-all">
              <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0 mt-0.5">
                <Cpu className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-foreground mb-1">
                  Pre-Integrated & Extensible
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Razorpay, Cashfree, PayU, PhonePe, Easebuzz ready to use, plus flexible custom gateway adapters.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/[0.07] hover:border-white/15 transition-all">
              <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
                <Zap className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-foreground mb-1">
                  99.99% Transaction Success
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Dynamic health checks proactively bypass outages before your users experience a failed payment.
                </p>
              </div>
            </div>
          </div>
        </AnimateOnView>

        {/* Gateways Showcase Ticker */}
        <AnimateOnView y={35} delay={0.2} className="relative w-full">
          <div className="text-center mb-4">
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-muted-foreground/80">
              Pre-Integrated & Supported Gateway Rails
            </span>
          </div>

          <FeatureTicker speed={32} pauseOnHover={true} gap="6">
            {tickerGateways.map((gateway, index) => (
              <div
                key={`${gateway.name}-${index}`}
                className="flex flex-col items-center justify-center gap-1.5 px-6 py-3 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-primary/40 transition-all duration-300 shadow-sm backdrop-blur-md shrink-0 h-[76px] min-w-[210px] md:min-w-[230px] group"
              >
                {gateway.isCustom ? (
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-lg bg-primary/20 border border-primary/40 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                      <Plus className="w-3.5 h-3.5" />
                    </div>
                    <span className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors">
                      Custom Gateway API
                    </span>
                  </div>
                ) : (
                  <img
                    src={gateway.logo}
                    alt={gateway.name}
                    className={`w-auto object-contain transition-transform duration-300 group-hover:scale-105 ${gateway.className || "h-7 md:h-8"}`}
                    loading="lazy"
                  />
                )}

                <div className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground group-hover:text-emerald-400 transition-colors">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-pulse" />
                  {gateway.statusTag}
                </div>
              </div>
            ))}
          </FeatureTicker>
        </AnimateOnView>
      </Container>
    </section>
  );
};

export default GatewayPartners;

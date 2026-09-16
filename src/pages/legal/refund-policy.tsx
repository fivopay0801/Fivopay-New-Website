import Container from "@/components/container";
import Layout from "@/components/layout";
import LegalHero from "@/components/sections/legal/hero";
import SEO from "@/components/seo";
import { appConfig } from "@/utils/app-config";
import { Mail, Phone, Clock, AlertTriangle } from "lucide-react";

const RefundPolicyPage = () => {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": `Refund and Cancellation | ${appConfig.name}`,
        "description": `Refund and Cancellation Policy for ${appConfig.name} by SAIKHLEARN & SCHOLAR NEXUS PRIVATE LIMITED.`,
        "url": `${appConfig.url}/refund-policy`
    };

    return (
        <>
            <SEO
                title={`Refund & Cancellation Policy | ${appConfig.name}`}
                description={`Refund and Cancellation Policy for ${appConfig.name} - Understand our refund eligibility, processing timelines, and cancellation procedures.`}
                canonicalUrl={`/refund-policy`}
                ogType="website"
                jsonLd={jsonLd}
            />
            <Layout>
                <LegalHero
                    title="Refund and Cancellation"
                    description="Last Updated: March 20, 2026"
                />
                <section className="py-12 md:py-16">
                    <Container className="flex flex-col justify-center items-center">
                        <article className="w-full max-w-[880px] space-y-10 text-white/80 leading-relaxed text-[16px] md:text-[17px]">
                            {/* Section 1 */}
                            <div className="p-6 md:p-8 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-sm space-y-4">
                                <h3 className="text-xl md:text-2xl font-bold text-white flex items-center gap-3">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/20 text-primary text-sm font-bold">1</span>
                                    Cancellation Policy
                                </h3>
                                <p className="text-white/80">
                                    Customers can cancel their service subscription at any time. However, cancellations made after the billing cycle has started will take effect from the next billing period. To cancel, please email{" "}
                                    <a href="mailto:info@fivopay.com" className="text-primary hover:underline font-medium">
                                        info@fivopay.com
                                    </a>.
                                </p>
                            </div>

                            {/* Section 2 */}
                            <div className="p-6 md:p-8 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-sm space-y-4">
                                <h3 className="text-xl md:text-2xl font-bold text-white flex items-center gap-3">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/20 text-primary text-sm font-bold">2</span>
                                    Refund Eligibility
                                </h3>
                                <p className="text-white/80">
                                    Refunds are considered on a case-by-case basis. Generally, since <strong className="text-white">SAIKHLEARN & SCHOLAR NEXUS PRIVATE LIMITED</strong> provides digital software-as-a-service (SaaS) products, refunds are only issued if:
                                </p>
                                <ul className="list-disc list-inside space-y-2 pl-2 text-white/70">
                                    <li>A double payment was made accidentally.</li>
                                    <li>The service was not delivered due to a technical failure on our part.</li>
                                </ul>
                            </div>

                            {/* Section 3 */}
                            <div className="p-6 md:p-8 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 backdrop-blur-sm space-y-4">
                                <h3 className="text-xl md:text-2xl font-bold text-white flex items-center gap-3">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 text-sm font-bold">3</span>
                                    Refund Timeline
                                </h3>
                                <div className="flex items-start gap-3">
                                    <Clock className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                                    <p className="text-white/80">
                                        <strong className="text-emerald-300">Processing Timeline:</strong> Once a refund request is approved, the refund will be initiated and processed within <strong className="text-white">5 to 7 business days</strong>. The amount will be credited back to the original payment method used during the transaction.
                                    </p>
                                </div>
                            </div>

                            {/* Section 4 */}
                            <div className="p-6 md:p-8 rounded-2xl bg-amber-500/5 border border-amber-500/20 backdrop-blur-sm space-y-4">
                                <h3 className="text-xl md:text-2xl font-bold text-white flex items-center gap-3">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 text-sm font-bold">4</span>
                                    Dispute Fees
                                </h3>
                                <div className="flex items-start gap-3">
                                    <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                                    <p className="text-white/80">
                                        Any chargeback or dispute fees levied by payment gateways or banks during the refund process will be the responsibility of the customer.
                                    </p>
                                </div>
                            </div>

                            {/* Section 5 */}
                            <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-r from-blue-950/30 to-purple-950/30 border border-blue-500/20 backdrop-blur-sm space-y-4">
                                <h3 className="text-xl md:text-2xl font-bold text-white flex items-center gap-3">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/20 text-primary text-sm font-bold">5</span>
                                    Contact Support
                                </h3>
                                <p className="text-white/80">
                                    For any refund or cancellation queries, please contact our support team at:
                                </p>
                                <div className="pt-2 flex flex-col sm:flex-row gap-4 sm:gap-8">
                                    <a
                                        href="mailto:info@fivopay.com"
                                        className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
                                    >
                                        <Mail className="w-4 h-4" />
                                        info@fivopay.com
                                    </a>
                                    <a
                                        href="tel:+919096081885"
                                        className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
                                    >
                                        <Phone className="w-4 h-4" />
                                        +91 9096081885
                                    </a>
                                </div>
                            </div>
                        </article>
                    </Container>
                </section>
            </Layout>
        </>
    );
};

export default RefundPolicyPage;

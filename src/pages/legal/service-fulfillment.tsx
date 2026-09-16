import Container from "@/components/container";
import Layout from "@/components/layout";
import LegalHero from "@/components/sections/legal/hero";
import SEO from "@/components/seo";
import { appConfig } from "@/utils/app-config";
import { Clock, Mail, Server, ShieldCheck } from "lucide-react";

const ServiceFulfillmentPage = () => {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": `Service Fulfillment | ${appConfig.name}`,
        "description": `Service Fulfillment and Delivery Policy for ${appConfig.name} by SAIKHLEARN & SCHOLAR NEXUS PRIVATE LIMITED.`,
        "url": `${appConfig.url}/service-fulfillment`
    };

    return (
        <>
            <SEO
                title={`Service Fulfillment & Delivery | ${appConfig.name}`}
                description={`Service Fulfillment and Delivery Policy for ${appConfig.name} - Understand our digital SaaS delivery timelines and procedures.`}
                canonicalUrl={`/service-fulfillment`}
                ogType="website"
                jsonLd={jsonLd}
            />
            <Layout>
                <LegalHero
                    title="Service Fulfillment"
                    description="Last Updated: March 20, 2026"
                />
                <section className="py-12 md:py-16">
                    <Container className="flex flex-col justify-center items-center">
                        <article className="w-full max-w-[880px] space-y-10 text-white/80 leading-relaxed text-[16px] md:text-[17px]">
                            {/* Section 1 */}
                            <div className="p-6 md:p-8 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-sm space-y-4">
                                <h3 className="text-xl md:text-2xl font-bold text-white flex items-center gap-3">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/20 text-primary text-sm font-bold">1</span>
                                    Service Delivery
                                </h3>
                                <div className="flex items-start gap-3">
                                    <Server className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                    <p className="text-white/80">
                                        <strong className="text-white">SAIKHLEARN & SCHOLAR NEXUS PRIVATE LIMITED</strong> provides digital financial technology services and software-as-a-service (SaaS) platforms. As such, there are no physical goods to be shipped.
                                    </p>
                                </div>
                            </div>

                            {/* Section 2 */}
                            <div className="p-6 md:p-8 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 backdrop-blur-sm space-y-4">
                                <h3 className="text-xl md:text-2xl font-bold text-white flex items-center gap-3">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 text-sm font-bold">2</span>
                                    Delivery Timeline
                                </h3>
                                <div className="flex items-start gap-3">
                                    <Clock className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                                    <p className="text-white/80">
                                        <strong className="text-emerald-300">Timeline:</strong> Upon successful payment and account setup, service access is typically granted <strong className="text-white">immediately</strong> or within <strong className="text-white">24 to 48 hours</strong> for enterprise configurations that require manual setup.
                                    </p>
                                </div>
                            </div>

                            {/* Section 3 */}
                            <div className="p-6 md:p-8 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-sm space-y-4">
                                <h3 className="text-xl md:text-2xl font-bold text-white flex items-center gap-3">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/20 text-primary text-sm font-bold">3</span>
                                    Delivery Method
                                </h3>
                                <div className="flex items-start gap-3">
                                    <ShieldCheck className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                    <p className="text-white/80">
                                        Credentials and access links will be sent to the registered email address provided during the signup or onboarding process.
                                    </p>
                                </div>
                            </div>

                            {/* Section 4 */}
                            <div className="p-6 md:p-8 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-sm space-y-4">
                                <h3 className="text-xl md:text-2xl font-bold text-white flex items-center gap-3">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/20 text-primary text-sm font-bold">4</span>
                                    Delays
                                </h3>
                                <p className="text-white/80">
                                    In case of any technical delays in service fulfillment, customers will be notified via email within 24 hours of the expected delivery time.
                                </p>
                            </div>

                            {/* Section 5 */}
                            <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-r from-blue-950/30 to-purple-950/30 border border-blue-500/20 backdrop-blur-sm space-y-4">
                                <h3 className="text-xl md:text-2xl font-bold text-white flex items-center gap-3">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/20 text-primary text-sm font-bold">5</span>
                                    Contact Information
                                </h3>
                                <p className="text-white/80">
                                    If you haven&apos;t received access to your service within the specified timeline, please reach out to us at:
                                </p>
                                <div className="pt-2">
                                    <a
                                        href="mailto:info@fivopay.com"
                                        className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
                                    >
                                        <Mail className="w-4 h-4" />
                                        info@fivopay.com
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

export default ServiceFulfillmentPage;

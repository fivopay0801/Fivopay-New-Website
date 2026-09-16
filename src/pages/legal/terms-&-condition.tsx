import Container from "@/components/container";
import Layout from "@/components/layout";
import LegalHero from "@/components/sections/legal/hero";
import SEO from "@/components/seo";
import { appConfig } from "@/utils/app-config";

const TermsAndConditionPage = () => {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": `Terms & Conditions | ${appConfig.name}`,
        "description": `Terms and Conditions for ${appConfig.name} by SAIKHLEARN & SCHOLAR NEXUS PRIVATE LIMITED.`,
        "url": `${appConfig.url}/terms-and-conditions`
    };

    return (
        <>
            <SEO
                title={`Terms & Conditions | ${appConfig.name}`}
                description={`Terms and Conditions for ${appConfig.name} - Read the terms governing the use of our services.`}
                canonicalUrl={`/terms-and-conditions`}
                ogType="website"
                jsonLd={jsonLd}
            />
            <Layout>
                <LegalHero
                    title="Terms and Conditions"
                    description="Last Updated: March 20, 2026"
                />
                <section className="py-12 md:py-16">
                    <Container className="flex flex-col justify-center items-center">
                        <article className="w-full max-w-[880px] space-y-10 text-white/80 leading-relaxed text-[16px] md:text-[17px]">
                            {/* Section 1 */}
                            <div className="p-6 md:p-8 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-sm space-y-4">
                                <h3 className="text-xl md:text-2xl font-bold text-white flex items-center gap-3">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/20 text-primary text-sm font-bold">1</span>
                                    Acceptance of Terms
                                </h3>
                                <p className="text-white/80">
                                    By accessing and using the website of <strong className="text-white">FivoPay</strong>, a product of <strong className="text-white">SAIKHLEARN & SCHOLAR NEXUS PRIVATE LIMITED</strong> (&quot;the Company&quot;), you agree to be bound by these Terms and Conditions and all applicable laws and regulations.
                                </p>
                            </div>

                            {/* Section 2 */}
                            <div className="p-6 md:p-8 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-sm space-y-4">
                                <h3 className="text-xl md:text-2xl font-bold text-white flex items-center gap-3">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/20 text-primary text-sm font-bold">2</span>
                                    Use License
                                </h3>
                                <p className="text-white/80">
                                    Permission is granted to temporarily download one copy of the materials on the Company&apos;s website for personal, non-commercial transitory viewing only.
                                </p>
                            </div>

                            {/* Section 3 */}
                            <div className="p-6 md:p-8 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-sm space-y-4">
                                <h3 className="text-xl md:text-2xl font-bold text-white flex items-center gap-3">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/20 text-primary text-sm font-bold">3</span>
                                    User Obligations
                                </h3>
                                <p className="text-white/80">
                                    You agree not to use the website or services for any unlawful purpose. You are responsible for maintaining the confidentiality of any account details or passwords.
                                </p>
                            </div>

                            {/* Section 4 */}
                            <div className="p-6 md:p-8 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-sm space-y-4">
                                <h3 className="text-xl md:text-2xl font-bold text-white flex items-center gap-3">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/20 text-primary text-sm font-bold">4</span>
                                    Service Terms
                                </h3>
                                <p className="text-white/80">
                                    The Company provides financial technology solutions. Specific service levels and uptime guarantees are governed by separate Service Level Agreements (SLA) signed during onboarding.
                                </p>
                            </div>

                            {/* Section 5 */}
                            <div className="p-6 md:p-8 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-sm space-y-4">
                                <h3 className="text-xl md:text-2xl font-bold text-white flex items-center gap-3">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/20 text-primary text-sm font-bold">5</span>
                                    Intellectual Property
                                </h3>
                                <p className="text-white/80">
                                    All content, logos, and software on this website are the property of <strong className="text-white">SAIKHLEARN & SCHOLAR NEXUS PRIVATE LIMITED</strong> and are protected by applicable copyright and trademark law.
                                </p>
                            </div>

                            {/* Section 6 */}
                            <div className="p-6 md:p-8 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-sm space-y-4">
                                <h3 className="text-xl md:text-2xl font-bold text-white flex items-center gap-3">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/20 text-primary text-sm font-bold">6</span>
                                    Limitations
                                </h3>
                                <p className="text-white/80">
                                    In no event shall the Company or its partners be liable for any damages arising out of the use or inability to use the materials on the Company&apos;s website.
                                </p>
                            </div>

                            {/* Section 7 */}
                            <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-r from-blue-950/30 to-purple-950/30 border border-blue-500/20 backdrop-blur-sm space-y-4">
                                <h3 className="text-xl md:text-2xl font-bold text-white flex items-center gap-3">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/20 text-primary text-sm font-bold">7</span>
                                    Governing Law
                                </h3>
                                <p className="text-white/80">
                                    These terms and conditions are governed by and construed in accordance with the laws of <strong className="text-white">India</strong>, and you irrevocably submit to the exclusive jurisdiction of the courts in <strong className="text-white">Pune, Maharashtra</strong>.
                                </p>
                            </div>
                        </article>
                    </Container>
                </section>
            </Layout>
        </>
    );
};

export default TermsAndConditionPage;
import Container from "@/components/container";
import Layout from "@/components/layout";
import LegalHero from "@/components/sections/legal/hero";
import SEO from "@/components/seo";
import { appConfig } from "@/utils/app-config";
import { ShieldCheck, Mail, AlertCircle } from "lucide-react";

const PrivacyPolicyPage = () => {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": `Privacy Policy | ${appConfig.name}`,
        "description": `Privacy Policy for ${appConfig.name} by SAIKHLEARN & SCHOLAR NEXUS PRIVATE LIMITED.`,
        "url": `${appConfig.url}/privacy-policy`
    };

    return (
        <>
            <SEO
                title={`Privacy Policy | ${appConfig.name}`}
                description={`Privacy Policy for ${appConfig.name} - Learn how we collect, use, disclose, and safeguard your data.`}
                canonicalUrl={`/privacy-policy`}
                ogType="website"
                jsonLd={jsonLd}
            />
            <Layout>
                <LegalHero
                    title="Privacy Policy"
                    description="Last Updated: March 20, 2026"
                />
                <section className="py-12 md:py-16">
                    <Container className="flex flex-col justify-center items-center">
                        <article className="w-full max-w-[880px] space-y-10 text-white/80 leading-relaxed text-[16px] md:text-[17px]">
                            {/* Section 1 */}
                            <div className="p-6 md:p-8 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-sm space-y-4">
                                <h3 className="text-xl md:text-2xl font-bold text-white flex items-center gap-3">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/20 text-primary text-sm font-bold">1</span>
                                    Introduction
                                </h3>
                                <p className="text-white/80">
                                    <strong className="text-white">SAIKHLEARN & SCHOLAR NEXUS PRIVATE LIMITED</strong> (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
                                </p>
                            </div>

                            {/* Section 2 */}
                            <div className="p-6 md:p-8 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-sm space-y-4">
                                <h3 className="text-xl md:text-2xl font-bold text-white flex items-center gap-3">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/20 text-primary text-sm font-bold">2</span>
                                    Information We Collect
                                </h3>
                                <p className="text-white/80">
                                    We collect information that you provide directly to us, such as when you create an account, use our services, or contact us for support. This may include:
                                </p>
                                <ul className="list-disc list-inside space-y-2 pl-2 text-white/70">
                                    <li><strong className="text-white">Personal identification information:</strong> Name, email address, phone number, etc.</li>
                                    <li><strong className="text-white">Business information:</strong> Company name, registration details</li>
                                    <li><strong className="text-white">Financial information:</strong> Details necessary for transaction processing</li>
                                </ul>
                            </div>

                            {/* Section 3 */}
                            <div className="p-6 md:p-8 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-sm space-y-4">
                                <h3 className="text-xl md:text-2xl font-bold text-white flex items-center gap-3">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/20 text-primary text-sm font-bold">3</span>
                                    Use of Information
                                </h3>
                                <p className="text-white/80">
                                    We use the information we collect to provide, maintain, and improve our services, process transactions, and communicate with you.
                                </p>
                            </div>

                            {/* Section 4 */}
                            <div className="p-6 md:p-8 rounded-2xl bg-amber-500/5 border border-amber-500/20 backdrop-blur-sm space-y-4">
                                <h3 className="text-xl md:text-2xl font-bold text-white flex items-center gap-3">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 text-sm font-bold">4</span>
                                    Data Sharing with Payment Partners
                                </h3>
                                <div className="flex items-start gap-3 text-white/90">
                                    <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                                    <p className="text-white/80">
                                        <strong className="text-amber-300">Important:</strong> To process your payments securely, we share relevant transaction and personal data with our payment aggregation partner. Your data is handled in accordance with their security standards and our commitment to data protection.
                                    </p>
                                </div>
                            </div>

                            {/* Section 5 */}
                            <div className="p-6 md:p-8 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-sm space-y-4">
                                <h3 className="text-xl md:text-2xl font-bold text-white flex items-center gap-3">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/20 text-primary text-sm font-bold">5</span>
                                    Cookies
                                </h3>
                                <p className="text-white/80">
                                    We use cookies and similar tracking technologies to track the activity on our service and hold certain information to improve your experience.
                                </p>
                            </div>

                            {/* Section 6 */}
                            <div className="p-6 md:p-8 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-sm space-y-4">
                                <h3 className="text-xl md:text-2xl font-bold text-white flex items-center gap-3">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/20 text-primary text-sm font-bold">6</span>
                                    Security
                                </h3>
                                <div className="flex items-start gap-3">
                                    <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                                    <p className="text-white/80">
                                        We implement industry-standard security measures, including SSL encryption, to protect your data. However, no method of transmission over the Internet is 100% secure.
                                    </p>
                                </div>
                            </div>

                            {/* Section 7 */}
                            <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-r from-blue-950/30 to-purple-950/30 border border-blue-500/20 backdrop-blur-sm space-y-4">
                                <h3 className="text-xl md:text-2xl font-bold text-white flex items-center gap-3">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/20 text-primary text-sm font-bold">7</span>
                                    Contact Us
                                </h3>
                                <p className="text-white/80">
                                    If you have any questions about this Privacy Policy, please contact us at:
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

export default PrivacyPolicyPage;
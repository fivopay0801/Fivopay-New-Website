import Layout from "@/components/layout";
import PricingSection from "@/components/sections/home/pricing";
import FAQ from "@/components/sections/shared/faq";

const Pricing = () => {
    return (
        <Layout>
            <div className="pt-20">
                <PricingSection />
            </div>
            <FAQ />
        </Layout>
    );
};

export default Pricing;
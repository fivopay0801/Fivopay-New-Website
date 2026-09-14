import Container from "@/components/container";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";

const InnovationSection = () => {
    return (
        <section className="py-12 md:py-[60px]">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <AnimateOnView className="p-8 md:p-12 rounded-[32px] bg-gradient-to-br from-primary to-primary/80 flex flex-col justify-center">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 rounded-full border-2 border-white/20 flex items-center justify-center">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
                            </div>
                            <h2 className="text-3xl font-bold text-white">Our Mission</h2>
                        </div>
                        <p className="text-white/90 text-lg leading-relaxed">
                            To empower financial institutions with cutting-edge technology that simplifies complex banking operations, enhances customer experience, and drives sustainable growth across all types of financial services.
                        </p>
                    </AnimateOnView>
                    
                    <AnimateOnView delay={0.2} className="p-8 md:p-12 rounded-[32px] bg-gradient-to-br from-[#A855F7] to-[#D946EF] flex flex-col justify-center">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 rounded-full border-2 border-white/20 flex items-center justify-center">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
                            </div>
                            <h2 className="text-3xl font-bold text-white">Our Vision</h2>
                        </div>
                        <p className="text-white/90 text-lg leading-relaxed">
                            To become the leading financial technology partner for institutions worldwide, setting new standards in banking innovation while maintaining the highest levels of security, compliance, and customer satisfaction.
                        </p>
                    </AnimateOnView>
                </div>
            </Container>
        </section>
    );
};

export default InnovationSection;

import faqAnimation from "@/assets/lottie/processor.json";
import Container from "@/components/container";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";
import Lottie from "lottie-react";
import { Minus, Plus } from "lucide-react";
import { Link } from "react-router-dom";

const faqs = [
  {
    question: "What is FivoPay?",
    answer: "FivoPay is a SaaS platform from SAIKHLEARN & SCHOLAR NEXUS PRIVATE LIMITED that powers cooperative societies, employee credit societies, ethical banking and full core banking operations. Making Banking Easier.",
  },
  {
    question: "Does FivoPay hold or manage customer funds?",
    answer: "No. FivoPay is infrastructure only — we provide the specialised technical frameworks and cloud-native software. Fund movement is handled by licensed aggregators and partner institutions.",
  },
  {
    question: "Which products does FivoPay offer?",
    answer: "Cooperative Management, Ethical Banking, the Core Banking Platform, and Employee Credit Cooperative solutions for manufacturing, defence and government sectors.",
  },
  {
    question: "How secure is the platform?",
    answer: "We run AES-256 encryption, multi-factor authentication, AI-powered real-time fraud detection and Tier-4 data centres, with PCI DSS Level 1, ISO 27001, SOC 2 Type II and GDPR compliance.",
  }
];

const FAQ = () => {

  return (
    <section className="md:pt-20 xl:pt-32 pt-12 md:pb-20 xl:pb-32 pb-12">
      <Container>
        <AnimateOnView once blur>
          <div className="text-center mb-8 md:mb-24">
            <h2 className="h2">Frequently Asked Questions</h2>
          </div>
        </AnimateOnView>

        <div className="flex flex-col lg:flex-row gap-16 items-center justify-center">
          <AnimateOnView once className="max-w-[500px] w-full">
            <div className="relative aspect-square w-full rounded-3xl overflow-hidden bg-gradient-to-br from-card to-background border border-border/50 shadow-2xl">
              <Lottie
                animationData={faqAnimation}
                loop={true}
                className="w-full h-full object-cover"
              />
            </div>
          </AnimateOnView>

          <div className="max-w-[500px] w-full">
            <AnimateOnView once y={40}>
              <Accordion type="single" collapsible defaultValue="item-0" className="w-full">
                {faqs.slice(0, 4).map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-b border-border/40 px-0">
                    <AccordionTrigger className="text-left py-6 hover:no-underline [&>svg]:hidden">
                      <span className="h4 pr-8">{faq.question}</span>
                      <div className="relative flex items-center justify-center w-6 h-6 shrink-0">
                        <Minus className="absolute w-5 h-5 transition-transform duration-300 scale-0 rotate-90 group-data-[state=open]:scale-100 group-data-[state=open]:rotate-0" />
                        <Plus className="absolute w-5 h-5 transition-transform duration-300 scale-100 rotate-0 group-data-[state=open]:scale-0 group-data-[state=open]:rotate-90" />
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pb-6 text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </AnimateOnView>
          </div>
        </div>

        <AnimateOnView once y={20} delay={0.2} className="">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 max-w-xl mx-auto md:mt-20 mt-8 md:py-2 md:pr-2 py-4 pr-4 pl-8 md:rounded-full rounded-md bg-card/50 border border-border/50 backdrop-blur-sm">
            <p className="text-lg font-medium text-center sm:text-left">
              Can't find the answer you're looking for?
            </p>
            <Button asChild className="rounded-full px-6 bg-foreground text-background hover:bg-foreground/90 w-full sm:w-auto">
              <Link to="/contact">
                Ask Something
              </Link>
            </Button>
          </div>
        </AnimateOnView>
      </Container>
    </section>
  );
};

export default FAQ;

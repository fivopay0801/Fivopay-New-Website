import Layout from "@/components/layout";
import Hero from "@/components/sections/home/hero";
import { lazy, Suspense } from "react";

const GatewayPartners = lazy(() => import("@/components/sections/home/gateway-partners"));
const CoreModules = lazy(() => import("@/components/sections/home/core-modules"));
const KycPartners = lazy(() => import("@/components/sections/home/kyc-partners"));
const Confidence = lazy(() => import("@/components/sections/home/confidence"));
const Content = lazy(() => import("@/components/sections/home/content"));

const Testimonials = lazy(() => import("@/components/sections/home/testimonials"));
const FAQ = lazy(() => import("@/components/sections/shared/faq"));

const Home = () => {

  return (
    <Layout>
      <Hero />
      <Suspense fallback={null}>
        <GatewayPartners />
      </Suspense>
      <Suspense fallback={null}>
        <CoreModules />
      </Suspense>
      <Suspense fallback={null}>
        <KycPartners />
      </Suspense>
      <Suspense fallback={null}>
        <Confidence />
      </Suspense>
      <Suspense fallback={null}>
        <Content />
      </Suspense>

      <Suspense fallback={null}>
        <Testimonials />
      </Suspense>
      <Suspense fallback={null}>
        <FAQ />
      </Suspense>
    </Layout>
  );
};

export default Home;

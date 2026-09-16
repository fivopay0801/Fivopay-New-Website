import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthProvider } from "@/hooks/use-auth";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import About from "./pages/about";
import Contact from "./pages/contact";
import Feature from "./pages/feature";
import Home from "./pages/home";
import Pricing from "./pages/pricing";
import PrivacyPolicyPage from "./pages/legal/privacy-&-policy";
import TermsAndConditionPage from "./pages/legal/terms-&-condition";
import CookiePolicyPage from "./pages/legal/cookie-policy";
import RefundPolicyPage from "./pages/legal/refund-policy";
import ServiceFulfillmentPage from "./pages/legal/service-fulfillment";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <BrowserRouter>
          <AuthProvider>
            <Toaster />
            <Sonner />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product" element={<Feature />} />
              <Route path="/feature" element={<Navigate to="/product" replace />} />
              <Route path="/products" element={<Navigate to="/product" replace />} />
              <Route path="/about" element={<About />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
              <Route path="/legal/privacy-&-policy" element={<Navigate to="/privacy-policy" replace />} />
              <Route path="/terms-and-conditions" element={<TermsAndConditionPage />} />
              <Route path="/legal/terms-&-condition" element={<Navigate to="/terms-and-conditions" replace />} />
              <Route path="/refund-policy" element={<RefundPolicyPage />} />
              <Route path="/refund-and-cancellation" element={<Navigate to="/refund-policy" replace />} />
              <Route path="/legal/refund-policy" element={<Navigate to="/refund-policy" replace />} />
              <Route path="/service-fulfillment" element={<ServiceFulfillmentPage />} />
              <Route path="/shipping-and-delivery" element={<Navigate to="/service-fulfillment" replace />} />
              <Route path="/legal/service-fulfillment" element={<Navigate to="/service-fulfillment" replace />} />
              <Route path="/cookie-policy" element={<CookiePolicyPage />} />
              <Route path="/legal/cookie-policy" element={<Navigate to="/cookie-policy" replace />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </AuthProvider>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;

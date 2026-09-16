import Container from "@/components/container";
import { Newsletter } from "@/components/ui/newsletter";
import { Linkedin, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/Fivopay-dark.png";

const navLinks = [
  { title: "Home", href: "/" },
  { title: "Product", href: "/product" },
  { title: "About", href: "/about" },
  { title: "Pricing", href: "/pricing" },
  { title: "Contact", href: "/contact" },
];

const legalLinks = [
  { title: "Privacy Policy", href: "/privacy-policy" },
  { title: "Terms & Conditions", href: "/terms-and-conditions" },
  { title: "Refund & Cancellation", href: "/refund-policy" },
  { title: "Service Fulfillment", href: "/service-fulfillment" },
];

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/company/fivopay/", label: "LinkedIn" },
  { icon: MessageCircle, href: "https://wa.me/919096081885", label: "WhatsApp" },
];

const Footer = () => {
  return (
    <footer className="bg-[#0A0A0A] text-white pt-24 pb-12">
      <Container>
        <div className="flex flex-col lg:flex-row justify-between gap-12 mb-20">
          {/* Left Column: Newsletter & Logo */}
          <div className="space-y-12">
            <div className="space-y-6">
              <h3 className="text-[20px] font-medium leading-[140%] tracking-[-0.02em]">
                Subscribe Newsletter
              </h3>
              <Newsletter
                className="max-w-[420px]"
                placeholder="Enter Your Email"
              />
            </div>

            <div>
              <Link to="/" className="inline-block group">
                <img
                  src={logo}
                  alt="FivoPay"
                  className="h-12 md:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </Link>
            </div>
          </div>

          {/* Right Column: Links */}
          <div className="flex flex-col sm:flex-row gap-12 lg:gap-20">
            <div>
              <h4 className="font-semibold text-white mb-6">Navigation</h4>
              <ul className="space-y-4">
                {navLinks.map((link) => (
                  <li key={link.title}>
                    <Link to={link.href} className="text-white/70 hover:text-white transition-colors text-[16px]">
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-6">Legal</h4>
              <ul className="space-y-4">
                {legalLinks.map((link) => (
                  <li key={link.title}>
                    <Link to={link.href} className="text-white/70 hover:text-white transition-colors text-[16px]">
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-muted-foreground text-sm text-center md:text-left">
            © {new Date().getFullYear()} SAIKHLEARN & SCHOLAR NEXUS PRIVATE LIMITED. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span className="text-white/20">•</span>
            <Link to="/terms-and-conditions" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
            <span className="text-white/20">•</span>
            <Link to="/refund-policy" className="hover:text-white transition-colors">
              Refund & Cancellation
            </Link>
            <span className="text-white/20">•</span>
            <Link to="/service-fulfillment" className="hover:text-white transition-colors">
              Service Fulfillment
            </Link>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all text-white/70 hover:text-white"
                aria-label={social.label || "Social Link"}
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

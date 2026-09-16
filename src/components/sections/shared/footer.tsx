import Container from "@/components/container";
import { Newsletter } from "@/components/ui/newsletter";
import { Linkedin, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const navLinks = [
  { title: "Home", href: "/" },
  { title: "Product", href: "/product" },
  { title: "About", href: "/about" },
  { title: "Pricing", href: "/pricing" },
  { title: "Contact", href: "/contact" },
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
          <div className="space-y-16">
            <div className="space-y-6">
              <h3 className="text-[20px] font-medium leading-[140%] tracking-[-0.02em]">
                Subscribe Newsletter
              </h3>
              <Newsletter
                className="max-w-[420px]"
                placeholder="Enter Your Email"
              />
            </div>

            <Link to="/" className="inline-block">
              <span className="text-3xl md:text-4xl font-extrabold tracking-[0.2em] text-gradient drop-shadow-[0_0_15px_rgba(59,130,246,0.4)] transition-all hover:opacity-90">
                FIVOPAY
              </span>
            </Link>
          </div>

          {/* Right Column: Links */}
          <div className="flex flex-col sm:flex-row gap-12 lg:gap-16">
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
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-muted-foreground text-sm text-center md:text-left md:max-w-none max-w-xs">
            © {new Date().getFullYear()} SAIKHLEARN & SCHOLAR NEXUS PRIVATE LIMITED. All rights reserved.
          </p>

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

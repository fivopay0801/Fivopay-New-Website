import Container from "@/components/container";
import { Link } from "react-router-dom";
import logo from "@/assets/Fivopay.png";

const AuthNavbar = () => {
    return (
        <header className="w-full md:top-10 top-6 mx-auto absolute z-40">
            <Container className="flex justify-between items-center">
                <Link to="/" className="flex items-center space-x-2 w-fit text-foreground">
                    <img src={logo} alt="Fivopay" className="h-10 w-auto object-contain" />
                </Link>

                <nav className="hidden lg:flex items-center gap-8 text-white/70">
                    <Link to="/" className="hover:text-white transition-colors">Home</Link>
                    <Link to="/about" className="hover:text-white transition-colors">About</Link>
                    <Link to="/product" className="hover:text-white transition-colors">Products</Link>
                    <Link to="/pricing" className="hover:text-white transition-colors">Pricing</Link>
                    <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
                </nav>
            </Container>
        </header>
    );
};

export default AuthNavbar;

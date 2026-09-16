import Container from "@/components/container";
import EarlyAccessContent from "@/components/sections/early-access/early-access-content";
import { Link } from "react-router-dom";
import logo from "@/assets/Fivopay.png";

const EarlyAccess = () => {
    return (
        <main className='bg-black'>
            <header className="w-full md:top-10 top-6 mx-auto absolute z-40">
                <Container className="flex justify-center items-center">
                    <Link to="/" className="flex items-center">
                        <img src={logo} alt="Fivopay" className="h-10 w-auto object-contain" />
                    </Link>
                </Container>
            </header>
            <EarlyAccessContent />
        </main>
    );
};

export default EarlyAccess;
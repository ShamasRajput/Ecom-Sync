import About from "../components/About";
import Analytics from "../components/Analytics";
import Contact from "../components/Contact";
import Header from "../components/Header";
import Offer from "../components/Offer";
import ServicesSlider from "../components/ServicesSlider";
import Testimonial from "../components/Testimonial";
import Work from "../components/Work";

export default function Page() {
    return (
        <main>
            <Header />
            <ServicesSlider />
            <Analytics />
            <About />
            <Offer />
            <Work />
            <Testimonial />
            <Contact />
            <footer className="w-full max-w-[1062px] mx-auto flex items-center gap-1 md:flex-row md:justify-between px-[24px] justify-center flex-col text-center py-[32px]">
                <p className="font-semibold order-2 md:order-1 md:text-[14px] text-[12px]">Copyright © 2025 - EcomSync</p>
                <a href="mailto:contact@digitallyserved.com" className="md:order-2 order-1">
                    <p className="font-bold md:font-semibold  text-[16px]">ecomsync.help@gmail.com</p>
                </a>

            </footer>
        </main>
    )
}

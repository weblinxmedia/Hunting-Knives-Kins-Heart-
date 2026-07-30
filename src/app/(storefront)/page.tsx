import { Header } from "@/components/organisms/Header";
import { HeroCarousel } from "@/components/organisms/Hero";
import { SubHeader } from "@/components/organisms/SubHeader";

export default function HomePage() {
    return (
        <main>
            <SubHeader />

            <div className="relative">
                <Header />
                <HeroCarousel />
            </div>

            {/* Remaining home page sections go here. */}
        </main>
    );
}
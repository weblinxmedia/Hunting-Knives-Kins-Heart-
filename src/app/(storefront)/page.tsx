import { Header } from "@/components/organisms/Header";
import { HeroCarousel } from "@/components/organisms/Hero";
import { SubHeader } from "@/components/organisms/SubHeader";
import { FeaturesBar } from '@/components/organisms/FeaturesBar';
import { BestSellers } from "@/components/organisms/BestSellers";
import { BrandStory } from '@/components/organisms/BrandStory';
export default function HomePage() {
    return (
        <main>
            <SubHeader />

            <div className="relative">
                <Header />
                <HeroCarousel />
            </div>

            <FeaturesBar />
            <BestSellers />
            <BrandStory />
        </main>
    );
}
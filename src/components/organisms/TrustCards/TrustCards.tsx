import { ShieldCheck } from "lucide-react";
import { TrustCard } from "@/components/molecules/TrustCard";
import { ScrollReveal } from "@/components/atoms/ScrollReveal";

export function TrustCards() {
    return (
        <section className="bg-black/85 py-16 md:py-20">
            <div className="mx-auto max-w-[1300px] px-4 sm:px-5 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">

                    {/* Card 1: Icon */}
                    <ScrollReveal delay={0}>
                        <TrustCard
                            imageSrc="/images/shipping/quality.svg"
                            title="High Quality Materials"
                            description="Premium materials and sharp Kin's Heart knives with durability, timeless craftsmanship in every bit."
                        />
                    </ScrollReveal>

                    {/* Card 2: Image */}
                    <ScrollReveal delay={0.1}>
                        <TrustCard
                            imageSrc="/images/shipping/ship.svg" // Make sure to add a placeholder image here
                            title="Fast Shipping"
                            description="A fast level shipping helps your Kin's Heart knives arrive safely, quickly, and ready for use worldwide."
                        />
                    </ScrollReveal>

                    {/* Card 3: Image */}
                    <ScrollReveal delay={0.2}>
                        <TrustCard
                            imageSrc="/images/shipping/moneyback.svg" // Make sure to add a placeholder image here
                            title="30 Day Money Back Guarantee"
                            description="First service gives every customer peace of mind with our reliable 30 day money back guarantee."
                        />
                    </ScrollReveal>

                </div>
            </div>
        </section>
    );
}
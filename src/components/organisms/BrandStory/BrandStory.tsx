import { formatCurrency } from '@/lib/utils';
import { ScrollReveal } from '@/components/atoms/ScrollReveal';
export function BrandStory() {
    return (
        <section className="bg-black/90" aria-labelledby="brand-story-heading">
            <div className="mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-8 py-12 md:py-20">
                <div className="mx-auto text-start text-white">
                    <ScrollReveal>
                        <h2
                            id="brand-story-heading"
                            className="font-montserrat text-3xl md:text-4xl lg:text-4xl font-semibold tracking-tight"
                        >
                            Welcome to <span className="text-primary">Kin's Heart</span>
                        </h2>
                    </ScrollReveal>
                    <ScrollReveal>
                        <div className="mt-4 font-outfit space-y-2 font-extralight max-w-auto md:max-w-5xl md:text-md leading-relaxed text-white/95">

                            <p>
                                Where craftsmanship meets strength. We specialize in premium
                                <strong className="font-regular text-primary"> Damascus steel creations</strong>, including
                                knives, axes, swords, and custom pieces designed for those who demand quality and character.
                            </p>



                            <p>
                                Every item is carefully crafted using traditional forging techniques, delivering exceptional
                                durability, sharpness, and unique patterns in every blade. Whether for collection, outdoor
                                use, or <strong className="font-regular text-primary">everyday carry</strong>, our products are
                                made to perform and built to last.
                            </p>



                            <p>
                                Serving customers across the USA with reliable quality and distinctive design.
                            </p>

                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}
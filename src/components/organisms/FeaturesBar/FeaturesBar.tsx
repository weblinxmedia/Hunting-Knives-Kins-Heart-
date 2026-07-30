import { ShieldCheck, Mountain, Lock, Flag } from 'lucide-react';
import { FeatureCard } from './FeatureCard';
import { ScrollReveal } from '@/components/atoms/ScrollReveal';

const features = [
    {
        icon: <ShieldCheck size={40} strokeWidth={1.5} />,
        title: "Built to Last",
        description: "Premium materials and full tang strength."
    },
    {
        icon: <Mountain size={40} strokeWidth={1.5} />,
        title: "Field Ready",
        description: "Tested in harsh conditions, trusted by professionals."
    },
    {
        icon: <Lock size={40} strokeWidth={1.5} />,
        title: "Secure Grip",
        description: "Ergonomic design for control in any condition."
    },
    {
        icon: <Flag size={40} strokeWidth={1.5} />,
        title: "Made in the USA",
        description: "Proudly crafted with American precision."
    }
];

export function FeaturesBar() {
    return (
        <section className="bg-primary">
            <div className="mx-auto border-[15px] border-black max-w-[1600px] px-4 sm:px-6 lg:px-8 py-10 md:py-10">

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6">
                    {features.map((feature, index) => (
                        <ScrollReveal key={index} delay={index * 0.1}>
                            <FeatureCard
                                key={index}
                                icon={feature.icon}
                                title={feature.title}
                                description={feature.description}
                            />
                        </ScrollReveal>))}
                </div>
            </div>
        </section>
    );
}
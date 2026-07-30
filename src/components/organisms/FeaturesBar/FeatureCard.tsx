import type { ReactNode } from 'react';

interface FeatureCardProps {
    icon: ReactNode;
    title: string;
    description: string;
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
    return (
        <div className="flex items-start gap-3 text-black">
            {/* Icon Container */}
            <div className="flex-shrink-0 w-15 h-15 flex items-center justify-center">
                {icon}
            </div>

            {/* Text Container */}
            <div>
                <h3 className="font-jakarta text-base font-bold leading-tight">
                    {title}
                </h3>
                <p className="mt-1 font-montserrat text-sm text-black/80 leading-relaxed">
                    {description}
                </p>
            </div>
        </div>
    );
}
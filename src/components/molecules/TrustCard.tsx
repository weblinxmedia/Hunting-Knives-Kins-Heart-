import type { ReactNode } from "react";
import Image from "next/image";

interface TrustCardProps {
    icon?: ReactNode;
    imageSrc?: string;
    title: string;
    description: string;
}

export function TrustCard({ icon, imageSrc, title, description }: TrustCardProps) {
    return (
        <div className="flex flex-col items-center text-center bg-white/95 px-3 py-8">

            <div className="relative flex items-center justify-center mb-2">
                {icon && <div className="text-primary">{icon}</div>}
                {imageSrc && (
                    <Image
                        src={imageSrc}
                        alt={title}
                        width={60}
                        height={60}
                        className="object-contain text-white"
                    />
                )}
            </div>

            {/* Text Content */}
            <h3 className="font-jakarta text-lg font-semibold text-black mb-1">
                {title}
            </h3>
            <p className="font-outfit text-sm leading-tight font-regular text-black/80">
                {description}
            </p>
        </div>
    );
}
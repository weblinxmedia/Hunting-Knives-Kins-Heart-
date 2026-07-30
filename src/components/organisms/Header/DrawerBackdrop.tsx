"use client";

import { motion } from "framer-motion";

interface DrawerBackdropProps {
    label: string;
    onClose: () => void;
}

export function DrawerBackdrop({
    label,
    onClose,
}: DrawerBackdropProps) {
    return (
        <motion.button
            type="button"
            aria-label={label}
            onClick={onClose}
            className="fixed inset-0 z-[90] cursor-default bg-black/55"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
        />
    );
}
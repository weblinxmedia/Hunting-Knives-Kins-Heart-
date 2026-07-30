"use client";
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const SearchSidebar = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <div className="fixed inset-0 bg-black/40 z-50" onClick={onClose} />
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 shadow-2xl flex flex-col"
                    >
                        <div className="p-6 border-b flex justify-between items-center">
                            <input
                                type="text"
                                placeholder="Search products..."
                                className="w-full text-lg outline-none font-outfit"
                            />
                            <button onClick={onClose}><X /></button>
                        </div>

                        <div className="p-6 space-y-4 flex-1 overflow-auto">
                            {/* Dummy search results */}
                            {[1, 2, 3, 4].map(i => (
                                <a href={`/product/demo-${i}`} key={i} className="flex gap-4 hover:bg-gray-50 p-2 rounded">
                                    <div className="w-16 h-16 bg-gray-200 rounded" />
                                    <div>
                                        <p className="font-medium">Product Name {i}</p>
                                        <p className="text-sm text-gray-500">$129.00</p>
                                    </div>
                                </a>
                            ))}
                        </div>

                        <div className="p-6 border-t">
                            <button className="w-full py-3 bg-primary text-white font-semibold">
                                Search for more results
                            </button>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};
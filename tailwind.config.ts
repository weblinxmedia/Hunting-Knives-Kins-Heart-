import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: 'class',
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#FF5100',
                overlay: '#000000c2',
            },
            fontFamily: {
                jakarta: ['var(--font-jakarta)', 'sans-serif'],
                montserrat: ['var(--font-montserrat)', 'sans-serif'],
                outfit: ['var(--font-outfit)', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
export default config;
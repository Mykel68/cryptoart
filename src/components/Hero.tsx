import React from "react";
import { BackgroundLines } from "@/components/ui/background-lines";
import { ButtonsCard } from "./ui/tailwindcss-buttons";

export default function Hero() {
    const buttons = [
        {
            name: "Gradient",
            description: "Simple Gradient button with rounded corners",
            component: (
                <button className="px-8 py-2 rounded-full mt-10 bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200">
                    Mint Now
                </button>
            ),
        },
    ]
    return (
        <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
            <h2 className="bg-clip-text text-transparent text-balance text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
                The project that inspired the modern

                CryptoArt movement
            </h2>
            <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
                10,000 unique collectible characters with proof of ownership stored on the Ethereum blockchain.
            </p>
            {buttons.map((button, idx) => (
                <ButtonsCard key={idx}  >
                    {button.component}
                </ButtonsCard>
            ))}
        </BackgroundLines>
    );
}

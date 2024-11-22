import React from "react";
import { BackgroundLines } from "@/components/ui/background-lines";
import { ButtonsCard } from "./ui/tailwindcss-buttons";

export default function Hero() {
    const buttons = [
        {
            name: "Gradient",
            description: "Simple Gradient button with rounded corners",
            component: (
                <button className="px-8 py-2 rounded-full mt-6 sm:mt-8 md:mt-10 bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200">
                    Mint Now
                </button>
            ),
        },
    ];

    return (
        <BackgroundLines className="flex items-center h-[65vh] justify-center w-full flex-col px-4 sm:px-6 md:px-8">
            <h2 className="bg-clip-text text-transparent text-balance text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl sm:text-3xl md:text-4xl lg:text-7xl font-sans py-4 sm:py-6 md:py-8 lg:py-10 relative z-20 font-bold tracking-tight">
                The project that inspired the modern CryptoArt movement
            </h2>
            <p className="max-w-lg sm:max-w-xl lg:max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
                10,000 unique collectible characters with proof of ownership stored on the Ethereum blockchain.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-6 sm:mt-8 md:mt-10">
                {buttons.map((button, idx) => (
                    <ButtonsCard key={idx} className="z-10">
                        {button.component}
                    </ButtonsCard>
                ))}
            </div>
        </BackgroundLines>
    );
}

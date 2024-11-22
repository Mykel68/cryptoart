"use client"

import { Button } from "@/components/ui/button"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { RotateCw } from 'lucide-react'

interface FAQItem {
    question: string
    answer: string
}

export default function FAQ() {
    const faqItems: FAQItem[] = [
        {
            question: "Where are the images for the punks stored?",
            answer: "When originally released, the initial images of the punks were too large to store on the blockchain, so we took a hash of the composite image of all the punks and embedded it into the contract. You can verify that the punks being managed by the Ethereum contract are the True Official Genuine CryptoPunks™ by calculating an SHA256 hash of the composite image and comparing it against the hash embedded in the contract. Since then, due to some clever compression work and some help from friends of the punks we have managed to put the entire image and attribute data fully on chain. You can read more about the mechanisms and details of the process in the announcement blog post."
        },
        {
            question: "Are the punks an ERC-721 token?",
            answer: "No. The CryptoPunks pre-date the ERC-721 standard and are a custom contract, that means it doesn't comply with any standards. They are almost an ERC20 token. We support the methods that provide your balance so you can watch CryptoPunks as a token in your wallet and see how many you own. None of the other methods work as expected though because you're not transferring a simple balance, but need to reference which specific Punk you want to work with."
        },
        {
            question: "Where does the market data on this site come from?",
            answer: "The prices, bids and sales you see on this site are loaded from the CryptoPunks contract on the Ethereum blockchain. Because the CryptoPunks pre-date the ERC-721 standard (and in fact were a big influence on that standard) a custom market had to be built that could be transacted. We have no control over the contract governing this market, and have no access to any additional data beyond what the blockchain provides. In fact anyone else could write a web front end for it."
        },
        {
            question: "Do you charge any fees for transactions?",
            answer: "No. We charge no fees for Cryptopunks transacted through the built-in market beyond the ones charged by Ethereum (gas) the contract source and more technical details are available on Github."
        }
    ]

    return (
        <section className="py-20">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-2xl font-bold text-white mb-8">Details and FAQ</h2>

                <div className="grid gap-6">
                    {faqItems.map((item, index) => (
                        <div
                            key={index}
                            className="grid gap-6 md:grid-cols-[300px,1fr] items-start bg-zinc-900/50 rounded-lg p-6"
                        >
                            <h3 className="text-white font-medium">{item.question}</h3>
                            <p className="text-zinc-400 text-sm leading-relaxed">{item.answer}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

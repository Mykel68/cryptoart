"use client"

import { ChevronLeft, ChevronRight } from 'lucide-react'
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { PunkCard } from "@/components/PunkCard"
import Sale1 from "@/assets/Sale1.svg"
import Sale2 from "@/assets/Sales2.svg"
import Sale3 from "@/assets/Sale3.svg"
import Sale4 from "@/assets/Sale4.svg"


export function LargestSales() {
    const sales = [
        {
            id: "3100",
            price: BigInt("4200000000000000000"),
            imageUrl: Sale1,
        },
        {
            id: "7408",
            price: BigInt("4200000000000000000"),
            imageUrl: Sale2,
        },
        {
            id: "4156",
            price: BigInt("4200000000000000000"),
            imageUrl: Sale3,
        },
        // {
        //     id: "5217",
        //     price: BigInt("2250000000000000000"),
        //     imageUrl: Sale4,
        // }
    ]

    return (
        <section className="py-12">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">Largest Sales</h2>
                <Link href="#" className="text-sm border px-4 py-1 rounded-full text-zinc-400 hover:text-white">
                    View all
                </Link>
            </div>
            <div className="relative">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 ">
                    {sales.map((sale) => (
                        <PunkCard key={sale.id} {...sale} />
                    ))}
                </div>
                {/* <div className="absolute -left-4 top-1/2 -translate-y-1/2">
                    <Button size="icon" variant="ghost" className="h-8 w-8 text-white">
                        <ChevronLeft className="h-4 w-4" />
                        <span className="sr-only">Previous</span>
                    </Button>
                </div>
                <div className="absolute -right-4 top-1/2 -translate-y-1/2">
                    <Button size="icon" variant="ghost" className="h-8 w-8 text-white">
                        <ChevronRight className="h-4 w-4" />
                        <span className="sr-only">Next</span>
                    </Button>
                </div> */}
            </div>
        </section>
    )
}


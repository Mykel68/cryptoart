"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X } from 'lucide-react'

import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"

export function MobileNav() {
    const [open, setOpen] = React.useState(false)

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Button
                    variant="ghost"
                    className="mr-2 px-0 text-white hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
                >
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Toggle menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-zinc-950 border-zinc-800">
                <div className="px-2 py-6">
                    <Link
                        href="/"
                        className="flex items-center"
                        onClick={() => setOpen(false)}
                    >
                        <span className="sr-only">CryptoPunks</span>
                        <div className="h-6 w-6 bg-white" />
                    </Link>
                    <div className="mt-8 flex flex-col space-y-4">
                        <Link
                            href="/about"
                            className="text-sm font-medium text-zinc-400 transition-colors hover:text-white"
                            onClick={() => setOpen(false)}
                        >
                            About
                        </Link>
                        <Link
                            href="/collection"
                            className="text-sm font-medium text-zinc-400 transition-colors hover:text-white"
                            onClick={() => setOpen(false)}
                        >
                            Collection
                        </Link>
                        <Link
                            href="/faqs"
                            className="text-sm font-medium text-zinc-400 transition-colors hover:text-white"
                            onClick={() => setOpen(false)}
                        >
                            FAQs
                        </Link>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    )
}


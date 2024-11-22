import Link from "next/link"
import { Twitter, DiscIcon } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { MainNav } from "@/components/MainNav"
import { MobileNav } from "@/components/MobileNav"

export function SiteHeader() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60">
            <div className="container flex h-16 items-center">
                <MobileNav />
                <div className="flex w-full items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <Link href="/" className="flex items-center space-x-2">
                            <div className="h-6 w-6 bg-white" />
                            <span className="sr-only">CryptoPunks</span>
                        </Link>
                    </div>

                    <MainNav className="hidden md:flex" />

                    <div className="flex items-center space-x-4">
                        <div className="hidden md:flex items-center space-x-4">
                            <Link
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-zinc-400 hover:text-white transition-colors"
                            >
                                <Twitter className="h-5 w-5" />
                                <span className="sr-only">Twitter</span>
                            </Link>
                            <Link
                                href="https://discord.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-zinc-400 hover:text-white transition-colors"
                            >
                                <DiscIcon className="h-5 w-5" />
                                <span className="sr-only">Discord</span>
                            </Link>
                        </div>
                        <Button
                            variant="secondary"
                            className="bg-zinc-800 text-white hover:bg-zinc-700"
                        >
                            Connect wallet
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    )
}


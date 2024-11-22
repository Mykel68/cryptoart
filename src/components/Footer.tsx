"use client"
import Link from "next/link"
import { Twitter, DiscIcon as Discord } from 'lucide-react'

import { Separator } from "@/components/ui/separator"

export default function Footer() {
    return (
        <footer className="text-zinc-400">
            <div className="max-w-6xl mx-auto px-4">
                <div className="py-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        {/* Branding */}
                        <Link href="/" className="text-white hover:text-zinc-300 transition-colors">
                            CryptoPunks
                        </Link>

                        {/* Navigation */}
                        <nav className="flex items-center gap-6">
                            <Link
                                href="/"
                                className="text-sm hover:text-white transition-colors"
                            >
                                Buy a Punk
                            </Link>
                            <Link
                                href="/"
                                className="text-sm hover:text-white transition-colors"
                            >
                                View Full Collection
                            </Link>
                        </nav>

                        {/* Social Links */}
                        <div className="flex items-center gap-4">
                            <Link
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-white transition-colors"
                            >
                                <span className="sr-only">Twitter</span>
                                <Twitter className="h-5 w-5" />
                            </Link>
                            <Link
                                href="https://discord.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-white transition-colors"
                            >
                                <span className="sr-only">Discord</span>
                                <Discord className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>
                </div>

                <Separator className="bg-zinc-800" />

                {/* Bottom Footer */}
                <div className="py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
                    <div>
                        © 2021 CryptoPunks. All right reserved
                    </div>
                    <div className="flex items-center gap-6">
                        <Link
                            href="/"
                            className="hover:text-white transition-colors"
                        >
                            Privacy Policy
                        </Link>
                        <Link
                            href="/"
                            className="hover:text-white transition-colors"
                        >
                            Terms of Service
                        </Link>
                        <button
                            className="hover:text-white transition-colors"
                            onClick={() => {
                                // Add your cookie settings logic here
                                console.log('Open cookie settings')
                            }}
                        >
                            Cookie Settings
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    )
}

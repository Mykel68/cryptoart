"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

export function MainNav({
    className,
    ...props
}: React.HTMLAttributes<HTMLElement>) {
    return (
        <nav
            className={cn("flex items-center space-x-6", className)}
            {...props}
        >
            <Link
                href="/"
                className="text-sm font-medium text-zinc-400 transition-colors hover:text-white"
            >
                About
            </Link>
            <Link
                href="/"
                className="text-sm font-medium text-zinc-400 transition-colors hover:text-white"
            >
                Collection
            </Link>
            <Link
                href="/"
                className="text-sm font-medium text-zinc-400 transition-colors hover:text-white"
            >
                FAQs
            </Link>
        </nav>
    )
}


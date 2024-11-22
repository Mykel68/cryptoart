import { ArrowUpRight } from 'lucide-react'
import Link from "next/link"

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface FeaturedArticleProps {
    source: string
    title: string
    link: string
}

export function FeaturedArticleCard({ source, title, link }: FeaturedArticleProps) {
    return (
        <Card className="bg-zinc-900/50 border-zinc-800 text-white">
            <CardHeader>
                <CardTitle className="text-sm text-zinc-400">{source}</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-lg">{title}</p>
            </CardContent>
            <CardFooter>
                <Link
                    href={link}
                    className="inline-flex items-center text-sm hover:opacity-80 transition-opacity"
                >
                    Read article
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                </Link>
            </CardFooter>
        </Card>
    )
}


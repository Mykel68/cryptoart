import Image from "next/image"
import { formatEther } from "viem"

interface PunkCardProps {
    id: string
    price: bigint
    imageUrl: string
}

export function PunkCard({ id, price, imageUrl }: PunkCardProps) {
    return (
        <div className="group relative">
            <div className="aspect-square overflow-hidden rounded-lg ">
                <Image
                    src={imageUrl}
                    alt={`CryptoPunk #${id}`}
                    width={300}
                    height={300}
                    className="object-cover h-full p-5 w-full transition-transform group-hover:scale-105"
                />
            </div>
            <div className="">
                <div className="text-sm text-zinc-400">#{id}</div>
                <div className="font-medium text-white">
                    Ξ   {formatEther(price)}k
                </div>
            </div>
        </div>
    )
}


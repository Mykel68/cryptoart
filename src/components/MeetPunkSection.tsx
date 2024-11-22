import { Button } from "@/components/ui/button"

export function MeetPunksSection() {
    return (
        <section className="py-24 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-4xl font-bold text-white mb-4">Meet the Punks</h2>
                    </div>
                    <div>
                        <p className="text-zinc-400 mb-8">
                            The CryptoPunks are 24x24 pixel art images, generated algorithmically. Most are punky-looking guys and girls, but there are a few rare types mixed in: Apes, Zombies and even the odd Alien. Every punk has their own profile page that shows their attributes as well as their ownership/for-sale status.
                        </p>
                        <div className="flex gap-4">
                            <Button variant="default">Buy a Punk</Button>
                            <Button variant="outline">View full collection</Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


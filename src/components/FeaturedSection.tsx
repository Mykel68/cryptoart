import { FeaturedArticleCard } from "./FeaturedArticle"

export function FeaturedSection() {
    const articles = [
        {
            source: "Mashable",
            title: "This ethereum-based project could change how we think about digital art",
            link: "#"
        },
        {
            source: "Mashable",
            title: "CryptoKitties, CryptoPunks and the birth of a cottage industry",
            link: "#"
        },
        {
            source: "Mashable",
            title: "'Obviously, we had no idea it was going to get here,' say the guys who made the first NFT",
            link: "#"
        }
    ]

    return (
        <section className="py-24">
            <h2 className="text-center text-[1.6rem] leading-10 text-white mb-10">Featured in</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto ">
                {articles.map((article, index) => (
                    <FeaturedArticleCard key={index} {...article} />
                ))}
            </div>
        </section>
    )
}


interface LegendItem {
    background: string
    description: string
}

export function LegendSection() {
    const legendItems: LegendItem[] = [
        {
            background: "bg-blue-400",
            description: "Punks with a blue background are not for sale and have no current bids."
        },
        {
            background: "bg-red-400",
            description: "Punks with a red background are available for sale by their owner."
        },
        {
            background: "bg-purple-400",
            description: "Punks with a purple background have an active bid on them"
        }
    ]

    return (
        <div className="space-y-2 max-w-md">
            {legendItems.map((item, index) => (
                <div
                    key={index}
                    className={`${item.background} bg-opacity-20 backdrop-blur-sm p-4 rounded-lg text-sm text-white`}
                >
                    {item.description}
                </div>
            ))}
        </div>
    )
}


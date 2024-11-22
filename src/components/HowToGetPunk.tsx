import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Metamask from "@/assets/metamask.svg"
import Etherum from "@/assets/etherum.svg"

interface Step {
    number: number
    title: string
    description: string
    icon: React.ReactNode
    action?: {
        text: string
        href: string
    }
}

export function HowToGetPunk() {
    const steps: Step[] = [
        {
            number: 1,
            title: "Download and install MetaMask",
            description: "Download and install a Chrome browser plug-in called MetaMask. This will allow websites (that you authorise) access to your Ethereum account.",
            icon: (
                Metamask
            ),
            action: {
                text: "Download MetaMask",
                href: "https://metamask.io/download/"
            }
        },
        {
            number: 2,
            title: "Buy some Ethereum",
            description: "If you made a new account, buy some Ethereum. The MetaMask plugin has a button that will allow you to buy Ether from Coinbase.",
            icon: (
                Etherum
            )
        },
        {
            number: 3,
            title: "Start bidding, buying and selling",
            description: "Once you have the plugin installed, the website will recognise it and add buttons that allow you to bid on, buy and sell punks directly in the interface.",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    className="text-green-400"
                >
                    <path d="M12 2v20M2 12h20" />
                </svg>
            )
        }
    ]

    return (
        <Card className="bg-zinc-900 border-zinc-800">
            <CardHeader>
                <CardTitle className="text-2xl text-white">How do I get a punk?</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-[20px] top-0 h-full w-[2px] bg-zinc-800" />

                    {/* Steps */}
                    <div className="space-y-8">
                        {steps.map((step, index) => (
                            <div key={index} className="relative flex items-center  gap-6">
                                {/* Step number with icon */}
                                {/* <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-zinc-800 text-white">
                                    {step.icon ? step.icon : step.}
                                </div> */}
                                {
                                    step.icon && (
                                        <img src={step.icon.src} alt="step icon" className="h-10 p-2 w-10 aspect-square shrink-0 items-center justify-center rounded-full bg-zinc-800 text-white" />
                                    )
                                }

                                {/* Step content */}
                                <div className="flex flex-col">
                                    <h3 className="font-medium text-white">{step.title}</h3>
                                    <p className="text-sm text-zinc-400 mt-1">{step.description}</p>
                                    {step.action && (
                                        <Button
                                            variant="outline"
                                            className="mt-4 w-fit"
                                            asChild
                                        >
                                            <a href={step.action.href} target="_blank" rel="noopener noreferrer">
                                                {step.action.text}
                                            </a>
                                        </Button>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}


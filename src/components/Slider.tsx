import { cn } from "@/lib/utils"
import Marquee from "./Marquee"
import Marq1 from "@/assets/marq1.svg"
import Marq2 from "@/assets/marq2.svg"
import Marq3 from "@/assets/marq3.svg"
import Marq4 from "@/assets/marq4.svg"
import Marq5 from "@/assets/marq5.svg"
import Marq6 from "@/assets/marq6.svg"
import Marq7 from "@/assets/marq7.svg"
import Marq8 from "@/assets/marq8.svg"

export default function Slider() {
    const avatars = [
        Marq1,
        Marq2,
        Marq3,
        Marq4,
        Marq5,
        Marq6,
        Marq7,
        Marq8,
    ]

    return (
        <div className="w-full py-12 bg-[#101111]">
            <Marquee className="py-6" pauseOnHover>
                {avatars.map((avatar, i) => (
                    <img
                        key={i}
                        className={cn(
                            "flex h-40 w-40 items-center justify-center",
                            avatar
                        )}
                        src={avatar.src}
                        alt="html"
                    />
                ))}
            </Marquee>
        </div>
    )
}


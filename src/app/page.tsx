import TailwindcssButtons from "@/components/Buttons";
import { FeaturedSection } from "@/components/FeaturedSection";
import Hero from "@/components/Hero";
import { LargestSales } from "@/components/LargestSales";
import { LegendSection } from "@/components/LegendSection";
import { MeetPunksSection } from "@/components/MeetPunkSection";
import Slider from "@/components/Slider";
import Image from "next/image";
import Musk from "@/assets/Musk.svg";
import { RecentTransaction } from "@/components/RecentTransaction";

export default function Home() {
  return (
    // <>
    //   <Hero />
    //   <Slider />
    //   <FeaturedSection />
    //   <MeetPunksSection />
    // </>

    <main className="min-h-screen ">
      <div className="max-w-6xl mx-auto px-4">
        <Hero />
        <Slider />
        <FeaturedSection />
        <MeetPunksSection />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 py-12">
          <LegendSection />
          <div className="aspect-square max-w-md">
            <img
              src={Musk.src}
              alt="Featured CryptoPunk"
              className="rounded-lg"
            />
          </div>
        </div>
        <LargestSales />
        <RecentTransaction />
      </div>
    </main>
  );
}

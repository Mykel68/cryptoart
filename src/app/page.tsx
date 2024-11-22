import TailwindcssButtons from "@/components/Buttons";
import { FeaturedSection } from "@/components/FeaturedSection";
import Hero from "@/components/Hero";
import { MeetPunksSection } from "@/components/MeetPunkSection";
import Slider from "@/components/Slider";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <Slider />
      <FeaturedSection />
      <MeetPunksSection />
    </>
  );
}

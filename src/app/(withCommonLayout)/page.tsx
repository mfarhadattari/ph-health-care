import HeroSection from "@/components/ui/home/HeroSection";
import HowItSection from "@/components/ui/home/HowItSection";
import SpecialtiesSection from "@/components/ui/home/SpecialtiesSection";
import TopRatedDoctor from "@/components/ui/home/TopRatedDoctor";
import WhyUsSection from "@/components/ui/home/WhyUsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <SpecialtiesSection />
      <TopRatedDoctor />
      <WhyUsSection />
      <HowItSection />
    </>
  );
}

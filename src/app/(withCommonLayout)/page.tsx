import HeroSection from "@/components/ui/home/HeroSection/HeroSection";
import HowItSection from "@/components/ui/home/HowItSection/HowItSection";
import SpecialtiesSection from "@/components/ui/home/SpecialtiesSection/SpecialtiesSection";
import StatsSection from "@/components/ui/home/StatsSection/StatsSection";
import TopRatedDoctor from "@/components/ui/home/TopRatedDoctor/TopRatedDoctor";
import WhyUsSection from "@/components/ui/home/WhyUsSection/WhyUsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <SpecialtiesSection />
      <TopRatedDoctor />
      <WhyUsSection />
      <HowItSection />
      <StatsSection />
    </>
  );
}

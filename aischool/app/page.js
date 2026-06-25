import IntroSection from "./components/intro";
import Overview from "./components/overview";
import Seperator from "./components/seperator";
import SchoolSection from "./components/SchoolSection";
import ComparisonSection from "./components/comparisonSecition";
import FazitSection from "./components/fazitSection";

export default function Home() {
  return (
    <main className="min-h-screen w-full text-white-400 bg-gradient-to-b from-[#3e5ea8] to-[#0241a7]">
      
        <IntroSection />
        <Seperator />
        <Overview />
        <Seperator/>
        <SchoolSection />
        <Seperator />
        <ComparisonSection />
        <Seperator/>
        <FazitSection />
    </main>
  );
}

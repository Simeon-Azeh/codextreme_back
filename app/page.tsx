import CardFlipSection from "./components/Cardflip";
import EventSection from "./components/Events";
import Header from "./components/Header"; // Adjust the import path if needed
import HeroSection from "./components/Hero";
import InfoSection from "./components/InfoSections";

export default function Home() {
  return (
    <div className="">
      {/* Sticky Header */}
      <div className="sticky top-0 z-50">
        <Header />
      </div>

      {/* Hero Section */}
      <div className="w-full lg:w-[90%] mx-auto px-4 min-h-[70vh] lg:min-h-screen"> {/* Changed from fixed height to min-h-screen */}
        <HeroSection />
      </div>

      {/* Card Flip Section */}
      <div className="w-full mx-auto  my-10"> {/* Added margin to avoid overlapping */}
        <CardFlipSection />
      </div>

      {/* Info Section */}
      <div className="w-full  mx-auto ">
        <InfoSection />
      </div>
      <div>
        <EventSection />
      </div>
    </div>
  );
}

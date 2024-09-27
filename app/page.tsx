
import CardFlipSection from "./components/Cardflip";
import Header from "./components/Header"; // Adjust the import path if needed


import HeroSection from "./components/Hero";

export default function Home() {
  return (
    <div className=" ">
      <div className="sticky top-0 z-50">
      <Header />
      </div>
     <div className="w-full lg:w-[90%] mx-auto p-4 h-screen">
    <HeroSection />
     </div>
     <div>
      <CardFlipSection />
     </div>
     
    </div>
  );
}

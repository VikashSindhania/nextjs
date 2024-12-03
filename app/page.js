import Header from "../components/Header";
import MainContent from "@/components/MainContent";
import Footer from "@/components/Footer";
import ImageSection from "@/components/ImageSection";

export default async function LandingPage() {
  return (
    <div>
      <Header />
      <ImageSection />
      {/* Lazy Loading Concept through next/image concept */}
      <MainContent />
      <Footer />
    </div>
  );
}

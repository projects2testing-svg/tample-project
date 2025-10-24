import Image from "next/image";
import HeaderSlider from "./components/HeaderSlider";
import FAQ from "./components/FAQ";
import Administration from "./components/Administration";
import ImageGallery from "./components/ImageGallery";
import VideoGallery from "./components/VideoGallery";
import RecommendedTemplates from "./components/RecommendedTemplates";
import BorbhetiSection from "./components/home/About";
import ProgramSchedule from "./components/home/ProgramSchedule";

export default function Home() {
  return (
    <>
     <HeaderSlider />
     <BorbhetiSection />
     <ProgramSchedule />
     <RecommendedTemplates />
     <ImageGallery />
     <Administration />
     <VideoGallery />
     <FAQ />
    </>
  );
}

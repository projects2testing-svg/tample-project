import Image from "next/image";
import HeaderSlider from "./components/HeaderSlider";
import Section1 from "./components/home/Section1";
import FAQ from "./components/FAQ";
import Administration from "./components/Administration";
import ImageGallery from "./components/ImageGallery";
import VideoGallery from "./components/VideoGallery";
import RecommendedTemplates from "./components/RecommendedTemplates";

export default function Home() {
  return (
    <>
     <HeaderSlider />
     <Section1 />
     <RecommendedTemplates />
     <ImageGallery />
     <Administration />
     <VideoGallery />
     <FAQ />
    </>
  );
}

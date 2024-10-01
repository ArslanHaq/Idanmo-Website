import AboutSectionOne from "@/components/Finance/AboutSectionOne";
import AboutSectionTwo from "@/components/Finance/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Expertise from "@/components/Expertise";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Idanimo Tech",
  description: "This is Home for Idanimo",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Expertise />
      <Features />

      <Partners />
      {/* <Video /> */}
      {/* <Brands /> */}
      {/* <AboutSectionOne /> */}
      {/* <AboutSectionTwo /> */}
      {/* <Testimonials /> */}
      {/* <Pricing /> */}
      {/* <Blog /> */}
      <Contact />
    </>
  );
}

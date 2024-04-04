import React from "react";
// Sections
import TopNavbar from "../components/Nav/TopNavbar";
import Header from "../components/Sections/Header";
import Services from "../components/Sections/Services";
import Projects from "../components/Sections/Projects";
import Blog from "../components/Sections/Blog";
import Pricing from "../components/Sections/Pricing";
import Contact from "../components/Sections/Contact";
import Footer from "../components/Sections/Footer"
import SocialLink from "../components/Nav/SocialLink";
import BannerClouser from "../components/Sections/Home/banner/BannerClouser";
import Explore from "../components/Sections/Home/service/ExploreTour";

export default function Landing() {
  return (
    <>
    <SocialLink />
      <TopNavbar />
      <BannerClouser/>
      {/* <Header /> */}

      {/* <Explore/> */}
      <Projects />
      <Services />
      <Blog />
      {/* <Pricing /> */}
      <Contact />
      <Footer />
    </>
  );
}



import { Fragment } from "react";
import Header from "../Header/Header";
import HeroSection from "../HeroSection/HeroSection";
import About from "../About/About";
import Services from "../Services/Services";
import Experience from "../Experience/Experience";
import Portfolio from "../Portfolio/Portfolio";
import Testimonial from "../Testimonial/Testimonial";

const Layout = () => {
  return (
    <Fragment>
      <Header />
      <HeroSection />
      <About />
      <Services />
      <Experience />
      <Portfolio />
      <Testimonial />
    </Fragment>
  )
}

export default Layout;
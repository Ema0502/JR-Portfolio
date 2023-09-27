import { Fragment } from "react";
import Header from "../Header/Header";
import HeroSection from "../HeroSection/HeroSection";
import About from "../About/About";
import Services from "../Services/Services";

const Layout = () => {
  return (
    <Fragment>
      <Header />
      <HeroSection />
      <About />
      <Services />
    </Fragment>
  )
}

export default Layout;
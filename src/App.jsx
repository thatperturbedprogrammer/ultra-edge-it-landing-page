import "./App.css";

import CallToAction from "./components/CallToAction";
import Address from "./components/Address";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Info from "./components/Info";
import TestimonySlider from "./components/TestimonySlider";
import Hero from "./components/Hero";

import handbulblogo from "./assets/handbulblogo.png";
import priceicon from "./assets/price-icon.png";
export default function App() {
  return (
    <>
      <Header />
      <CallToAction
        callToActionText="Transform Your Business with Cutting-Edge IT Solutions"
        callToActionSubText="  Whether you need a stunning website, seamless software integration, or a scalable digital strategy,  
        we’ve got you covered. Let’s build the future of your business—together."
      />

      <img src={handbulblogo} alt="hand-logo" className="centered-image" />
      <Hero heroHeading="About Ultra Edge" heroSubHeading="Who we are?" />

      <Hero
        heroText="At UltraEdge IT Solutions, we transform ideas into reality with innovative and high-quality digital solutions. Our expert team blends creativity and technology to deliver cutting-edge web, mobile, and UI/UX Designing services.
With a passion for excellence, we craft seamless, scalable, and future-ready solutions to drive your business forward."
      />

      <img src={priceicon} alt="hand-logo" className="centered-image" />

      <h2 className="centered-text">Why choose us?</h2>

      <Info
        infoHeading="Custom Development for Your Business"
        infoText="We deliver tailor-made websites and apps designed to meet your unique business needs and objectives."
      />
      <Info
        infoHeading="Optimized for Performance & Speed"
        infoText="Our solutions are built for lightning-fast load times, seamless navigation, and optimal performance across all devices."
      />
      <Info
        infoHeading="Ongoing Support & Maintenance"
        infoText="Our team provides continuous updates, bug fixes, and performance monitoring to keep your platforms running smoothly."
      />

      {/* <img src="" alt="people-img" /> */}
      <TestimonySlider />

      <h2 className="centered-text">Contact:</h2>
      <Address
        addressHeader="Address:"
        addressText="Shop No. 3, Jay Bharat House, Opp. Highland Park, SV Road, Near DCB Bank, Dahisar East, Mumbai"
      />
      <Address
        addressHeader="Email:"
        addressText="ultraedgesolutions1@gmail.com"
      />
      <Address addressHeader="Phone:" addressText="+919619818483" />

      <Footer footerText="Copyright 2025 Ultra Edge All Rights Reserved" />
    </>
  );
}

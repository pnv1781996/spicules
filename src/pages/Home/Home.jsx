import React from "react";
import "./Home.scss";
import { bannerImage } from "../../assets";
import { details, formData } from "../../utils/styleConstant/heroSectionData";
import BoxingEduSection from "../../components/sections/boxingEduSection/BoxingEduSection";
import HeroSection from "../../components/sections/heroSection/HeroSection";
import TryOutForFree from "../../components/sections/tryOutForFree/TryOutForFree";
import Guarantee from "../../components/sections/guaranteeSection/Guarantee";
import Company from "../../components/sections/companySection/Company";
import Service from "../../components/sections/serviceSection/Service";
import System from "../../components/sections/systemSection/System";

export default function Home() {
  return (
    <div className="container">
      <HeroSection
        title={details.title}
        subtitle={details.subtitle}
        bannerImg={bannerImage}
        formData={formData}
      />
      <BoxingEduSection />
      <TryOutForFree />
      <Service />
      <System />
      <Guarantee />
      <Company />
    </div>
  );
}

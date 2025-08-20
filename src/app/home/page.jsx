// src/pages/Home.jsx
import Supercharges from "../../components/Supercharges";
import Limitless from "../../components/limitless";
import BeingEnglandsTop from "../../components/being_englands_top";
import ScaleAcross from "../../components/scale_across";
import CaseStudy from "../../components/case_study";
import LatestPost from "../../components/latest_post";
import CustomerTestimonial from "../../components/customer_testimonial";

export default function Home() {
  return (
    <>
      <div className="flex items-center justify-center">
        <Supercharges />
      </div>
      <div className="flex items-center justify-center">
        <Limitless />
      </div>
      <div>
        <BeingEnglandsTop />
      </div>
      <div>
        <ScaleAcross />
      </div>
      <div>
        <CaseStudy />
      </div>
      <div>
        <LatestPost />
      </div>
      <div >
        <CustomerTestimonial />
      </div>
    </>
  );
}

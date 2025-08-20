// import Default from "../../components/default"
import GrowFasterWithKerala from "../../components/grow_faster";
import OurDigitalMarketingService from "../../components/our_digital_marketing_serv";
import OurProcessDigMarkt from "../../components/our_process_dig_mark";
import WhyWeAreBestInDigtMarkt from "../../components/why_we_are_best_in_digt_markt";
import CaseStudySeo from "../../components/case_study_soft_dev"
import LatestPost from "../../components/latest_post";
import CustomerTestimooial from "../../components/customer_testimonial";
import FrequentlyAskQuestion from "../../components/frequently_ask_question";
import StillHaveQuestions from "../../components/still_have_questions";

export default function SEO() {
  return (
    <>
    <div>
      <GrowFasterWithKerala />
    </div>
    <div>
      <OurDigitalMarketingService />
    </div>
    <div>
      <OurProcessDigMarkt />
    </div>
    <div>
      <WhyWeAreBestInDigtMarkt />
    </div>
    <div>
      <CaseStudySeo />
    </div>
    <div>
      <LatestPost />
    </div>
    <div >
      <CustomerTestimooial />
    </div>
    <div >
      <FrequentlyAskQuestion />
    </div>
    <div >
      <StillHaveQuestions />
    </div>
    </>
    
  );
};
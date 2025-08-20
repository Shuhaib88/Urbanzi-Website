import BuildYourEdge from "../../components/build_your_edge";
import OurCostomSoftDev from "../../components/our_custom_soft_dev";
import OurProcessSoftDev from "../../components/our_process_soft_dev";
import WhyWeAreBestInSoftDev from "../../components/why_we_are_best_in_soft_dev";
import CaseStudySoftDev from "../../components/case_study_soft_dev";
import LatestPost from "../../components/latest_post";
import CustomerTestimooial from "../../components/customer_testimonial";
import FrequentlyAskQuestion from "../../components/frequently_ask_question";
import StillHaveQuestions from "../../components/still_have_questions";

export default function SoftWareDev() {
  return (
    <>
    <div>
      <BuildYourEdge />
    </div>
    <div>
      <OurCostomSoftDev />
    </div>
    <div>
      <OurProcessSoftDev />
    </div>
    <div>
      <WhyWeAreBestInSoftDev />
    </div>
    <div>
      <CaseStudySoftDev />
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
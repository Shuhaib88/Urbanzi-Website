// import Default from "../../components/default"
import UnlockYourGrowth from "../../components/unlock_growth";
import OurSeoService from "../../components/our_seo_service";
import OurProcessSeo from "../../components/our_process_seo";
import WhyWeAreBestInSeo from "../../components/why_we_are_best_in_seo";
import SimpleEasyPricingSeo from "../../components/simple_easy_pricing_seo";
import CaseStudySeo from "../../components/case_study_soft_dev"
import LatestPost from "../../components/latest_post";
import CustomerTestimooial from "../../components/customer_testimonial";
import FrequentlyAskQuestion from "../../components/frequently_ask_question";
import StillHaveQuestions from "../../components/still_have_questions";

export default function SEO() {
  return (
    <>
    <div>
      <UnlockYourGrowth />
    </div>
    <div>
      <OurSeoService />
    </div>
    <div>
      <OurProcessSeo />
    </div>
    <div>
      <WhyWeAreBestInSeo />
    </div>
    <div>
      <SimpleEasyPricingSeo />
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
import TurnYourApp from "../../components/turn_your_app";
import MobileAppDevServices from "../../components/our_mob_app_dev_serv";
import OurProcessMobDev from "../../components/our_process_mob_dev";
import WhyWeAreBestInMobApp from "../../components/why_we_are_best_in_mob_app";
import ProjectAndCaseStudy from "../../components/Project_and_case_study"
import LatestPost from "../../components/latest_post";
import CustomerTestimooial from "../../components/customer_testimonial";
import FrequentlyAskQuestion from "../../components/frequently_ask_question";
import StillHaveQuestions from "../../components/still_have_questions";

export default function Home() {
  return (
    <>
    <div>
      <TurnYourApp />
    </div>
    <div>
      <MobileAppDevServices />
    </div>
    <div>
      <OurProcessMobDev />
    </div>
    <div>
      <WhyWeAreBestInMobApp />
    </div>
    <div>
      <ProjectAndCaseStudy />
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
// src\pages\Home.jsx
import BringYourIdeas from "../../components/bring_your_ideas"
import OurWebDevServices from "../../components/our_webdev_services"
import OurExpertise from "../../components/our_expertise"
import OurProcess from "../../components/our_process"
import WhyWeAreBest from "../../components/why_we_are_best"
import ProjectAndCaseStudy from "../../components/Project_and_case_study"
import LatestPost from "../../components/latest_post";
import CustomerTestimooial from "../../components/customer_testimonial";
import FrequentlyAskQuestion from "../../components/frequently_ask_question";
import StillHaveQuestions from "../../components/still_have_questions";



export default function Home() {
  return (
    <>
    <div>
      <BringYourIdeas />
    </div>
    <div>
      <OurWebDevServices />
    </div>
    <div>
      <OurExpertise />
    </div>
    <div>
      <OurProcess />
    </div>
    <div>
      <WhyWeAreBest />
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
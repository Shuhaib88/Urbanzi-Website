// src\pages\Home.jsx
import JourneyTogether from "../../components/journey_together";
import OurMission from "../../components/our_mission";
import Team from "../../components/team";
import OurValues from "../../components/our_values";
import GetReadyToGetStart from "../../components/ready_to_get_start";

export default function About() {
  return (
    <>
    <div>
      <JourneyTogether />
    </div>
    <div>
      <OurMission />
    </div>
    <div>
      <Team />
    </div>
    <div>
      <OurValues />
    </div>
    <div>
      <GetReadyToGetStart />
    </div>
    </>
  );
};
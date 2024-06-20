import Image from "next/image";

//logos for cards
import Map from "./images/map.png";
import Lightbulb from "./images/lightbulb-blue.png";
import Policy from "./images/policy-blue.png";
import Read from "./images/read-blue.png";
import Suitcase from "./images/suitcase-blue.png";

//card components
import CardRight from "./components/CardRight";


export default function Home() {
  return (
    <main>
      <div className="flex md:flex-row max-sm:flex-col justify-center   max-sm:-z-50 ">
        <div className="flex flex-col justif-center w-1/2 mx-10 tracking-wider align-center text-6xl p-5 max-sm:z-1">
          <span>Some call it</span>
          <span className="font-black text-green text-7xl">Europe</span>
          <span>We call it</span>
          <span className="text-yellow-400 font-black text-7xl">Home</span>
          <a href="/en/join" className="button bg-blue max-sm:text-xl text-4xl">Join us!</a>
        </div>
        <div className="flex justify-left w-full h-full max-sm:overflow-hidden max-sm:absolute max-sm:insety-50 max-sm:-z-10">
          <Image 
            src={Map}
            alt="map of Europe"
          />
        </div>
      </div>
      <div className="inline-flex justify-center text-center my-10 mx-20 text-xl">
        <article>We are AEGEE-Paris, a student organization with an international focus. We are thematic events and informal get-togethers to meet, have a drink and make friends. Just have a look at our Event-page to find out more. Additionally, we are part of AEGEE-Europe, one of the biggest European student organization in existence! Therefore, we can offer you many opportunities, which you can read about below.</article>
      </div>
      <CardRight img={Suitcase} alt="Travel icon" heading="Intercultural Exchange" cat="Travel Europe!" text="AEGEE creates a space for members of different backgrounds to meet in order to foster mutual understanding. AEGEE supports mobility and encourages young people to cross borders and make new friends, to break stereotypes and strengthen tolerance, respect and solidarity." link="https://www.aegee.org/summeruniversity/"  color="green"/>
      <CardRight img={Policy} alt="Advocacy icon" heading="Advocacy and Policy" cat="State your Opinion!" text="AEGEE gathers the opinions of European students and represents them towards stakeholders through campaigns, lobby actions, conferences and membership in bigger advocacy platforms. AEGEE informs students and young people about the impact which European policies have in their lives and opportunities they offer." link="https://www.aegee.org/focusareas/"  color="yellow-400"/>

      <CardRight img={Lightbulb} alt="Lightbulb icon" cat="Make an impact!" heading="Thematic Projects" text="Thematic projects, both local and international, are initiatives developed by members of AEGEE. They deal with current challenges in the European society, create awareness among young people and propose solutions from a students’ point of view." link="https://www.aegee.org/projects/"  color="blue"/>
    </main>
  );
}

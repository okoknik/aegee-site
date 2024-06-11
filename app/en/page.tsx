import Image from "next/image";
import Map from "../images/map.png";
import Lightbulb from "../images/lightbulb-blue.png";
import clsx from 'clsx';
import CardRight from "../components/CardRight";
import CardLeft from "../components/CardLeft";


export default function Home() {
  return (
    <main>
      <div class="flex md:flex-row max-sm:flex-col justify-center   max-sm:-z-50 ">
        <div class="flex flex-col justif-center w-1/2 mx-10 tracking-wider align-center text-6xl p-5 max-sm:z-1">
          <span>Some call it</span>
          <span class="font-black text-green text-7xl">Europe</span>
          <span>We call it</span>
          <span class="text-yellow-400 font-black text-7xl">Home</span>
          <a href="/en/join" class="button max-sm:text-xl text-4xl">Join us!</a>
        </div>
        <div class="flex justify-left w-full h-full max-sm:overflow-hidden max-sm:absolute max-sm:insety-50 max-sm:-z-10">
          <Image 
            src={Map}
            alt="map of Europe"
          />
        </div>
      </div>
      <div class="inline-flex justify-center text-center my-10 mx-20 text-xl">
        <article>We are AEGEE-Paris, a student organization with an international focus. We are organizing parties, thematic events and informal get-togethers to meet, drink and make friends. Just have a look at our Event-page to find out more. Additionally, we are part of AEGEE-Europe, one of the biggest European student organization in existence! Therefore, we can offer you many opportunities, which you can read about below.</article>
      </div>

    <CardRight img={Lightbulb} alt="Lightbulb"/>
    <CardLeft img={Lightbulb} alt="Lightbulb"/>
    <CardRight img={Lightbulb}/>
    <CardRight img={Lightbulb}/>
    </main>
  );
}

import Image from "next/image";
import Map from "../images/map.png";
import Lightbulb from "../images/lightbulb-blue.png";




export default function Home() {
  return (
    <main>
      <div class="flex md:flex-row sm:flex-col justify-center  bg-slate-500  ">
        <div class="flex flex-col justif-center w-[70vw] h-[60vh] mx-10 tracking-wider align-center overflow-visible text-6xl p-5 ">
          <span>Some call it</span>
          <span class="font-black text-green text-7xl">Europe</span>
          <span>We call it</span>
          <span class="text-yellow-400 font-black text-7xl">Home</span>
          <a href="/en/join" class="button ">Join us!</a>
        </div>
        <div class="flex  w-full h-full">
          <Image 
            src={Map}
            alt="map of Europe"
          />
        </div>
      </div>
      <div class="inline-flex justify-center text-center my-10 mx-20 text-xl">
        <article>We are AEGEE-Paris, a student organization with an international focus. We are organizing parties, thematic events and informal get-togethers to meet, drink and make friends. Just have a look at our Event-page to find out more. Additionally, we are part of AEGEE-Europe, one of the biggest European student organization in existence! Therefore, we can offer you many opportunities, which you can read about below.</article>
      </div>

      <div>
        <h1> AEGEE</h1>
      </div>
     <div>
          <Image 
            src={Lightbulb}
            alt="map of europe"
            class="h-20 sm:h-28 w-28 object-cover"
          />

        </div>

    </main>
  );
}
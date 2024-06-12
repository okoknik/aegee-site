import Image from "next/image";

interface CardProps {
  img:any;
  alt: string;
  cat: string;
  heading: string;
  text: string;
}

export default function CardLeft({ img, alt, cat, heading, text }:CardProps) {
  return(
    <div className="flex justify-center  m-10">
         <div className="bg-light-black rounded-xl w-full rounded-r-none p-4 flex justify-between leading-normal shadow-md">
        <div className="m-8">
          <p className="text-md text-gray-100 flex items-center">{cat}</p>
          <div className="text-white font-bold text-3xl mb-2">{heading}</div>
          <p className="text-grey-100 text-lg">{text}</p>
        </div>


      </div>
 <div className="bg-light-black rounded-xl w-full h-full lg:max-w-full lg:flex ">
      <div className="max-sw:w-1/2 max-sw:h-auto lg:h-auto lg:max-w-52 flex bg-cover rounded-xl text-center m-5 rounded-r-none ">
        <Image 
          src={img}
          alt={alt}
        />

      </div>
    </div>
</div>
  )
}

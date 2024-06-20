import Image from "next/image";

interface CardProps {
  img:any;
  alt: string;
  cat: string;
  heading: string;
  text: string;
  link: string;
  color: string;
}

export default function CardRight({ img, alt, cat, heading, text, link ,color}:CardProps) {
  return(
    <div className="flex justify-center  m-10 shadow-lg shadow-inner shadow-black rounded-xl">
      <div className="bg-light-black  rounded-xl w-full h-full lg:max-w-full lg:flex ">
        <div className="max-sw:w-1/2 max-sw:h-auto lg:h-auto lg:max-w-52 flex bg-cover rounded-xl text-center m-5 rounded-r-none ">
          <Image 
            src={img}
            alt={alt}
          />

        </div>
        <div className="bg-light-black rounded-xl rounded-l-none p-4 flex flex-col justify-between leading-normal  ">
          <div className="m-8">
            <p className="text-md text-gray-100 flex items-center">{cat}</p>
            <div className="text-white font-bold text-3xl mb-2">{heading}</div>
            <p className="text-grey-100 text-xl ">{text}</p>
            <a className={`button bg-${color}`} href={link}>Learn More</a>
          </div>
        </div>
      </div>
    </div>
  )
}

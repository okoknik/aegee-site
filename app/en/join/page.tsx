import Link from "next/link"

export default function BecomeMember(){
  return(
    <div>
      <h1 className="flex justify-left my-10 mx-20 font-black text-7xl">Great to see you here!</h1>
      <div className="inline-flex justify-center text-center my-10 mx-20 text-xl">
        <span>
          If you would like to join us, all you need to do is to fill in the application form and send it to us via email or post. As soon as you have transfer us the membership fee, we will add you to our WhatsApp groups. Our bank details are written on the application form or you can find them <Link className="underline" href="/en/about">here</Link>. 
        </span>
      </div>
      <div>

<Link className="button sm:m-10 lg:mx-56 flex bg-green" href="pdf">Donwload the membership form</Link>.
      </div>
    </div>
  )
}

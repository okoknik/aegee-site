import Link from 'next/link';
import Image from 'next/image';
import Logo from '../images/logo.png';
import FR from '../images/fr.svg';
import UK from '../images/uk.svg';
import { CircleFlagLanguage } from 'react-circle-flags';

export default function Navbar() {
  return (
    <nav>
      <div>
      <Image
        src={Logo}
        alt='AEGEE logo'
        width={70}
        placeholder='blur'
        quality={100}
      />
      </div>
      <h1>AEGEE-Paris</h1> 
      <Link href="/">Home</Link>
      <Link href="/en/join">Join</Link>
      <Link href="/en/about">About</Link>
      
      <div className="flex justify-right ml-auto gap-5">
        <Link href="/">EN</Link>
        <Link href="/fr">FR</Link>
      </div>
    </nav>
  )
}

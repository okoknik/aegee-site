import Link from 'next/link'
import Image from 'next/image'
import Logo from '../images/logo.png'

export default function Navbar() {
  return (
    <nav>
      <Image
        src={Logo}
        alt='AEGEE logo'
        width={70}
        placeholder='blur'
        quality={100}
      />
      <h1>AEGEE-Paris</h1>
      <Link href="/en">Home</Link>
      <Link href="/en/join">Join</Link>
      <Link href="/en/about">About</Link>
    </nav>
  )
}

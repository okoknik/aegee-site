import Link from 'next/link'
import Image from 'next/image'
import Logo from './logo.png'

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
      <Link href="/">Home</Link>
      <Link href="/become-a-member">Join</Link>
      <Link href="/about">About</Link>
    </nav>
  )
}

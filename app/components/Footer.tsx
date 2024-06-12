import { SocialIcon } from 'react-social-icons';

export default function Footer() {

  const year = new Date().getFullYear();
  return(
    <div className="flex justify-center">
      <footer className="flex flex-col align-center">
        <div>
          <h1>{`Copyright © AEGEE-Paris ${year}`}</h1>
        </div>
        <div className="flex flex-row">
          <a className="mx-10 underline" href="">Contact</a>
          <a className="mx-5 underline" href="">Privacy Policy</a>

        </div>
        <div className="flex justify-center">
          <div className="flex flex-col align-center">
            <div className="flex flex-row justify-center mb-16">
              <div className="mx-5 ">
                <SocialIcon url="https://instagram.com/aegee.paris" />
              </div>
              <div className="mx-5">
                <SocialIcon url="https://whatsapp.com" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

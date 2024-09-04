import Image from "next/image"
import { DATA, iSocial } from "@/app/data"

export default function Footer(){
  return (
    <footer className="bg-veryDarkBlue">
      <div className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
        <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
          <div className="mx-auto my-6 text-center text-white md:hidden">
            Copyright &copy; 2024, All Rights Reserved.
          </div>
          <div>
            <Image src={DATA.altLogo} width={100} height={100} alt="logo" />
          </div>
          <div className="flex justify-center space-x-4">
            {DATA.socials.map((social: iSocial, index: number) => (
              <a key={index} href={social.link} target="_blank" rel="noreferrer">
                <Image src={social.icon} width={32} height={32} alt="link" />
              </a>
            ))}
          </div>
        </div>
        <div className="flex justify-around space-x-32">
          <div className="flex flex-col space-y-3 text-white ">
            <a href="#" className="hover:text-brightRed">Home</a>
            <a href="#" className="hover:text-brightRed">Pricing</a>
            <a href="#" className="hover:text-brightRed">Products</a>
            <a href="#" className="hover:text-brightRed">About</a>
          </div>
          <div className="flex flex-col space-y-3 text-white ">
            <a href="#" className="hover:text-brightRed">Careers</a>
            <a href="#" className="hover:text-brightRed">Community</a>
            <a href="#" className="hover:text-brightRed">Privacy Policy</a>
          </div>
        </div>

        <div className="flex flex-col justify-between">
          <form>
            <div className="flex space-x-3">
              <input type="text" placeholder="Updates in your inbox..." className="flex-1 px-4 rounded-full focus:outline-none" />
              <button type="submit" className="px-6 py-2 text-white bg-brightRed rounded-full hover:bg-brightRedLight focus:outline-none">Go</button>
            </div>
          </form>
            <div className="hidden text-white md:block">
              <p>&copy; 2024, All Rights Reserved.</p>
            </div>
        </div>
      </div>
    </footer>
  )
}

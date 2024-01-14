import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center">
      <div className="flex items-center justify-center gap-5  my-5">
        <h1 className="text-5xl text-white font-bold animate-pulse">
          Coming Soon
        </h1>
        <div className="flex gap-2 ">
          <div className="w-5 h-5 rounded-full animate-pulse bg-white"></div>
          <div className="w-5 h-5 rounded-full animate-pulse bg-white"></div>
          <div className="w-5 h-5 rounded-full animate-pulse bg-white"></div>
        </div>
      </div>
      <p className="text-white text-lg mb-8  animate-pulse">
        We're working hard to bring you something amazing. Stay tuned!
      </p>
      <div className="flex items-center gap-5">
        <Link href="/https://github.com/muhammadNaveedWarraich" target="_blank">
          <FaGithub className="border rounded-full animate-pulse text-white  w-10 h-10 p-2 cursor-pointer test-2xl " />
        </Link>
        <Link
          href="https://www.linkedin.com/in/MuhammadNaveedWarraich/"
          target="_blank"
        >
          <FaLinkedin className="border rounded-full animate-pulse text-white  w-10 h-10 p-2 cursor-pointer test-2xl " />
        </Link>
        <Link
          href="https://www.instagram.com/muhammadnaveedwarraich/"
          target="_blank"
        >
          <FaInstagram className="border rounded-full animate-pulse text-white  w-10 h-10 p-2 cursor-pointer test-2xl " />
        </Link>
      </div>
    </div>
  );
}
//this is about the practice peoject
//this is about the practice peoject

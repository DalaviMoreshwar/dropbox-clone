import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <div className="flex flex-col lg:flex-row items-center bg-[#1e1919] dark:bg-slate-800">
        <div className="p-5 flex flex-col bg-[#2b2929] dark:bg-slate-800 text-white">
          <h1 className="text-5xl font-bold">
            Welcome to Dropbox.
            <br />
            Storing everything for you and your business needs. All in one place
          </h1>

          <p className="py-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
            accusamus quod libero, iste deleniti porro. Ad, tenetur ipsum
            doloremque, voluptas magnam odit dolore commodi nulla maiores ipsam
            ea, reprehenderit repudiandae? Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Modi, molestias. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Nesciunt, eius?
          </p>

          <Link
            href="/dashboard"
            className="flex items-center cursor-pointer bg-blue-500 w-fit p-5"
          >
            Try it for free <ArrowRight className="ml-10" />
          </Link>
        </div>

        <div className="bg-[#1e1919] dark:bg-slate-800 h-full p-5">
          <video autoPlay loop muted className="rounded-lg">
            <source
              src="https://aem.dropbox.com/cms/content/dam/dropbox/warp/en-us/overview/lp-header-graphite200-1920x1080.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <p className="text-center font-bold text-xl pt-5">Disclaimer</p>
      <p className="text-center font-light p-2">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis
        tempora ratione est temporibus dolores labore ut sit exercitationem
        eaque officiis? Lorem, ipsum dolor sit amet consectetur adipisicing
        elit. Explicabo culpa beatae cupiditate quidem ipsa ducimus.
      </p>
    </main>
  );
}

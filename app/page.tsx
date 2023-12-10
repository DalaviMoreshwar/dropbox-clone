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
            <br />
            Storing everything for you and your business needs. All in one place
          </h1>

          <p className="py-5">
            Collaborate seamlessly and deliver work faster from anywhere with
            Dropbox. Securely store your content, edit PDFs, share videos, sign
            documents and track file engagement—without leaving Dropbox.
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
      <p className="text-center font-bold text-5xl pt-5">
        Go from idea to done with Dropbox
      </p>
      <p className="text-center font-light p-2">
        Save time, collaborate seamlessly, and deliver work faster on a platform
        that works with your existing tools. Dropbox helps you finalize video,
        image, and audio projects without the hassle. Plus, edit PDFs, share
        trackable document links, and get agreements signed quickly—all without
        leaving Dropbox.
      </p>
      <p className="text-center font-bold text-slate-500">
        <Link
          href="https://github.com/DalaviMoreshwar/dropbox-clone?tab=readme-ov-file#readme-ov-file"
          target="_blank"
        >
          Project Documentation
        </Link>
      </p>
    </main>
  );
}

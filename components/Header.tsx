import { UserButton, SignedOut, SignInButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { ThemeToggler } from "./ThemeToggler";
import { Code2Icon } from "lucide-react";

function Header() {
  return (
    <header className="flex items-center justify-between">
      <Link href="/" className="space-x-2 flex items-center">
        <div className="bg-[#0160fe] w-full">
          <Image
            src="/box.png"
            alt="logo"
            className="invert"
            width={50}
            height={50}
          />
        </div>
        <h1 className="font-bold text-xl">Dropbox</h1>
      </Link>

      <div className="px-5 flex space-x-2 items-center">
        <Link
          href="https://github.com/DalaviMoreshwar/dropbox-clone.git"
          target="_blank"
          className="p-3 bg-blue-500 flex items-center text-white"
        >
          Source Code <Code2Icon className="ml-3" />
        </Link>

        {/* theme toggler */}
        <ThemeToggler />

        <UserButton afterSignOutUrl="/" />
        <SignedOut>
          <SignInButton afterSignInUrl="/dashboard" mode="modal" />
        </SignedOut>
      </div>
    </header>
  );
}

export default Header;

import { UserButton, SignedOut, SignInButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

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
        {/* theme toggler */}

        <UserButton afterSignOutUrl="/" />
        <SignedOut>
          <SignInButton afterSignInUrl="/dashboard" mode="modal" />
        </SignedOut>
      </div>
    </header>
  );
}

export default Header;

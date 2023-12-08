import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <h1>Main page</h1>
      <Link href={"/dashboard"}>Dashboard</Link>
    </main>
  );
}

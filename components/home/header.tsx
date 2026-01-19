import Link from "next/link";
import { Blob } from "@/components/blob";

export function Header() {
  return (
    <header className="bg-secondary h-17.25">
      <Blob type="big" className="bg-blue blur-big -top-40 left-75" />
      <div className="flex items-center justify-center h-full">
        <nav className="font-serif">
          <ul className="flex gap-12">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/stack">Stack</Link>
            </li>
            <li>
              <Link href="/projects">Projects</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

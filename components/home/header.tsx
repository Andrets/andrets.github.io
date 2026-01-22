import Link from "next/link";
import { Blob } from "@/components/blob";

export function Header() {
  return (
    <header className="bg-secondary h-16 z-0">
      <Blob
        type="big"
        className="left-55.5 -top-40 transform-[matrix(-1, 0, 0, 1, 0, 0)] z-0"
      />
      <div className="flex items-center justify-center h-full">
        <nav className="font-serif z-10">
          <ul className="flex gap-12 z-10">
            <li>
              <Link href="#home">Home</Link>
            </li>
            <li>
              <Link href="#about">About</Link>
            </li>
            <li>
              <Link href="#stack">Stack</Link>
            </li>
            <li>
              <Link href="#projects">Projects</Link>
            </li>
            <li>
              <Link href="#contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Blob } from "@/components/blob";

export function Footer() {
  return (
    <footer className="bg-secondary relative mt-40">
      <Blob type="big" className="bg-blue -top-40 -left-50" />
      <div className="pt-20 pb-11 flex justify-between max-w-width mx-auto items-center">
        <div className="flex flex-col gap-6 max-w-1/3">
          <h2 className="text-[2.5rem] font-semibold leading-tightest">
            Ready to scale?
            <br />
            Let{"'"}s talk about your next challenge.
          </h2>
          <Button variant="big" asChild>
            <Link href="https://t.me/dmitriy_junior">Contact Me</Link>
          </Button>
        </div>
        <div className="grid grid-cols-2 gap-6 font-serif">
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl leading-tighter font-medium font-sans">
              Socials
            </h3>
            <ul className="flex flex-col gap-2 text-secondary-grey">
              <li>
                <Link href="https://twitter.com/andrets">GitHub</Link>
              </li>
              <li>
                <Link href="https://github.com/andrets">LinkedIn</Link>
              </li>
              <li>
                <Link href="https://linkedin.com/in/andrets">Telegram</Link>
              </li>
              <li>
                <Link href="https://instagram.com/andrets">Kwork</Link>
              </li>
              <li>
                <Link href="https://andrets.github.io">HH.ru</Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl leading-tighter font-medium font-sans">
              Menu
            </h3>
            <ul className="flex flex-col gap-2 text-secondary-grey">
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
          </div>
        </div>
      </div>
      <span className="flex justify-center text-secondary-grey font-mono text-[0.875rem] leading-tight pb-4">
        &copy; 2026 // Design by @yourtag / Built by dmitriy_junior
      </span>
    </footer>
  );
}

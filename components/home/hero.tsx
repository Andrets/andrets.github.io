import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Blob } from "@/components/blob";
import Link from "next/link";
import { GradientMask } from "@/components/gradient-mask";

export function Hero() {
  return (
    <section className="max-w-width mx-auto">
      <div className="group mt-34 bg-surface pl-16 pt-12 pb-11 rounded-[5rem] relative">
        <div className="absolute inset-0 bg-surface rounded-[5rem] overflow-hidden">
          <GradientMask />
          <Blob type="small" className="bg-red left-127.5 -bottom-40" />
          <Blob type="small" className="bg-green -right-35 -top-40" />
        </div>
        <div className="flex flex-col gap-6 max-w-[57%] relative z-10">
          <div className="flex flex-col gap-2">
            <span className="text-secondary-grey font-mono text-sm leading-tight">
              {"//"} Available for complex architectural challenges
            </span>
            <div className="flex flex-col gap-4">
              <h1 className="text-[4rem] font-bold leading-tighterest">
                Engineering Scalable AI Systems with Clean Code
              </h1>
              <p className="text-secondary-grey max-w-[75%]">
                Привет! Я Дмитрий — Fullstack-разработчик с фокусом на Backend.
                Создаю высоконагруженные SaaS-платформы на Bun и Next.js,
                интегрируя возможности современных LLM в бизнес-процессы.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <Button variant="big" asChild>
              <Link href="https://t.me/dmitriy_junior">Contact Me</Link>
            </Button>
            <Button variant="icon" asChild>
              <Link href="https://github.com/Andrets">
                <Image
                  src="/mingcute_github-fill.svg"
                  alt="GitHub"
                  width={32}
                  height={32}
                />
              </Link>
            </Button>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 z-20">
          <Image
            src="/dmitriyjunior.png"
            alt="Dmitriy Junior"
            unoptimized
            priority
            width={544}
            height={594}
          />
        </div>
      </div>
    </section>
  );
}

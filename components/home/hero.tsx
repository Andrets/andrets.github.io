import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Blob } from "@/components/blob";

export function Hero() {
  return (
    <div className="max-w-width mx-auto">
      <div className="group mt-36.75 bg-surface pl-16 pt-12 pb-11 rounded-[5rem] relative overflow-hidden">
        <div
          className="absolute inset-0 rounded-[5rem] pointer-events-none"
          style={{
            padding: "1px",
            background:
              "linear-gradient(28.69deg, rgba(0, 0, 0, 0) 29%, rgba(255, 255, 255, 0.3) 100%)",
            WebkitMask:
              "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
          }}
        />
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
            <Button type="big">Contact Me</Button>
            <Button type="icon">
              <Image
                src="/mingcute_github-fill.svg"
                alt="GitHub"
                width={32}
                height={32}
              />
            </Button>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 z-10">
          <Image
            src="/dmitriyjunior.png"
            alt="Dmitriy Junior"
            unoptimized
            priority
            width={544}
            height={594}
          />
        </div>
        <Blob type="small" className="bg-red left-[510px] -bottom-[160px]" />
        <Blob type="small" className="bg-green -right-[140px] -top-[160px]" />
      </div>
    </div>
  );
}

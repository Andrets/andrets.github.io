import { GradientMask } from "@/components/gradient-mask";
import { Blob } from "@/components/blob";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function BrochangeCard() {
  return (
    <div className="group p-12 rounded-[5rem] bg-surface relative">
      <div className="absolute inset-0 bg-surface rounded-[5rem] overflow-hidden">
        <GradientMask />
        <Blob type="xs" className="bg-blue-brofund left-42 -bottom-25" />
      </div>
      <div className="z-10 relative flex gap-6">
        <div className="flex flex-col gap-8 max-w-110">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2 justify-center items-center">
              <h3 className="font-medium text-2xl leading-tighter">
                Brochange
              </h3>
              <p className="font-mono text-sm leading-tight text-secondary-grey text-center">
                FinTech Web Platform:
                <br />
                Crypto Exchange & Investment Services
              </p>
            </div>
            <div>
              <p className="font-serif text-secondary-grey">
                FinTech-платформа, включающая криптовалютный обменник с рабочим
                калькулятором (BroChange) и инвестиционный сервис (BroFund).
                <br />
                <br />
                Основной фокус проекта — сложная фронтенд-логика, финансовые
                вычисления, оптимизированная работа с данными и масштабируемая
                архитектура под личные кабинеты и инвестиционные сценарии.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-mono text-sm leading-tight text-secondary-grey">
                BroChange — Crypto Exchange
              </span>
              <p className="font-serif text-secondary-grey">
                Криптообменник с динамическим калькулятором на реальных данных.
                Реализованы точные финансовые вычисления, оптимизированная
                обработка курсов и безопасный UX.
              </p>
            </div>
            <div>
              <span className="font-mono text-sm leading-tight text-secondary-grey">
                BroFund — Investment Platform
              </span>
              <p className="font-serif text-secondary-grey">
                Платформа для частных инвесторов. Спроектирована масштабируемая
                архитектура личного кабинета и регистрации, подготовлен дизайн
                под инвестиционные инструменты.
              </p>
            </div>
          </div>
          <div className="flex gap-2.5 flex-wrap">
            <Button>Next.js</Button>
            <Button>TypeScript</Button>
            <Button>Framer Motion</Button>
            <Button>Tailwind CSS + shadcn/ui</Button>
          </div>
        </div>
        <Image
          src="/images/brofund.png"
          alt="Brofund"
          width={308}
          height={776}
          className="rounded-4xl"
        />
        <Image
          src="/images/brochange.png"
          alt="Brochange"
          width={308}
          height={776}
          className="rounded-4xl"
        />
      </div>
    </div>
  );
}

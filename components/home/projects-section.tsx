import { BrochangeCard } from "@/components/brochange-card";
import { GrandmasterCard } from "@/components/grandmaster-card";
import { TeleparseCard } from "@/components/teleparse-card";
import { Blob } from "@/components/blob";

export function ProjectsSection() {
  return (
    <section className="relative">
      <div className="max-w-width mx-auto flex flex-col gap-6">
        <div className="flex flex-col gap-4 justify-center items-center">
          <h2 className="font-semibold text-[2.5rem] leading-tightest">
            Selected Projects
          </h2>
          <p className="font-serif text-secondary-grey">
            Реальные кейсы: от проектирования архитектуры высоконагруженных
            систем до внедрения AI-агентов в бизнес-процессы.
          </p>
        </div>
        <div className="flex flex-col gap-6">
          <BrochangeCard />
          <GrandmasterCard />
          <TeleparseCard />
        </div>
      </div>
      <Blob
        type="big"
        className="-right-50 top-1/2 transform -translate-y-1/2"
      />
    </section>
  );
}

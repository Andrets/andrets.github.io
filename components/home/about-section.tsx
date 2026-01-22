import { Blob } from "@/components/blob";

export function AboutSection() {
  return (
    <section id="about" className="relative">
      <div className="max-w-width mx-auto flex flex-col gap-12">
        <div className="flex flex-col gap-8 justify-center items-center">
          <h2 className="font-semibold text-[2.5rem] leading-tightest text-center">
            Building Digital Logic
            <br />
            with Human Precision
          </h2>
          <p className="font-serif text-secondary-grey text-center max-w-4/5">
            Я верю, что архитектура проекта важнее сиюминутных фич. Мой подход
            базируется на глубоком понимании Node.js экосистемы и внедрении
            AI-инструментов не как игрушек, а как двигателей бизнес-логики.
            Создаю продукты, которые легко поддерживать и невозможно сломать.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-6.25 h-45.25">
          <div className="border border-transparent border-l-white h-full pl-6">
            <div className="flex flex-col gap-4">
              <h2 className="font-semibold text-[2.5rem] leading-tightest">
                01.
              </h2>
              <div className="flex flex-col gap-2">
                <h3 className="font-medium text-2xl leading-tighter">
                  Scalable Backend
                </h3>
                <p className="font-serif text-secondary-grey">
                  Проектирую системы на Bun/Next.js, готовые к нагрузкам в 10х с
                  первого дня.
                </p>
              </div>
            </div>
          </div>
          <div className="border border-transparent border-l-white h-full pl-6">
            <div className="flex flex-col gap-4">
              <h2 className="font-semibold text-[2.5rem] leading-tightest">
                02.
              </h2>
              <div className="flex flex-col gap-2">
                <h3 className="font-medium text-2xl leading-tighter">
                  Intelligent Tools
                </h3>
                <p className="font-serif text-secondary-grey">
                  Интегрирую LLM (GPT, Claude) в рабочие процессы для
                  автоматизации сложных задач.
                </p>
              </div>
            </div>
          </div>
          <div className="border border-transparent  border-l-white h-full pl-6">
            <div className="flex flex-col gap-4">
              <h2 className="font-semibold text-[2.5rem] leading-tightest">
                03.
              </h2>
              <div className="flex flex-col gap-2">
                <h3 className="font-medium text-2xl leading-tighter">
                  Production-Ready
                </h3>
                <p className="font-serif text-secondary-grey">
                  Пишу типизированный, тестируемый код, который не требует
                  переписывания через месяц.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Blob type="big" className="-bottom-20 -right-50" />
    </section>
  );
}

import { GradientMask } from "@/components/gradient-mask";
import { Blob } from "@/components/blob";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function GrandmasterCard() {
  return (
    <div className="group p-12 rounded-[5rem] bg-surface relative">
      <div className="absolute inset-0 bg-surface rounded-[5rem] overflow-hidden">
        <GradientMask />
        <Blob type="xs" className="bg-blue-grandmaster left-42 -bottom-25" />
      </div>
      <div className="z-10 relative flex gap-6">
        <div className="flex flex-col gap-8 max-w-110">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2 justify-center items-center">
              <h3 className="font-medium text-2xl leading-tighter">
                GrandMaster
              </h3>
              <p className="font-mono text-sm leading-tight text-secondary-grey text-center">
                AI-powered Application Automation System
              </p>
            </div>
            <div>
              <p className="font-serif text-secondary-grey">
                Веб-платформа для автоматизации заполнения конкурсных и
                грантовых заявок.
                <br />
                <br />
                Пользователь загружает документы, после чего система анализирует
                их и с помощью ИИ формирует структурированные ответы под
                требования конкретных заявок.
              </p>
            </div>
          </div>
          <div className="flex gap-2.5 flex-wrap">
            <Button>Node.js</Button>
            <Button>Next.js</Button>
            <Button>Python</Button>
            <Button>LLM API</Button>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <Image
            src="/images/grandmaster_1.png"
            alt="Grandmaster"
            width={640}
            height={376}
            className="rounded-4xl"
          />
          <Image
            src="/images/grandmaster_2.png"
            alt="Grandmaster"
            width={640}
            height={376}
            className="rounded-4xl"
          />
        </div>
      </div>
    </div>
  );
}

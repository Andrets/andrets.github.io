import { GradientMask } from "@/components/gradient-mask";
import { Blob } from "@/components/blob";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function TeleparseCard() {
  return (
    <div className="group p-12 rounded-[5rem] bg-surface relative">
      <div className="absolute inset-0 bg-surface rounded-[5rem] overflow-hidden">
        <GradientMask />
        <Blob type="xs" className="bg-blue-teleparse left-42 -bottom-25" />
      </div>
      <div className="z-10 relative flex gap-6">
        <div className="flex flex-col gap-8 max-w-110">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2 justify-center items-center">
              <h3 className="font-medium text-2xl leading-tighter">
                teleparse-ai
              </h3>
              <p className="font-mono text-sm leading-tight text-secondary-grey text-center">
                AI-powered Telegram Parsing & Content
                <br />
                Automation Platform
              </p>
            </div>
            <div>
              <p className="font-serif text-secondary-grey">
                SaaS-платформа для одновременного парсинга нескольких
                Telegram-каналов и ботов в рамках одного пользователя. Система
                автоматически собирает сообщения, анализирует и редактирует их с
                помощью ИИ, а затем публикует в Telegram-ботов или внешние
                каналы по заданным интервалам.
                <br />
                <br />
                Проект разработан соло, задеплоен на VPS, используется клиентом.
              </p>
            </div>
          </div>
          <div className="flex gap-2.5 flex-wrap">
            <Button>Node.js</Button>
            <Button>Python</Button>
            <Button>Docker</Button>
            <Button>Telegram API</Button>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <Image
            src="/images/teleparse_1.png"
            alt="Teleparse"
            width={640}
            height={376}
            className="rounded-4xl"
          />
          <Image
            src="/images/teleparse_2.png"
            alt="Teleparse"
            width={640}
            height={376}
            className="rounded-4xl"
          />
        </div>
      </div>
    </div>
  );
}

import { Blob } from "../blob";
import { StackCard } from "../stack-card";
import { Button } from "../ui/button";

export function StackSection() {
  return (
    <section className="relative">
      <div className="max-w-width mx-auto flex flex-col gap-6">
        <div className="flex flex-col gap-4 justify-center items-center">
          <h2 className="font-semibold text-[2.5rem] leading-tightest">
            Tech Stack & Ecosystem
          </h2>
          <p className="font-serif text-secondary-grey">
            Инструменты, которые я использую для превращения сложных идей в
            масштабируемый код.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <StackCard className="col-span-2 flex items-end justify-end rounded-r-[3rem]">
            <div className="grid grid-cols-3">
              <Button variant="secondary">TypeScript</Button>
              <Button variant="secondary">Node.js Runtime</Button>
              <Button variant="secondary" className="col-span-4">
                Bun Ecosystem
              </Button>
            </div>
          </StackCard>
          <StackCard>123</StackCard>
          <StackCard>12</StackCard>
          <StackCard className="col-span-2">123</StackCard>
        </div>
      </div>
      <Blob type="big" className="bg-blue -bottom-60 -left-50" />
    </section>
  );
}

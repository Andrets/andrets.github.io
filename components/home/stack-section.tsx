import { Blob } from "@/components/blob";
import { StackCard } from "@/components/stack-card";
import { Button } from "@/components/ui/button";

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
        <div className="grid grid-cols-[58.67%_1fr] gap-4">
          <StackCard
            rounded={{
              rounded: {
                bottomRight: "48px",
                bottomLeft: "48px",
                topRight: "48px",
                topLeft: "80px",
              },
            }}
            className="flex items-end justify-end"
            blobs={[
              { type: "xs", className: "bg-green-node left-31.25 -top-25" },
              { type: "xs", className: "bg-blue-ts right-31.25 -top-25" },
            ]}
          >
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <Button variant="secondary">TypeScript</Button>
                <Button variant="secondary">Node.js Runtime</Button>
              </div>
              <Button variant="secondary" className="self-end">
                Bun Ecosystem
              </Button>
            </div>
            <Blob type="small" className="bg-green-light" />
          </StackCard>
          <StackCard
            rounded={{
              rounded: {
                bottomRight: "48px",
                bottomLeft: "48px",
                topRight: "80px",
                topLeft: "48px",
              },
            }}
            className="flex items-end justify-start"
            blobs={[
              {
                type: "xs",
                className:
                  "bg-grey-openai -top-25 left-1/2 transform -translate-x-1/2",
              },
            ]}
          >
            <div className="flex flex-col gap-2">
              <Button variant="secondary">AI Integration</Button>
              <Button variant="secondary">LLM Solutions</Button>
            </div>
          </StackCard>
        </div>
        <div className="grid grid-cols-[1fr_58.67%] gap-4">
          <StackCard
            rounded={{
              rounded: {
                bottomRight: "48px",
                bottomLeft: "80px",
                topRight: "48px",
                topLeft: "48px",
              },
            }}
            className="flex items-end justify-end"
            blobs={[
              {
                type: "xs",
                className:
                  "bg-green-git -top-25 left-1/2 transform -translate-x-1/2",
              },
            ]}
          >
            <div className="flex flex-col gap-2">
              <Button variant="secondary">Clean Code</Button>
              <Button variant="secondary">Open Source</Button>
            </div>
          </StackCard>
          <StackCard
            rounded={{
              rounded: {
                bottomRight: "80px",
                bottomLeft: "48px",
                topRight: "48px",
                topLeft: "48px",
              },
            }}
            className="flex items-end justify-start"
            blobs={[
              {
                type: "xs",
                className: "bg-blue-pg -top-25 left-1.25",
              },
              {
                type: "xs",
                className:
                  "bg-blue-docker -top-25 right-1/2 transform translate-x-1/2",
              },
              {
                type: "xs",
                className: "bg-red-light -top-25 right-1.25",
              },
            ]}
          >
            <div className="flex gap-2 items-start justify-start">
              <Button variant="secondary">Microservices</Button>
              <Button variant="secondary">Deployment</Button>
              <Button variant="secondary">Scalable DB</Button>
            </div>
          </StackCard>
        </div>
      </div>
      <Blob type="big" className="bg-blue -bottom-18.5 -left-50" />
    </section>
  );
}

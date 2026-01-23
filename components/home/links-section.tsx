"use client";

import { Logo } from "@/components/logo";
import {
  LinkedinIcon,
  GithubIcon,
  HhIcon,
  KworkIcon,
  TelegramIcon,
} from "@/components/ui/icons";
import { Blob } from "@/components/blob";

const logos = [
  {
    id: 1,
    url: "hh.ru/resume/cb02ee02ff0c8c26220039ed1f646e436e7265",
    icon: <HhIcon />,
  },
  { id: 2, url: "linkedin.com/in/dmitriy_junior", icon: <LinkedinIcon /> },
  { id: 3, url: "github.com/Andrets", icon: <GithubIcon /> },
  { id: 4, url: "kwork.ru/user/webdeveloper_dmitriy", icon: <KworkIcon /> },
  { id: 5, url: "t.me/DmitriySurkov_DEV", icon: <TelegramIcon /> },
];

export function LinksSection() {
  return (
    <section id="contact" className="relative">
      <div className="max-w-width mx-auto">
        <div className="">
          <ul className="flex gap-6 w-full justify-center items-center">
            {logos.map((logo) => (
              <Logo key={logo.id} {...logo} />
            ))}
          </ul>
        </div>
      </div>
      <Blob type="big" className="-bottom-60 -left-50" />
    </section>
  );
}

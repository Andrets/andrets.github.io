"use client";

import Link from "next/link";

interface ILogoProps {
  id: number;
  url: string;
  icon: React.ReactNode;
}

export function Logo({ url, icon }: ILogoProps) {
  return (
    <li className="inline-block h-18 p-4">
      <Link href={`https://${url}`} className="text-[#A6A6A6] hover:text-white">
        {icon}
      </Link>
    </li>
  );
}

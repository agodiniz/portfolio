import Image from "next/image";

import coverCases from "/public/assets/cover-cases.png";
import { Briefcase } from "lucide-react";

export default function Career() {
  return (
    <main className="w-full flex flex-col gap-4 items-center bg-[#F8F8F8]">
      <section className="container flex px-4 sm:px-6 lg:py-[122px]">
        <div className="flex gap-8 w-full">
          <div className="flex flex-col gap-4 lg:max-w-[488px]">
            <div className="flex items-center gap-4">
              <Briefcase width={16} className="text-[#17171B] opacity-50" />
              <span className="text-[#17171B] opacity-50 uppercase text-xs md:text-sm font-bold">Conheça meu trampo</span>
            </div>
            <h2 className="text-[#4D4D4D] text-[50px] font-bold">
              Conheça um pouco da minha jornada
            </h2>
          </div>

        </div>
        <div className="flex flex-col items-center justify-center w-full">
          <Image src={coverCases} alt="Cases" className="w-full" />
        </div>
      </section>
    </main>
  )
}
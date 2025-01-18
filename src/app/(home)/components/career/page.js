import Image from "next/image";

import coverCases from "/public/assets/cover-cases.png";
import { ArrowRight, Briefcase } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

export default function Career() {
  return (
    <main className="w-full flex flex-col gap-4 items-center bg-[#F8F8F8]">
      <section id="my-career" className="container flex flex-wrap-reverse lg:flex-nowrap gap-8 px-4 py-10 sm:px-6 lg:py-[122px]">
        <div className="flex gap-8 w-full">
          <section className="flex flex-col gap-10">
            <div id="header-my-career" className="flex flex-col gap-4 w-full max-w-auto lg:max-w-[488px]">
              <div className="flex items-center gap-4">
                <Briefcase width={16} className="text-[#17171B] opacity-50" />
                <span className="text-[#17171B] opacity-50 uppercase text-xs md:text-sm font-bold">Minha carreira</span>
              </div>
              <h2 className="text-[#17171B] text-3xl lg:text-[50px] font-bold leading-normal">
                Conheça um pouco da minha jornada
              </h2>
            </div>

            <div id="content-my-career" className="flex gap-8">
              <div id="slide" className="flex flex-col w-0.5">
                <div className="flex flex-col flex-1 w-full bg-primary rounded-full"></div>
                <div className="flex flex-col flex-1 w-full bg-transparent rounded-full"></div>
                <div className="flex flex-col flex-1 w-full bg-transparent rounded-full"></div>
                <div className="flex flex-col flex-1 w-full bg-transparent rounded-full"></div>
                <div className="flex flex-col flex-1 w-full bg-transparent rounded-full"></div>
              </div>

              <section id="business-experience" className="flex flex-col gap-10">
                <div id="header-business-experience" className="flex flex-col gap-4 max-w-[558px]">
                  <h3 className="text-lg lg:text-3xl font-bold text-[#17171b]">Suflex</h3>
                  <p className="text-sm lg:text-base text-[#17171b]/70">Solução que simplifica a vida das pessoas usuárias dentro das maiores cozinhas profissionais do Brasil.</p>
                </div>

                <ul id="highlights-business-experience" className="flex flex-col gap-4">
                  <li className="text-sm lg:text-base leading-tight text-[#17171b]/70">
                    <span className="text-sm lg:text-base font-bold leading-tight text-[#17171b]">Simplifica e melhora a experiência </span>de uso  cozinha
                  </li>
                  <Separator className="border-[#e9ecef]" />
                  <li className="text-sm lg:text-base leading-tight text-[#17171b]/70">
                    <span className="text-sm lg:text-base font-bold leading-tight text-[#17171b]">Otimiza a operação </span>e polpa tempo na cozinha
                  </li>

                  <Separator className="border-[#e9ecef]" />
                  <li className="text-sm lg:text-base leading-tight text-[#17171b]/70">
                    <span className="text-sm lg:text-base font-bold leading-tight text-[#17171b]">Segurança </span>e conformidade com as leis alimentícias
                  </li>
                </ul>

                <div id="metrics-bussiness-experience" className="hidden lg: flex justify-between max-w-[454px]">
                  <div className="flex flex-col gap-2">
                    <span className="text-[#17171b] text-2xl lg:text-[40px] font-bold">+ 88%</span>
                    <p className="text-[#17171b]/50 text-xs lg:text-sm">Número de novos clientes usando o produto.</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-[#17171b] text-2xl lg:text-[40px] font-bold">+ 25%</span>
                    <p className="text-[#17171b]/50 text-xs lg:text-sm">Velocidade de impressão de etiquetas.</p>
                  </div>
                </div>

              </section>
            </div>
                <div id="cta-view-case" className="w-full lg:w-auto">
                  <Button variant="default" className="font-medium w-full lg:w-auto">
                    Ver case completo
                    <div className="bg-white rounded-full p-1">
                      <ArrowRight width={16} className="text-[#17171b]" />
                    </div>
                  </Button>
                </div>


          </section>

        </div>
        <div className="flex flex-col items-center justify-center w-full">
          <Image src={coverCases} alt="Cases" className="w-full" />
        </div>
      </section>
    </main>
  )
}
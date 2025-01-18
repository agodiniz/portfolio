"use client"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image";

import nutrition3vsLogo from "/public/assets/partners/3vs.png";
import blenderBottle from "/public/assets/partners/blender-bottle.png";
import dinizConsultoria from "/public/assets/partners/diniz-consultoria-agricola.png";
import extractoDao from "/public/assets/partners/extracto-dao.png";
import geomiq from "/public/assets/partners/geomiq.png";
import indoorChannel from "/public/assets/partners/indoor-channel.png";
import lunes from "/public/assets/partners/lunes.png";
import meal from "/public/assets/partners/meal.png";
import pontoTel from "/public/assets/partners/ponto-tel.png";
import suflex from "/public/assets/partners/suflex.png";
import unikosHost from "/public/assets/partners/unikos-host.png";

export default function Partners() {
  return (
    <section className="py-8 border-y border-[#f4f6fa]/10 bg-black text-white w-full flex items-center justify-center">
      <section className="container flex flex-col gap-12 md:gap-24 lg:gap-[114px] px-4 sm:px-6">
        <Carousel
          plugins={[
            Autoplay({
              delay: 2000,
            })
          ]}
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent className="flex flex-shrink-0">
            <CarouselItem className="basis-[25%] md:basis-1/5 flex justify-center items-center">
              <Image src={nutrition3vsLogo} alt="3vs Nutrition" width={44} className="aspect-[3/2] object-contain" />
            </CarouselItem>
            <CarouselItem className="basis-[25%] md:basis-1/5 flex justify-center items-center">
              <Image src={blenderBottle} alt="Blender Bottle" width={80} className="aspect-[3/2] object-contain" />
            </CarouselItem>
            <CarouselItem className="basis-[25%] md:basis-1/5 flex justify-center items-center">
              <Image src={dinizConsultoria} alt="Diniz Consultoria" width={44} className="aspect-[3/2] object-contain" />
            </CarouselItem>
            <CarouselItem className="basis-[25%] md:basis-1/5 flex justify-center items-center">
              <Image src={extractoDao} alt="Extracto DAO" width={50} className="aspect-[3/2] object-contain" />
            </CarouselItem>
            <CarouselItem className="basis-[25%] md:basis-1/5 flex justify-center items-center">
              <Image src={geomiq} alt="Geomiq" width={110} className="aspect-[3/2] object-contain" />
            </CarouselItem>
            <CarouselItem className="basis-[25%] md:basis-1/5 flex justify-center items-center">
              <Image src={indoorChannel} alt="Indoor Channel" width={110} className="aspect-[3/2] object-contain" />
            </CarouselItem>
            <CarouselItem className="basis-[25%] md:basis-1/5 flex justify-center items-center">
              <Image src={unikosHost} alt="Unikos Host" width={44} className="aspect-[3/2] object-contain" />
            </CarouselItem>
            <CarouselItem className="basis-[25%] md:basis-1/5 flex justify-center items-center">
              <Image src={lunes} alt="Lunes" width={80} className="aspect-[3/2] object-contain" />
            </CarouselItem>
            <CarouselItem className="basis-[25%] md:basis-1/5 flex justify-center items-center">
              <Image src={meal} alt="Meal" width={60} className="aspect-[3/2] object-contain" />
            </CarouselItem>
            <CarouselItem className="basis-[25%] md:basis-1/5 flex justify-center items-center">
              <Image src={pontoTel} alt="Ponto Tel" width={110} className="aspect-[3/2] object-contain" />
            </CarouselItem>
            <CarouselItem className="basis-[25%] md:basis-1/5 flex justify-center items-center">
              <Image src={suflex} alt="Suflex" width={103} className="aspect-[3/2] object-contain" />
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </section>
    </section>
  )
}
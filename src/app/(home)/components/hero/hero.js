"use client"

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import bannerHero from "/public/assets/me-banner-hero.png";
import experienceType from "/public/assets/experience-type.svg";
import smileImage from "/public/assets/smile.png";
import experienceMark from "/public/assets/experience-mark.svg";
import mediumIcon from "/public/assets/medium.svg";
import linkedinIcon from "/public/assets/linkedin.svg";
import instagramIcon from "/public/assets/instagram.svg";

import { Mouse } from "lucide-react";
import { Button } from "@/components/ui/button";

import { TextAnimate } from "@/components/ui/text-animate";
import ShineBorder from "@/components/ui/shine-border";

export default function Hero() {
  return (
    <main className="w-full flex flex-col gap-4 items-center bg-black">
      <section className="container flex flex-col gap-12 md:gap-24 lg:gap-[114px] px-4 sm:px-6 py-10 md:py-10 lg:py-32">
        <div className="relative w-full">
          <motion.div
            initial={{ y: 0, opacity: 0 }}
            animate={{
              y: [0, -10, 0],
              opacity: 1,
            }}
            transition={{
              duration: 4,
              opacity: { duration: 0.5, delay: 1 },
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          >
            <Image
              src={experienceType}
              alt="User Experience"
              className="absolute w-[140px] top-0 mt-6 md:w-56 lg:w-auto lg:mt-8 lg:-ml-6"
            />
          </motion.div>

          {/* <span className="text-[#F4F6FA] text-[36px] leading-normal sm:text-[48px] sm:leading-[48px] md:text-[54px] md:leading-[54px] lg:text-[71px] lg:leading-[71px] font-bold ml-2 md:ml-5 lg:ml-[50px]">
            DESIGN
          </span> */}
          <TextAnimate animation="slideUp" as="h1" by="word" className="text-[#F4F6FA] text-[36px] leading-normal sm:text-[48xp] sm:leading-[48px] md:text-[54px] md:leading-[54px] lg:text-[71px] font-bold lg:leading-[71px]">
            DESIGN - Projeto experiências digitais que conectam as pessoas
          </TextAnimate>
        </div>


        <div className="w-full flex flex-col md:flex-row gap-12 lg:gap-[136px]">
          <div className="relative">
            <motion.div
              initial={{ scale: 0, opacity: 0, rotate: -45 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.8,
                ease: "easeOut",
              }}
              whileHover={{
                scale: 1.1,
                rotate: 10,
                transition: { duration: 0.3 },
              }}
              className="absolute -bottom-5 -right-2 sm:right-48 md:right-0 md:bottom-2 md:w-[40px] lg:-right-5 lg:-bottom-5 z-20"
            >
              <Image
                src={smileImage}
                width={48}
                alt="smile icon"
              />
            </motion.div>
            <Image
              src={experienceMark}
              width={1200}
              alt="Experience"
              className="absolute sm:w-[488px] sm:-left-6 -top-14 z-0"
            />
            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, filter: "blur(10px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{
                  duration: 1.5,
                  ease: "easeOut",
                }}
              >
                <ShineBorder
                  className="relative mx-4 lg:mx-0 p-0 overflow-hidden rounded-lg bg-transparent"
                  color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                >
                  <Image
                    src={bannerHero}
                    alt="Banner Hero"
                    className="w-auto sm:w-[388px] lg:w-[488px] lg:px-0 rounded-xl"
                  />
                </ShineBorder>
              </motion.div>
            </div>
          </div>

          <div className="flex flex-col gap-4 md:max-w-[388px] lg:max-w-[488px]">
            <TextAnimate animation="blurIn" as="h2" className="text-[#F4F6FA] text-xl lg:text-[28px] font-bold">Sou apaixonado por criar soluções que simplificam a vida das pessoas</TextAnimate>
            <TextAnimate animation="fadeIn" by="line" as="p" className="text-[#F4F6FA] opacity-80 text-base lg:text-xl font-medium leading-tight">
              {/* <p className="text-[#F4F6FA] opacity-80 text-base lg:text-xl font-medium leading-tight"> */}
              {`Ao longo dos últimos 7 anos, tive a oportunidade de liderar projetos que não apenas resolvem problemas, mas também criam conexões reais entre pessoas e produtos.`}
              {/* </p> */}
            </TextAnimate>
          </div>
        </div>
      </section>

      <section className="container flex justify-between items-center px-4 py-6 sm:px-6 md:py-[50px] border-t border-[#17171b]">
        <div className="flex items-center gap-4">
          <Mouse width={16} className="text-[#F4F6FA]" />
          <span className="text-[#F4F6FA] uppercase text-xs md:text-sm font-bold">Conheça meu trampo</span>
        </div>
        <div className="flex gap-4">
          <Link href="https://medium.com/@agodiniz" target="_blank" rel="noopener noreferrer">
            <Button className="rounded-full w-[32px] h-[32px] md:w-[40px] md:h-[40px] p-0">
              <Image src={mediumIcon} alt="Medium" width={21} className="w-4 md:5" />
            </Button>
          </Link>
          <Link href="https://www.linkedin.com/in/tiago-diniz/" target="_blank" rel="noopener noreferrer">
            <Button className="rounded-full w-[32px] h-[32px] md:w-[40px] md:h-[40px] p-0">
              <Image src={linkedinIcon} alt="Medium" width={21} className="w-4 md:5" />
            </Button>
          </Link>
          <Link href="https://www.instagram.com/tiago.uxe/" target="_blank" rel="noopener noreferrer">
            <Button className="rounded-full w-[32px] h-[32px] md:w-[40px] md:h-[40px] p-0">
              <Image src={instagramIcon} alt="Medium" width={21} className="w-4 md:5" />
            </Button>
          </Link>
        </div>
      </section>

    </main>
  )
}
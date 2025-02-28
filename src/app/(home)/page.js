import Header from "./components/header/header";
import ProfileSection from "./components/profile/profile";
import About from "./components/about/about";
import Experience from "./components/experience/page";
import Hero from "./components/hero/hero";
import Career from "./components/career/page";
import Partners from "./components/partners/partners";

export default function Home() {
  return (
    <>
    <Header />
    <main className="flex flex-col justify-center items-center">
      <Hero />
      <Partners />
      <Career />
      {/*<ProfileSection />
      <About />
      <Experience /> */}
    </main>
    </>
  );
}

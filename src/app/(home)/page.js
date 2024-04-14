import Header from "./components/header/header";
import ProfileSection from "./components/profile/profile";
import About from "./components/about/about";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center">
      <Header />
      <ProfileSection />
      <About />
    </main>
  );
}

export default function About() {
  return (
    <div className="flex flex-col gap-6 justify-center sm:max-w-[720px] w-full p-4">
      <div className="divide-y-1 divide-y divide-dashed divide-[#4D4D4D]">
        <div></div>
        <div></div>
      </div>
      <div className="flex flex-col gap-6 sm:flex-row">
        <h2 className="text-[#4D4D4D] font-bold text-[28px] w-full">Sobre</h2>
        <p className="text-[#4D4D4D] text-sm font-medium leading-tight w-full">
          Sou apaixonado por design e acredito no seu poder transformador para
          criar experiências que realmente impactam a vida das pessoas. Acredito
          que a simplicidade e a clareza são essenciais para um design eficaz, e
          é isso que busco incorporar em cada projeto que lidero.
        </p>
      </div>
    </div>
  );
}

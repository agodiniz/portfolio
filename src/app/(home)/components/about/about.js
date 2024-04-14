export default function About() {
  return (
    <div className="flex flex-col gap-6 justify-center sm:max-w-[720px] w-full p-4">
      <div className="divide-y-1 divide-y divide-dashed divide-[#4D4D4D]">
        <div></div>
        <div></div>
      </div>
      <div className="flex flex-col gap-6 sm:flex-row">
        <h2 className="text-[#4D4D4D] font-medium text-[28px] w-full">Sobre</h2>
        <p className="text-[#4D4D4D] text-base font-medium leading-tight w-full">
          Tiago é um Designer de Produto que se especializou em Engenharia de
          Usabilidade pelo Instituto de Tecnologia Guwahati. Atualmente ele
          trabalha na Sufex, ajudando a melhorar os produtos e serviços da
          empresa juntamente com designers e desenvolvedores.
        </p>
      </div>
    </div>
  );
}

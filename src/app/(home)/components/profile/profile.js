import Image from "next/image";
import profilePhoto from "../../../../../public/assets/photo.png";

export default function ProfileSection() {
  return (
    <div className="flex flex-col gap-4 justify-center items-center lg:max-w-[720px] w-full p-4">
      <div className="relative p-6">
        <Image
          src={profilePhoto}
          alt="Picture of the author"
          className="rotate-[-1deg] w-[260px] sm:w-[330px]"
        />
        <div className="px-5 py-3 rounded-xl border-[3px] border-[#4D4D4D] absolute right-0 top-0 rotate-12">
          <h6 className="text-[#4D4D4D] text-center text-base sm:text-lg">Available for work</h6>
        </div>
      </div>

      <div className="bg-[#4D4D4D] flex flex-col gap-2 items-center p-4 rotate-1 w-full max-w-[384px] sm:max-w-[504px]">
        <h2 className="text-[#F1E9DA] text-4xl">Tiago Diniz</h2>
        <span className="text-[#F1E9DA] text-sm sm:text-base">
          Product Designer / UX Engineer
        </span>
      </div>
      <div className="mt-4 divide-y-1 divide-y divide-dashed divide-[#473333]">
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

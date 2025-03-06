import Image from "next/image";
import P1 from "@/asset/first.jpeg";
export default function Home() {
  return (
    <div className="bg-black h-screen flex  px-28">
      <div className=" w-[50%]">
        <h1 className="text-red-500 font-medium mt-5">Welcome to</h1>

        <div className="mr-5">
          <h1 className="font-bold text-white text-[18px] mt-3">Zai Systems</h1>
          <p className="text-white mt-3 font-normal text-[14px] leading-[25px] tracking-[2px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>

          <p className="text-gray-300 leading-[25px] mt-6 tracking-[3px]">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters
          </p>
        </div>
        <div className="flex justify-between  items-center  mx-10 mt-8">
          <h1 className="text-red-500 font-bold text-[20px] opacity-75">
            Owais Ahmad Khan , CEO
          </h1>
          <p className="text-white">"</p>
        </div>
        <div className="flex gap-10">
          <div className="h-[80px] bg-red-500 w-[1px] mt-5"> </div>

          <p className="text-white leading-[25px] mt-5 tracking-[3px]">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form
          </p>
        </div>
        <button className="px-8 py-2 bg-gray-600 text-white mt-7">
          More About
        </button>
      </div>

      <div className="w-[50%]">
        <div className="h-screen">
          <Image src={P1} alt="picture" className="h-full" />
        </div>
      </div>
    </div>
  );
}

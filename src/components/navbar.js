import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="w-full bg-[#c0cfb2] ">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between py-4">
        <div className="flex items-center">
          <div className=" text-base py-4 pr-12 flex items-center">
            <div className="pr-4">
              <Image
                alt="ngu"
                className="rounded-full bg-white p-2"
                src="/logo2.svg"
                width={48}
                height={48}
              />
            </div>

            <div className=" font-bold">AIWIS</div>
          </div>
          <div className=" text-base py-4 px-8 font-bold">
            <Link href="/">Trang chủ</Link>
          </div>
          <div className=" text-base py-4 px-8 font-bold">Tìm Bác Sĩ</div>
          <div className=" text-base py-4 px-8 font-bold">Tìm Bệnh Viện</div>
          <div className=" text-base py-4 px-8 font-bold">Aiwis Prime</div>
          <div className=" text-base py-4 px-8 font-bold">CSKH</div>
        </div>
        <div className="flex">
          <div className="text-base py-4 px-8 font-bold">
            <Link href="/login">Đăng nhập</Link>
          </div>
          <button className="text-base rounded-full py-4 px-8 bg-primary-color text-white font-bold">
            <Link href="/register">Đăng ký</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

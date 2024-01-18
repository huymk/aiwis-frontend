import Image from "next/image";
import ListItem from "../components/listitem";
async function getMedicine() {
  const response = await fetch(`http://localhost:3000/api/medicines`, {
    method: "GET",
  });
  return response.json();
}
export default async function Home() {
  const data = await getMedicine();
  console.log(data);
  return (
    <div>
      <div className="w-full h-screen bg-gradient-to-r from-navbar-start to-navbar-end relative ">
        <h2 className="font-bold text-center leading-tight text-3xl py-5">
          Giải đáp mọi mối lo ngại
        </h2>
        <h1 className="font-bold text-center leading-tight text-6xl pb-5">
          Được các Bác Sĩ tư vấn miễn phí!
        </h1>
        <p className="text-center leading-7 pb-7">
          24/7 Video Call trò chuyện với Bác Sĩ. Được bảo mật an toàn.
        </p>

        <div>
          <form className="relative">
            <label className="mb-2 text-sm font-medium text-primary-color sr-only">
              Tìm kiếm
            </label>
            <div className="relative w-1/2 m-auto shadow-md rounded-full">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-6 inline-block"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </div>

              <input
                type="search"
                id="default-search"
                className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-white focus:ring-blue-500 focus:border-blue-500"
                placeholder="Nơi ở hiện tại của bạn"
                required
              />
              <button
                type="submit"
                className="text-white absolute right-2.5 bottom-2.5 bg-primary-color hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2 m-auto  "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-6 inline-block"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
                Tìm kiếm
              </button>
              <div className="absolute py-6 w-full">
                <p className="font-bold pb-6">Có phải bạn đang cần: </p>
                <div className="grid grid-cols-4 gap-3">
                  <div className="bg-white rounded-xl p-3 shadow-md">
                    <h1 className="font-bold text-xl">Bác Sĩ</h1>
                    <p className="text-sm">Đặt lịch khám</p>
                  </div>
                  <div className="bg-white rounded-xl p-3 shadow-md">
                    <h1 className="font-bold text-xl">Lời khuyên</h1>
                    <p className="text-sm">Từ những chuyên gia</p>
                  </div>
                  <div className="bg-white rounded-xl p-3 shadow-md">
                    <h1 className="font-bold text-xl">Dược phẩm</h1>
                    <p className="text-sm">Các Sản phẩm y tế</p>
                  </div>
                  <div className="bg-white rounded-xl p-3 shadow-md">
                    <h1 className="font-bold text-xl">Chẩn đoán</h1>
                    <p className="text-sm">Kiểm tra và khám bệnh</p>
                  </div>
                </div>
                <div className="left-0 right-0 mt-10 flex absolute shadow-lg rounded-3xl">
                  <div className="bg-white w-full rounded-3xl object-fill">
                    <img
                      alt="ngu"
                      className="w-full bg-white rounded-3xl object-content p-3"
                      src="/doccallvideo.jpeg"
                      width={900}
                      height={50}
                    />
                  </div>
                  <div className="p-6 -left-20 top-20 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4 absolute">
                    <div className="shrink-0">
                      <Image
                        alt="ngu"
                        className=""
                        src="./chat.svg"
                        width={24}
                        height={24}
                      />
                    </div>
                    <div>
                      <div className="text-xl font-medium text-black">
                        Khám Bệnh
                      </div>
                      <p className="text-slate-500">
                        Khám bệnh hoàn toàn miễn phí!{" "}
                      </p>
                    </div>
                  </div>
                  <div className="p-6 bottom-20 -right-20 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4 absolute">
                    <div className="shrink-0">
                      <Image
                        alt="ngu"
                        className=""
                        src="./phone.svg"
                        width={24}
                        height={24}
                      />
                    </div>
                    <div>
                      <div className="text-xl font-medium text-black">
                        Dịch vụ 24/7
                      </div>
                      <p className="text-slate-500">Sẵn sàng bất cứ lúc nào</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="h-screen bg-background">
        <div className="pt-80">
          <h1 className="font-bold text-center w-2/5 leading-tight text-4xl pb-5 mx-auto ">
            Tham khảo ý kiến ​​trực tuyến của các bác sĩ hàng đầu
          </h1>
          <p className="mt-3 text-grey-100 text-center opacity-50">
            Tư vấn trực tuyến riêng tư với các chuyên gia từ nhiều lĩnh vực
          </p>
          <div className="grid grid-cols-6 gap-8 max-w-screen-xl mx-auto  pt-10 group">
            <div className="px-3 py-9 hover:shadow-xl group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 cursor-pointer rounded-xl bg-gray-100 bg-opacity-50 text-center">
              <Image
                alt="ngu"
                className="mx-auto rounded-full bg-white mb-4"
                src="/logo.png"
                width={48}
                height={18}
              />
              <p className="font-bold">Trẻ Em</p>
              <button className="mt-3 px-2 py-1 rounded-full bg-primary-color font-bold bg-opacity-80 text-white">
                Khám ngay
              </button>
            </div>
            <div className="px-3 py-9 hover:shadow-xl group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 cursor-pointer rounded-xl bg-gray-100 bg-opacity-50 text-center">
              <Image
                alt="ngu"
                className="mx-auto rounded-full bg-white mb-4"
                src="/logo.svg"
                width={48}
                height={18}
              />
              <p className="font-bold">Dạ dày</p>
              <button className="mt-3 px-2 py-1 rounded-full bg-primary-color font-bold bg-opacity-80 text-white">
                Khám ngay
              </button>
            </div>
            <div className="px-3 py-9 hover:shadow-xl group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 cursor-pointer rounded-xl bg-gray-100 bg-opacity-50 text-center">
              <Image
                alt="ngu"
                className="mx-auto rounded-full bg-white mb-4"
                src="/logo.svg"
                width={48}
                height={18}
              />
              <p className="font-bold">Khoa Tâm Thần</p>
              <button className="mt-3 px-2 py-1 rounded-full bg-primary-color font-bold bg-opacity-80 text-white">
                Khám ngay
              </button>
            </div>
            <div className="px-3 py-9 hover:shadow-xl group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 cursor-pointer rounded-xl bg-gray-100 bg-opacity-50 text-center">
              <Image
                alt="ngu"
                className="mx-auto rounded-full bg-white mb-4"
                src="/logo.svg"
                width={48}
                height={18}
              />
              <p className="font-bold">Khoa Tiết Niệu</p>
              <button className="mt-3 px-2 py-1 rounded-full bg-primary-color font-bold bg-opacity-80 text-white">
                Khám ngay
              </button>
            </div>
            <div className="px-3 py-9 hover:shadow-xl group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 cursor-pointer rounded-xl bg-gray-100 bg-opacity-50 text-center">
              <Image
                alt="ngu"
                className="mx-auto rounded-full bg-white mb-4"
                src="/logo.svg"
                width={48}
                height={18}
              />
              <p className="font-bold">Khoa Da Liễu</p>
              <button className="mt-3 px-2 py-1 rounded-full bg-primary-color font-bold bg-opacity-80 text-white">
                Khám ngay
              </button>
            </div>
            <div className="px-3 py-9 hover:shadow-xl group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 cursor-pointer rounded-xl bg-gray-100 bg-opacity-50 text-center">
              <Image
                alt="ngu"
                className="rounded-full mx-auto bg-white mb-4"
                src="/logo.svg"
                width={48}
                height={18}
              />
              <p className="font-bold">Bệnh truyền nhiễm</p>
              <button className="mt-3 px-2 py-1 rounded-full bg-primary-color font-bold bg-opacity-80 text-white">
                Khám ngay
              </button>
            </div>
          </div>
        </div>
        <div className="justify-center items-center flex my-10 ">
          <button className=" px-6 py-3 text-white font-bold bg-primary-color rounded-full hover:opacity-50">
            Tất cả chuyên Khoa
          </button>
        </div>
        <div className="w-full bg-gradient-to-r from-navbar-start to-navbar-end py-10">
          <div className="mx-auto text-center text-white font-bold bg-gradient-to-b from-[#9fd6f9] to-[#1097da] w-52 rounded-xl px-2 py-1 mb-4">
            Sản phẩm bán chạy
          </div>
          <ListItem data={data}></ListItem>
        </div>
        <div className="mt-32 mx-auto w-full max-w-screen-xl grid grid-cols-7 gap-x-32">
          <div className="col-span-3">
            <div className="bg-bgpurple w-full rounded-3xl object-fill">
              <img
                alt="ngu"
                className="w-full rounded-3xl object-content translate-x-10 -translate-y-10"
                src="/squaredoc.jpeg"
              />
            </div>
          </div>
          <div className="col-span-4 col-start-5 align-middle">
            <h1 className="font-bold text-5xl mt-7 ">Bác Sĩ gần nhất</h1>
            <p className="w-96 mt-7 text-lg">
              Chọn Bác Sĩ mong muốn ở gần bạn để đặt lịch khám, khám bệnh online
              bằng Video. Rất dễ dàng và tiện lợi.
            </p>
            <button className="font-bold mt-7 px-6 py-3 text-white bg-primary-color rounded-full hover:opacity-50">
              Tìm Bác Sĩ Ngay Bây Giờ
            </button>
          </div>
        </div>
        <div className="mt-32 mx-auto w-full max-w-screen-xl grid grid-cols-7 grid-flow-col gap-x-32">
          <div className="col-span-4">
            <h1 className="font-bold text-5xl mt-7 ">Chăm sóc trực tuyến</h1>
            <p className="w-96 mt-7 text-lg">
              Hãy cho chúng tôi biết về sức khỏe của bạn và Bác Sĩ sẽ trả lời
              chỉ trong 60s.
            </p>
            <button className="font-bold mt-7 px-6 py-3 text-white bg-primary-color rounded-full hover:opacity-50">
              Đặt lịch hẹn
            </button>
          </div>
          <div className="col-span-3 col-start-5">
            <div className="bg-bgcyan w-full rounded-3xl object-fill">
              <img
                alt="ngu"
                className="w-full rounded-3xl object-fill -translate-x-10 -translate-y-10"
                src="/squaredoc.jpeg"
              />
            </div>
          </div>
        </div>
        <div className="mt-24 max-w-screen-xl mx-auto h -80 rounded-xl bg-gradient-to-r from-gradientOrangeStart to-gradientOrangeEnd">
          <div className="mt-32 mx-auto w-full max-w-screen-xl grid grid-cols-2 grid-flow-col">
            <div className="">
              <div className="w-full rounded-3xl flex justify-end">
                <img alt="ngu" className=" object-fill" src="/docmember.png" />
              </div>
            </div>
            <div className="align-middle my-auto ">
              <div className="w-36 mt-7 font-bold px-6 py-3 bg-white rounded-full bg-opacity-80">
                Aiwis Prime
              </div>
              <p className="w-full font-bold text-3xl mt-7 ">
                Miễn phí khám bệnh online
              </p>
              <p className="w-full font-bold text-2xl ">
                Bắt đầu chỉ với 299.000VNĐ/tháng
              </p>
              <button className="font-bold mt-7 px-6 py-3 text-white bg-primary-color rounded-full hover:opacity-50">
                Tham gia hội viên ngay
              </button>
            </div>
          </div>
        </div>
        <div className="mt-32 mx-auto w-full max-w-screen-xl grid grid-cols-7 grid-flow-col gap-x-32">
          <div className="col-span-3">
            <div className="bg-bgpurple w-full rounded-3xl object-fill">
              <img
                alt="ngu"
                className="w-full rounded-3xl object-content translate-x-6 -translate-y-6"
                src="/squaredoc.jpeg"
              />
            </div>
          </div>
          <div className="col-span-4 align-middle my-auto">
            <h1 className="font-bold text-4xl w-96 ">
              Những Bệnh nhân nói gì về dịch vụ của chúng tôi
            </h1>
            <p className="w-96 mt-7">
              "Rất hữu ích. Dễ dàng hơn nhiều khi thao tác trên máy tính. Cho
              phép tìm kiếm nhanh chóng và dễ dàng với tính năng đặt chỗ nhanh
              chóng. Thậm chí còn lưu giữ lịch sử của các bác sĩ đã đến khám."
            </p>
            <div className="mt-4 flex ">
              <div className="object-cover">
                <img
                  alt="ngu"
                  className="w-16 h-16  rounded-full shadow-lg"
                  src="/14.jpg"
                />
              </div>
              <div className="mx-4 my-auto">
                <p className="font-bold">Nam</p>
                <p className="opacity-50 text-xs">Nhân viên bán hàng</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

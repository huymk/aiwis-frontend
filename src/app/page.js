import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="w-full h-screen bg-gradient-to-r from-navbar-start to-navbar-end relative ">
        <h2 className="font-bold text-center leading-tight text-3xl py-5">
          Remove Doubts
        </h2>
        <h1 className="font-bold text-center leading-tight text-6xl pb-5">
          Free Doctor Consultation
        </h1>
        <p className="text-center leading-7">
          24/7 Video consultation. Private consultation + Audio call
        </p>
        <p className="text-center leading-7 pb-7">
          Starts at just $10. Exclusively on mobile app
        </p>
        <div>
          <form className="relative">
            <label className="mb-2 text-sm font-medium text-primary-color sr-only">
              Search
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
                placeholder="Your location"
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
                Search
              </button>
              <div className="absolute py-6 w-full">
                <p className="font-bold pb-6">Are you looking For:</p>
                <div className="grid grid-cols-4 gap-3">
                  <div className="bg-white rounded-xl p-3 shadow-md">
                    <h1 className="font-bold text-xl">Doctors</h1>
                    <p className="text-sm">Book an appointment</p>
                  </div>
                  <div className="bg-white rounded-xl p-3 shadow-md">
                    <h1 className="font-bold text-xl">Consult</h1>
                    <p className="text-sm">With top doctors</p>
                  </div>
                  <div className="bg-white rounded-xl p-3 shadow-md">
                    <h1 className="font-bold text-xl">Pharmacy</h1>
                    <p className="text-sm">Medicine products</p>
                  </div>
                  <div className="bg-white rounded-xl p-3 shadow-md">
                    <h1 className="font-bold text-xl">Diagnostics</h1>
                    <p className="text-sm">Tests and checkups</p>
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
                        Consultant
                      </div>
                      <p className="text-slate-500">
                        First consultant is totally free!
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
                        24/7 Service
                      </div>
                      <p className="text-slate-500">
                        We are available when you want
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="h-screen bg-white">
        <div className="pt-80">
          <h1 className="font-bold text-center w-2/5 leading-tight text-4xl pb-5 mx-auto ">
            Consult Top Doctors Online For Any Health Concern
          </h1>
          <p className="mt-3 text-grey-100 text-center opacity-50">
            Private online consultations with verified doctors in all
            specialists
          </p>
          <div className="grid grid-cols-6 gap-8 max-w-screen-xl mx-auto  pt-10 group">
            <div className="px-3 py-9 hover:shadow-xl group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 cursor-pointer rounded-xl bg-gray-100 bg-opacity-50 text-center">
              <Image
                alt="ngu"
                className="mx-auto rounded-full bg-white mb-4"
                src="/logo.svg"
                width={48}
                height={18}
              />
              <p className="font-bold">Baby Health</p>
              <button className="mt-3 px-2 py-1 rounded-full bg-primary-color text-bold bg-opacity-80 text-white">
                Consult Now
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
              <p className="font-bold">Stomach</p>
              <button className="mt-3 px-2 py-1 rounded-full bg-primary-color text-bold bg-opacity-80 text-white">
                Consult Now
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
              <p className="font-bold">Psychiatry</p>
              <button className="mt-3 px-2 py-1 rounded-full bg-primary-color text-bold bg-opacity-80 text-white">
                Consult Now
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
              <p className="font-bold">Urology</p>
              <button className="mt-3 px-2 py-1 rounded-full bg-primary-color text-bold bg-opacity-80 text-white">
                Consult Now
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
              <p className="font-bold">Dermatology</p>
              <button className="mt-3 px-2 py-1 rounded-full bg-primary-color text-bold bg-opacity-80 text-white">
                Consult Now
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
              <p className="font-bold">Infectous Disease</p>
              <button className="mt-3 px-2 py-1 rounded-full bg-primary-color text-bold bg-opacity-80 text-white">
                Consult Now
              </button>
            </div>
          </div>
        </div>
        <div className="justify-center items-center flex my-10 ">
          <button className=" px-6 py-3 text-white bg-primary-color rounded-full hover:opacity-50">
            See All Specialities
          </button>
        </div>
        <div className="mt-32 mx-auto w-full max-w-screen-xl grid grid-cols-7 grid-flow-col gap-x-32">
          <div className="col-span-4">
            <div className="bg-bgpurple w-full rounded-3xl object-fill">
              <img
                alt="ngu"
                className="w-full rounded-3xl object-content translate-x-10 -translate-y-10"
                src="/doccallvideo.jpeg"
              />
            </div>
          </div>
          <div className="col-span-3 align-middle">
            <h1 className="font-bold text-4xl mt-7 ">Your Nearest Doctor</h1>
            <p className="w-96 mt-7">
              Select prefered doctors slot time to book in-clinic or video
              consultation. It's very easy and simple process to booking
            </p>
            <button className="mt-7 px-6 py-3 text-white bg-primary-color rounded-full hover:opacity-50">
              Find Doctor Now
            </button>
          </div>
        </div>
        <div className="mt-32 mx-auto w-full max-w-screen-xl grid grid-cols-7 grid-flow-col gap-x-32">
          <div className="col-span-3 align-middle">
            <h1 className="font-bold text-4xl mt-7 ">Urgent Online Care</h1>
            <p className="w-96 mt-7">
              Tell us your health concern and we will assign you a top doctor in
              60 secs.
            </p>
            <button className="mt-7 px-6 py-3 text-white bg-primary-color rounded-full hover:opacity-50">
              Take Appointment
            </button>
          </div>
          <div className="col-span-4">
            <div className="bg-bgcyan w-full rounded-3xl object-fill">
              <img
                alt="ngu"
                className="w-full rounded-3xl object-content -translate-x-10 -translate-y-10"
                src="/doccallvideo.jpeg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

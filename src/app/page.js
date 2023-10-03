import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-grey">
      <div className="w-screen h-screen bg-gradient-to-r from-navbar-start to-navbar-end relative ">
        <h2 className="font-bold text-center leading-tight text-3xl py-5">
          Remove Doubts
        </h2>
        <h1 className="font-bold text-center leading-tight text-7xl pb-5">
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
            <label
              for="default-search"
              class="mb-2 text-sm font-medium text-primary-color sr-only"
            >
              Search
            </label>
            <div class="relative w-1/2 m-auto shadow-md rounded-full">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-5 h-6 inline-block"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </div>

              <input
                type="search"
                id="default-search"
                class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-white focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your location"
                required
              />
              <button
                type="submit"
                class="text-white absolute right-2.5 bottom-2.5 bg-primary-color hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2 m-auto  "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-5 h-6 inline-block"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
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
                <div className="items-center mt-10 flex absolute">
                  <div className="bg-white rounded-3xl shadow-lg">
                    <Image
                      alt="ngu"
                      className="bg-white rounded-3xl object-cover p-3"
                      src="/doccallvideo.jpeg"
                      width={800}
                      height={50}
                    />
                  </div>
                  <div class="p-6 -left-20 top-20 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4 absolute">
                    <div class="shrink-0">
                      <Image
                        alt="ngu"
                        className=""
                        src="./chat.svg"
                        width={24}
                        height={24}
                      />
                    </div>
                    <div>
                      <div class="text-xl font-medium text-black">
                        Consultant
                      </div>
                      <p class="text-slate-500">
                        First consultant is totally free!
                      </p>
                    </div>
                  </div>
                  <div class="p-6 bottom-20 -right-20 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4 absolute">
                    <div class="shrink-0">
                      <Image
                        alt="ngu"
                        className=""
                        src="./phone.svg"
                        width={24}
                        height={24}
                      />
                    </div>
                    <div>
                      <div class="text-xl font-medium text-black">
                        24/7 Service
                      </div>
                      <p class="text-slate-500">
                        We are available when you want
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>

        <div></div>
      </div>
      <div className="h-screen"></div>
    </div>
  );
}

import Image from "next/image"

export default function Navbar() {
    return (
        <div className=" bg-gradient-to-r from-navbar-start to-navbar-end ">
            
            <div className="max-w-screen-xl mx-auto flex items-center justify-between py-4">
                <div className="flex items-center">
                    <div className=" text-base py-4 pr-12 flex items-center">
                        <div className="pr-4">
                        <Image
                        alt="ngu"
                        className="rounded-full bg-white"
                        src='/logo.svg'
                        width={32}
                        height={18}
                        />
                        </div>
                        

                        <div className=" font-bold">AIWIS</div>
                    </div>
                    <div className=" text-base py-4 px-8 ">Home</div>
                    <div className=" text-base py-4 px-8">Find Doctors</div>
                    <div className=" text-base py-4 px-8">Find Medical</div>
                    <div className=" text-base py-4 px-8">Aiwis Prime</div>
                    <div className=" text-base py-4 px-8">Help</div>
                </div>
                <div className="flex">
                <div className=" text-base py-4 px-8">Log in</div>
                <button className="text-base rounded-full py-4 px-8 bg-primary-color text-white">Sign in</button>
                </div>
                

            </div>
            
        </div>
            
    )
}
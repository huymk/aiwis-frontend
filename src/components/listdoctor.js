import Image from "next/image";

export default async function ListDoctor(data) {
  return (
    <div className="max-w-screen-xl grid grid-cols-6 gap-4 mx-auto">
      {data.data.map((doctor, i) => {
        return (
          <div
            className="border-2 rounded-lg p-3 bg-white hover:border-[#9fd6f9] hover:bg-slate-100"
            key={i}
          >
            <div className="w-full">
              <img
                className="rounded-lg bg-white mb-2 h-40 w-full"
                src={doctor.image_url}
              ></img>
              <div className="text-justify font-bold">{doctor.name}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

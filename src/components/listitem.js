import Image from "next/image";

async function getMedicine() {
  const response = await fetch(``, {
    method: "GET",
  });
  return response.json();
}
export default async function ListItem(data) {
  return (
    <div className="max-w-screen-xl grid grid-cols-6 gap-4 mx-auto ">
      {data.data.map((medicine, i) => {
        return (
          <div
            className="border-2 rounded-lg p-4 bg-white relative hover:border-[#9fd6f9] hover:bg-slate-100"
            key={i}
          >
            <div className="w-full">
              <img
                className="rounded-lg bg-white mb-2 h-32 w-full"
                src={medicine.image_url}
              ></img>
              <div className="text-justify font-bold mb-6">{medicine.name}</div>
            </div>

            <div className="text-blue-500 text-xs font-bold p-4 absolute bottom-0 left-0 mt-4">
              {medicine.price.toLocaleString("it-IT", {
                style: "currency",
                currency: "VND",
              })}{" "}
              / {medicine.unit}
            </div>
          </div>
        );
      })}
    </div>
  );
}

import Image from "next/image";

async function getMedicine() {
  const response = await fetch(`http://localhost:3000/api/medicines`, {
    method: "GET",
  });
  return response.json();
}
export default async function ListItem(data) {
  return (
    <div className="max-w-screen-xl grid grid-cols-6 gap-4 mx-auto">
      {data.data.map((medicine) => {
        return (
          <div className="border-2 rounded-lg p-3 bg-white hover:border-[#9fd6f9] hover:bg-slate-100">
            <div className="w-full">
              <img
                className="rounded-lg bg-white mb-2 h-32 w-full"
                src={medicine.url}
              ></img>
              <div className="text-justify font-bold">{medicine.name}</div>
            </div>

            <div className="text- text-blue-500 text-xs font-bold">
              {medicine.price.toLocaleString("it-IT", {
                style: "currency",
                currency: "VND",
              })}{" "}
              / Hộp
            </div>

            <div className="text-left font-extrabold text-xs text-red-500">
              Số lượng: {medicine.stock}
            </div>
          </div>
        );
      })}
    </div>
  );
}

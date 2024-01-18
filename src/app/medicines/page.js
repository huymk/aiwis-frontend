import Image from "next/image";

async function getMedicine() {
  const response = await fetch(`http://localhost:3000/api/medicines`, {
    method: "GET",
  });
  return response.json();
}
export default async function ListItem(data) {
  return (
    <div className="w-full bg-gradient-to-r from-navbar-start to-navbar-end">
      <div className="max-w-screen-xl grid grid-cols-6 gap-4 mx-auto">
        {data.map((medicine) => {
          return (
            <div className="border rounded-lg p-3 bg-white">
              <div className="w-full">
                <Image
                  alt="ngu"
                  className="rounded-lg bg-white mb-2"
                  src="/ampi.jpg"
                  width={1000}
                  height={1000}
                />
              </div>
              <div className="text-center bold">{data.name}</div>
              <div className="text-left font-extrabold text-xs text-red-500">
                Số lượng: {data.stock}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

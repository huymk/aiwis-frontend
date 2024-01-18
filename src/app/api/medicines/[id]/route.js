import { exportTraceState } from "next/dist/trace";
import { NextResponse } from "next/server";

const medicines = [
  {
    id: 1,
    name: "Paracetamol",
    stock: 99,
  },
  {
    id: 2,
    name: "Effe",
    stock: 99,
  },
  {
    id: 3,
    name: "Troll",
    stock: 99,
  },
  {
    id: 4,
    name: "Berberin",
    stock: 99,
  },
];
export async function GET(request, context) {
  const { params } = context;
  return NextResponse.json({
    medicine: medicines.find((x) => x.id.toString() === params.id),
  });
}

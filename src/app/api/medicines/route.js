import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json([
    {
      id: 1,
      name: "Paracetamol",
      url: "https://duocphamtw3.com/wp-content/uploads/2023/07/PARACETAMOL-31.7.png",
      price: 100000,
      unit: "Hộp",
    },
    {
      id: 2,
      name: "Efferagal",
      url: "https://duocphamtw3.com/wp-content/uploads/2023/07/PARACETAMOL-31.7.png",
      price: 150000,
      unit: "Hộp",
    },
    {
      id: 3,
      name: "Panadol",
      url: "https://cdn.tgdd.vn/Products/Images/10244/129157/panadol-extra-hop180v-2-1.jpg",
      price: 20000,
      unit: "Hộp",
    },
    {
      id: 4,
      name: "Berberin",
      url: "https://cdn.nhathuoclongchau.com.vn/unsafe/https://cms-prod.s3-sgn09.fptcloud.com/IMG_1462_858e4e9236.jpg",
      price: 15000,
      unit: "Hộp",
    },
    {
      id: 5,
      name: "Natto Kinase",
      url: "https://cdn.nhathuoclongchau.com.vn/unsafe/636x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09235_e67b42c997.jpg",
      price: 25000,
      unit: "Hộp",
    },
    {
      id: 6,
      name: "Đại Tràng Hải Thượng Vương",
      url: "https://cdn.nhathuoclongchau.com.vn/unsafe/800x0/filters:quality(95)/https://cms-prod.s3-sgn09.fptcloud.com/00031834_dai_trang_hai_thuong_vuong_vesta_2x10_6583_616d_large_8353f860f6.jpg",
      price: 30000,
      unit: "Hộp",
    },
  ]);
}

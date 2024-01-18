import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json([
    {
      id: 1,
      name: "Paracetamol",
      stock: 99,
      url: "https://duocphamtw3.com/wp-content/uploads/2023/07/PARACETAMOL-31.7.png",
      price: 100000,
    },
    {
      id: 2,
      name: "Efferagal",
      stock: 99,
      url: "https://duocphamtw3.com/wp-content/uploads/2023/07/PARACETAMOL-31.7.png",
      price: 150000,
    },
    {
      id: 3,
      name: "Panadol",
      stock: 99,
      url: "https://cdn.tgdd.vn/Products/Images/10244/129157/panadol-extra-hop180v-2-1.jpg",
      price: 20000,
    },
    {
      id: 4,
      name: "Berberin",
      stock: 99,
      url: "https://cdn.nhathuoclongchau.com.vn/unsafe/https://cms-prod.s3-sgn09.fptcloud.com/IMG_1462_858e4e9236.jpg",
      price: 15000,
    },
    {
      id: 5,
      name: "Natto Kinase",
      stock: 99,
      url: "https://cdn.nhathuoclongchau.com.vn/unsafe/636x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09235_e67b42c997.jpg",
      price: 25000,
    },
    {
      id: 6,
      name: "Đại Tràng Hải Thượng Vương",
      stock: 99,
      url: "https://cdn.nhathuoclongchau.com.vn/unsafe/800x0/filters:quality(95)/https://cms-prod.s3-sgn09.fptcloud.com/00031834_dai_trang_hai_thuong_vuong_vesta_2x10_6583_616d_large_8353f860f6.jpg",
      price: 30000,
    },
  ]);
}

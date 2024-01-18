async function getMedicineById(medicineId: string) {
  const response = await fetch(
    `http://localhost:3000/api/medicines/${medicineId}`,
    {
      method: "GET",
    }
  );
  return response.json();
}
export default async function MedicineId({ params }: any) {
  const data = await getMedicineById(params.id);
  const medicine = data.medicines;
  console.log(medicine);
  return <h1> {medicine.name}</h1>;
}

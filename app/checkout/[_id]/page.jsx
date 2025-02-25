import CheckoutForm from "@/components/form/CheckoutForm";

export default async function CheckOut({ params }) {
  const g = await params;
  const res = await fetch(`http://localhost:3000/api/gadget/${g._id}`);
  const data = await res.json();
  console.log(data);
  return (
    <div>
      <CheckoutForm data={data}></CheckoutForm>
    </div>
  );
}

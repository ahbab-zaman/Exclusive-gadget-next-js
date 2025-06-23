import CheckoutForm from "@/components/form/CheckoutForm";

export default async function CheckOut({ params }) {
  const { _id } = params;

  const res = await fetch(`http://localhost:3000/api/gadget/${_id}`);

  if (!res.ok) {
    return <div>Error fetching gadget data</div>;
  }

  const data = await res.json();

  return (
    <div>
      <CheckoutForm data={data} />
    </div>
  );
}

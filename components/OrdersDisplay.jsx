const dummyOrders = [
  {
    id: 1,
    name: "iPhone 14 Pro",
    price: "$999",
    date: "2025-06-24",
    address: "123 Main St, NY",
    phone: "123-456-7890",
    image: "https://via.placeholder.com/100",
  },
  {
    id: 2,
    name: "MacBook Air M2",
    price: "$1299",
    date: "2025-06-20",
    address: "456 Market St, LA",
    phone: "987-654-3210",
    image: "https://via.placeholder.com/100",
  },
];

export default function OrdersDisplay() {
  return (
    <div className="p-4">
      {/* Card View (Mobile & Tablet) */}
      <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-6">
        {dummyOrders.map((order) => (
          <div
            key={order.id}
            className="border rounded-lg shadow p-4 bg-white flex flex-col"
          >
            <img
              src={order.image}
              alt={order.name}
              className="h-40 w-full object-cover rounded"
            />
            <h3 className="mt-3 text-lg font-semibold">{order.name}</h3>
            <p className="text-sm">Price: {order.price}</p>
            <p className="text-sm">Date: {order.date}</p>
            <p className="text-sm">Address: {order.address}</p>
            <p className="text-sm">Phone: {order.phone}</p>
          </div>
        ))}
      </div>

      {/* Table View (Large Screen) */}
      <div className="hidden lg:block">
        <table className="w-full border border-gray-200 mt-4">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left p-3 border">Image</th>
              <th className="text-left p-3 border">Name</th>
              <th className="text-left p-3 border">Price</th>
              <th className="text-left p-3 border">Date</th>
              <th className="text-left p-3 border">Address</th>
              <th className="text-left p-3 border">Phone</th>
            </tr>
          </thead>
          <tbody>
            {dummyOrders.map((order) => (
              <tr key={order.id} className="border-t">
                <td className="p-3 border">
                  <img
                    src={order.image}
                    alt={order.name}
                    className="h-16 w-16 object-cover rounded"
                  />
                </td>
                <td className="p-3 border">{order.name}</td>
                <td className="p-3 border">{order.price}</td>
                <td className="p-3 border">{order.date}</td>
                <td className="p-3 border">{order.address}</td>
                <td className="p-3 border">{order.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

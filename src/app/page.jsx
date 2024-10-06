import Image from "next/image";

export default function Home() {
  return (
    <div>
       <main className="container mx-auto max-w-[800px]">
            <div id="orders-container">
                <strong>Orders</strong>
                <p>Recent orders from your store.</p>

                <table>
                    <thead>
                        <tr>
                            <th>Customer</th>
                            <th>Status</th>
                            <th>Type</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order) => (
                            <tr key={order.$id}>
                                <td className="flex flex-col">
                                    <strong>{order.customer}</strong>
                                    <p>{order.customer_email}</p>
                                </td>
                                <td>{order.status}</td>
                                <td>{order.type}</td>
                                <td>${order.total}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </main>
    </div>
  );
}

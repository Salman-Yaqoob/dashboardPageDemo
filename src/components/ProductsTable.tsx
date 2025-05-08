import { MoreVertical } from "lucide-react";
import { useState } from "react";

const keyAcc = "2fF7_rDFu7MfWxFS3iOnBSedV6gqWNtRxYaP3gGo_xw";

const products = [
  {
    id: 1,
    name: "Apple Watch Series 7",
    image:
      "https://plus.unsplash.com/premium_photo-1681702114246-ffe628203982?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Electronics",
    price: "$269",
    sold: 22,
    profit: "$45",
    selected: true,
  },
  {
    id: 2,
    name: "Macbook Pro M1",
    image:
      "https://images.unsplash.com/photo-1686657984027-3f738de9fcbe?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Electronics",
    price: "$546",
    sold: 34,
    profit: "$125",
    selected: false,
  },
  {
    id: 3,
    name: "Dell Inspiron 15",
    image:
      "https://images.unsplash.com/photo-1705508216613-be1715a31212?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Electronics",
    price: "$444",
    sold: 64,
    profit: "$247",
    selected: false,
  },
  {
    id: 4,
    name: "HP Probook 450",
    image:
      "https://images.unsplash.com/photo-1743456056142-1aaf69656dfa?q=80&w=2068&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Electronics",
    price: "$499",
    sold: 72,
    profit: "$103",
    selected: false,
  },
];

export default function ProductTable() {
  const [table, setTable] = useState({});

  function handleTable(idx) {
    setTable((prev) => ({ ...prev, [idx]: !prev[idx] }));
  }
  return (
    <div className="bg-light-bg dark:bg-dark-bg text-dark-tx dark:text-light-tx col-span-2 overflow-x-auto rounded-lg border p-4 shadow-sm">
      <table className="min-w-full text-left text-sm">
        <thead className="text-sm font-semibold">
          <tr>
            <th className="p-4">Product Name</th>
            <th className="p-4">Category</th>
            <th className="p-4">Price</th>
            <th className="p-4">Sold</th>
            <th className="p-4">Profit</th>
            <th className="p-4"></th>
          </tr>
        </thead>
        <tbody className="divide-y">
          {products.map((item, id) => (
            <tr
              key={item.id}
              className="hover:bg-dark-bg/10 hover:dark:bg-light-bg/10 transition-colors duration-200"
            >
              <td className="flex items-center gap-3 p-4">
                <input
                  value={table[id]}
                  type="checkbox"
                  checked={table[id]}
                  readOnly
                  className="h-4 w-4 cursor-pointer"
                />
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-10 w-10 rounded-md object-cover"
                />
                <span className="font-medium">{item.name}</span>
              </td>
              <td className="text-medium-tx p-4">{item.category}</td>
              <td className="text-medium-tx p-4">{item.price}</td>
              <td className="text-medium-tx p-4">{item.sold}</td>
              <td className="text-medium-tx p-4">{item.profit}</td>
              <td className="p-4 text-right">
                <MoreVertical className="h-5 w-5 text-gray-400" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

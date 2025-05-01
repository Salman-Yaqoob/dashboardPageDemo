import { PlusCircle } from "lucide-react";

export default function SalesAnalyticsHeader() {
  return (
    <div className="flex items-start justify-between bg-white px-6 py-4">
      <div>
        <h2 className="text-2xl font-semibold text-gray-900">
          Sales Analytics
        </h2>
        <p className="text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultrices
          lectus sem.
        </p>
      </div>

      <button className="flex cursor-pointer items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700">
        Add New Item
        <PlusCircle size={18} />
      </button>
    </div>
  );
}

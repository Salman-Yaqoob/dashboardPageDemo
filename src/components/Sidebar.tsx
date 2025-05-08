import {
  SlidersHorizontal,
  Home,
  LayoutGrid,
  Box,
  Mail,
  ShoppingBag,
  Calendar,
  PieChart,
  FileText,
  MessageSquare,
  Settings,
  LogOut,
} from "lucide-react";

const icons = [
  { icon: <Home />, label: "Home" },
  { icon: <LayoutGrid />, label: "Grid" },
  { icon: <Box />, label: "Box" },
  { icon: <Mail />, label: "Mail" },
  { icon: <ShoppingBag />, label: "Shop" },
  { icon: <Calendar />, label: "Calendar" },
  { icon: <PieChart />, label: "Chart" },
  { icon: <FileText />, label: "Docs" },
  { divider: true },
  { icon: <MessageSquare />, label: "Chat" },
  { icon: <Settings />, label: "Settings" },
  { icon: <LogOut />, label: "Logout" },
];

function Sidebar() {
  return (
    <div className="relative flex w-16 flex-col items-center justify-between bg-slate-200 py-6 shadow-md dark:bg-slate-700">
      <div className="flex flex-col items-center space-y-8">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white">
          <SlidersHorizontal size={30} />
        </div>

        <div className="required: flex flex-col items-center space-y-6 *:last:absolute *:last:bottom-4 *:last:left-5">
          {icons.map((item, idx) =>
            item.divider ? (
              <hr
                key={idx}
                className="w-6 border-t border-gray-500 dark:bg-gray-50"
              />
            ) : (
              <button
                key={idx}
                className="cursor-pointer text-gray-500 transition hover:text-blue-600"
              >
                {item.icon}
              </button>
            ),
          )}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

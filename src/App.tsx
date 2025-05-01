import Navbar from "./components/Navbar";
import SalesAnalyticsHeader from "./components/SalesAnaly";
import Sidebar from "./components/Sidebar";
import Themes from "./components/Themes";

function App() {
  return (
    <div className="relative h-screen w-full bg-slate-50 dark:bg-slate-900">
      <Themes />
      <div className="flex">
        <Sidebar />
        <div className="mx-auto flex w-2xl flex-col gap-3 md:w-5xl lg:w-7xl">
          <Navbar />
          <SalesAnalyticsHeader />
          <hr className="bg-medium-tx" />
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default App;

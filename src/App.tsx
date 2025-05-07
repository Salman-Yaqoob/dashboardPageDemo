import EmailSentCard from "./components/Chart";
import Navbar from "./components/Navbar";
import SalesAnalyticsHeader from "./components/SalesAnaly";
import SalesGraphCard from "./components/SalesGraph";
import Sidebar from "./components/Sidebar";
import StatCards from "./components/StatCards";
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
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-[1fr_1fr_0.75fr]">
            <EmailSentCard />
            <SalesGraphCard />
            <StatCards />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

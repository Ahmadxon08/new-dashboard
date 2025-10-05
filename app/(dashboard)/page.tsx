import AppBarChart from "@/app/components/AppBarChart";
import AppAreaChart from "../components/AppAreaChart";
import AppPieChart from "../components/AppPieChart";
import CardList from "../components/CardList";
import TodoList from "../components/TodoList";

const HomePage = () => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-rows-3  md:grid-cols-3 w-full">
      <div className="bg-primary-foreground rounded-lg p-4 md:col-span-2">
        <AppBarChart />
      </div>

      <div className="bg-primary-foreground rounded-lg p-4 ">
        <CardList title="Popular Content" />
      </div>

      <div className="bg-primary-foreground rounded-lg p-2">
        <TodoList />
      </div>
      <div className="bg-primary-foreground rounded-lg p-2 md:col-span-2">
        <AppPieChart />
      </div>

      <div className="bg-primary-foreground rounded-lg p-4 md:col-span-2 ">
        <AppAreaChart />
      </div>

      <div className="bg-primary-foreground rounded-lg p-4">
        <CardList title="Letest Transactions" />
      </div>
    </div>
  );
};

export default HomePage;

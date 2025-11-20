import Counter from "./_counter";
import { DayAreaChart } from "./_day-area-chart";
import Desc from "./_desc";
import Emojis from "./_emojis";
import Friends from "./_friends";
import { MonthlyBarChart } from "./_monthly-bar-chart";
import User from "./_user";

export default function Home() {
  return (
    <div className="grid grid-cols-6 grid-rows-5 gap-2 h-[calc(100dvh-24px)] p-6">
      <div className="col-start-1 col-end-3 row-start-1 row-end-2">
        <User />
      </div>
      <div className="col-start-3 col-end-7 row-start-1 row-end-2 border">
        <Desc />
      </div>
      <div className="col-start-1 col-end-3 row-start-2 row-end-4 border">
        <Friends />
      </div>
      <div className="col-start-3 col-end-5 row-start-2 row-end-4 ">
        <Counter />
      </div>
      <div className="col-start-5 col-end-7 row-start-2 row-end-4 ">
        <Emojis />
      </div>
      <div className="col-start-1 col-end-4 row-start-4 row-end-6">
        <DayAreaChart />
      </div>
      <div className="col-start-4 col-end-7 row-start-4 row-end-6">
        <MonthlyBarChart />
      </div>
    </div>
  );
}

import { CounterCard } from "@/components/CounterCard";
import { cn } from "@/lib/utils";

const Dashboard = () => {
  return (
    <main>
      <div className="mt-10">
        <div>
          <h3 className="text-[#21252B] text-[18px] font-bold inline-block">
            My Attendance Summary
          </h3>
          <span className="text-[18px] pl-2">(January-2024)</span>
        </div>
        <div className="mt-[18px] grid grid-cols-1  sm:grid-cols-2 md:grid-cols-4 gap-4">
          <CounterCard className='gradient-card-gray'  />
          <CounterCard  className={'gradient-card-orange'} />
          <CounterCard className={'gradient-card-red'}   />
          <CounterCard className={'gradient-card-blue'}  />
        </div>
      </div>
    </main>
  );
};

export default Dashboard;

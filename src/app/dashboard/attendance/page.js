"use client";

import useEmployee from "@/hooks/useEmployee";

const Attendance = () => {
  const { isLoading, data } = useEmployee(1);

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div className="mt-6">
      <table className="border text-[14px] w-full">
        <thead className="border text-left">
          <th className="px-3 border">Date</th>
          <th className="px-3 border">status</th>
        </thead>
        {data?.employee?.attendance.map(({ date, status }, index) => {
          return (
            <tr className="border" key={index}>
              <td className="border  px-3">{date}</td>
              <td className="border  px-3">{status}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default Attendance;

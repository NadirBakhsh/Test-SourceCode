"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { Icons } from "../Icons";

export function CounterCard({ title, count, describe, className }) {
  const percentage = 66;

  return (
    <Card
      className={cn(
        "w-full h-[119px] py-5 rounded-[10px] border-none",
        className
      )}
    >
      <CardContent className="flex justify-between">
        <div className="flex flex-col justify-between gap-[5px] flex-1">
          <p className="text-sm text-white">Total Present</p>
          <h1 className="text-2xl font-semibold text-white">24</h1>
          <div className="text-[12px] text-white flex items-center gap-[5px]">
            <span>
              <Icons.growUpIcon />
            </span>
            <span> 31 DAYS</span>
          </div>
        </div>
        <div className="relative flex items-center justify-center">
          <div className="w-[64px] h-[64px]">
            <CircularProgressbar
              styles={buildStyles({
                pathColor: `#fff`,
                textColor: "#fff",
                trailColor: "#d6d6d6",
                strokeLinecap: "round",
                textSize: "12px",
              })}
              value={percentage}
              text={`${percentage}%`}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

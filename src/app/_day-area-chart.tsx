"use client";

import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "~/components/ui/chart";

const chartData = [
  { hour: "0:00", activity: 12 },
  { hour: "1:00", activity: 8 },
  { hour: "2:00", activity: 5 },
  { hour: "3:00", activity: 3 },
  { hour: "4:00", activity: 2 },
  { hour: "5:00", activity: 4 },
  { hour: "6:00", activity: 15 },
  { hour: "7:00", activity: 28 },
  { hour: "8:00", activity: 42 },
  { hour: "9:00", activity: 65 },
  { hour: "10:00", activity: 78 },
  { hour: "11:00", activity: 85 },
  { hour: "12:00", activity: 92 },
  { hour: "13:00", activity: 88 },
  { hour: "14:00", activity: 95 },
  { hour: "15:00", activity: 98 },
  { hour: "16:00", activity: 100 },
  { hour: "17:00", activity: 96 },
  { hour: "18:00", activity: 89 },
  { hour: "19:00", activity: 82 },
  { hour: "20:00", activity: 75 },
  { hour: "21:00", activity: 68 },
  { hour: "22:00", activity: 52 },
  { hour: "23:00", activity: 32 },
];

const chartConfig = {
  activity: {
    label: "Activity",
    color: "#7289da",
  },
} satisfies ChartConfig;

export function DayAreaChart() {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <CardTitle>
          Daily Activity
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1 flex items-center">
        <ChartContainer config={chartConfig} className="w-full h-full">
          <AreaChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <XAxis
              dataKey="hour"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <defs>
              <DottedBackgroundPattern config={chartConfig} />
            </defs>
            <Area
              dataKey="activity"
              type="natural"
              fill="url(#dotted-background-pattern-activity)"
              fillOpacity={0.4}
              stroke="var(--color-activity)"
              strokeWidth={0.8}
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

const DottedBackgroundPattern = ({ config }: { config: ChartConfig }) => {
  const items = Object.fromEntries(
    Object.entries(config).map(([key, value]) => [key, value.color])
  );
  return (
    <>
      {Object.entries(items).map(([key, value]) => (
        <pattern
          key={key}
          id={`dotted-background-pattern-${key}`}
          x="0"
          y="0"
          width="7"
          height="7"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="5" cy="5" r="1.5" fill={value} opacity={0.5}></circle>
        </pattern>
      ))}
    </>
  );
};

"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, XAxis } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
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
  { month: "January", messages: 1245 },
  { month: "February", messages: 1876 },
  { month: "March", messages: 2134 },
  { month: "April", messages: 1629 },
  { month: "May", messages: 2458 },
  { month: "June", messages: 2781 },
  { month: "July", messages: 1894 },
  { month: "August", messages: 2925 },
  { month: "September", messages: 2147 },
  { month: "October", messages: 2532 },
  { month: "November", messages: 2803 },
  { month: "December", messages: 1971 },
];

const chartConfig = {
  messages: {
    label: "Messages",
    color: "#7289da",
  },
} satisfies ChartConfig;

export function MonthlyBarChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          Monthly Messages
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar
              shape={<CustomGradientBar />}
              dataKey="messages"
              fill="var(--color-messages)"
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

const CustomGradientBar = (
  props: React.SVGProps<SVGRectElement> & { dataKey?: string }
) => {
  const { fill, x, y, width, height, dataKey } = props;

  return (
    <>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        stroke="none"
        fill={`url(#gradient-bar-pattern-${dataKey})`}
      />
      <rect x={x} y={y} width={width} height={2} stroke="none" fill={fill} />
      <defs>
        <linearGradient
          id={`gradient-bar-pattern-${dataKey}`}
          x1="0"
          y1="0"
          x2="0"
          y2="1"
        >
          <stop offset="0%" stopColor={fill} stopOpacity={0.5} />
          <stop offset="100%" stopColor={fill} stopOpacity={0} />
        </linearGradient>
      </defs>
    </>
  );
};


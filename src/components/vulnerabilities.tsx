import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";
import { Box, Stack, Typography } from "@mui/material";
interface DataItem {
  name: string;
  value: number;
  color: string;
}

const data: DataItem[] = [
  { name: "Stable", value: 85, color: "#599B96" },
  { name: "Vulnerable", value: 15, color: "#E09E50" },
];

const totalValue = data.reduce((sum, entry) => sum + entry.value, 0);
// Custom Legend content
const renderLegend = (props: any) => {
  const { payload } = props;
  return (
    <Stack gap={0.5}>
      {payload.map((entry: any, index: any) => (
        <Stack direction="row" alignItems="center" gap={0.5}>
          <svg width="8" height="8">
            <circle cx="3" cy="3" r="3" fill={entry.color} />
          </svg>
          <Typography
            variant="caption"
            component="span"
            key={`item-${index}`}
          >
            {entry.payload.name}: {((entry.payload.value / totalValue) * 100).toFixed(0)}%
          </Typography>
        </Stack>
      ))}
    </Stack>
  );
};
const Vulnerabilities = () => {
  return (
    <Box
      className="card-bg card-shadow skore-chart"
      px={{ xs: 2, md: 3 }}
      py={{ xs: 2, md: 3 }}
      borderRadius={3.5}
      mt={3}
    >
      <Typography textTransform="uppercase" variant="subtitle1">
        Vulnerabilities
      </Typography>
      <ResponsiveContainer width="100%" height="100%">
        <>
          <PieChart height={250} width={300}>
            <defs>
              <linearGradient
                id={`pattern-${data[0].name}`}
                x1="100"
                y1="50"
                x2="0"
                y2="50"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6782" />
                <stop offset="1" stopColor="#2D3E4E" />
              </linearGradient>
              <linearGradient
                id={`pattern-${data[1].name}`}
                x1="50"
                y1="0"
                x2="50"
                y2="50"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#E09E50" />
                <stop offset="1" stopColor="#BF7822" />
              </linearGradient>
              
            </defs>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius="80%"
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={`url(#pattern-${entry.name})`}
                />
              ))}
            </Pie>
            <Legend
              layout="horizontal"
              verticalAlign="bottom"
              align="center"
              content={renderLegend}
            />
            <Tooltip />
          </PieChart>
        </>
      </ResponsiveContainer>
    </Box>
  );
};
export default Vulnerabilities;

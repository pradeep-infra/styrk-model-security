import { Box, Typography } from "@mui/material";

import { Tooltip, ResponsiveContainer, Area, AreaChart, XAxis, YAxis, CartesianGrid } from "recharts";
const areaChartData = [
{ name: "Jan", modelsScanned: 400 },
  { name: "Feb", modelsScanned: 500 },
  { name: "Mar", modelsScanned: 700 },
  { name: "Apr", modelsScanned: 600 },
  { name: "May", modelsScanned: 400 },
  { name: "Jun", modelsScanned: 500 },
  { name: "Jul", modelsScanned: 700 },
  { name: "Aug", modelsScanned: 600 },
  { name: "Sep", modelsScanned: 900 },
  { name: "Oct", modelsScanned: 1100 },
  { name: "Nov", modelsScanned: 800 },
  { name: "Dec", modelsScanned: 600 },
];
const ModelsScanned = () => {
  return (
    <Box
      className="card-bg card-shadow skore-chart"
      px={{ xs: 2, md: 3 }}
      py={{ xs: 2, md: 3 }}
      borderRadius={3.5}
    >     
        <Typography textTransform="uppercase" variant="subtitle1">
          Model Scanned
        </Typography>
        <ResponsiveContainer width="100%" height={250}>
          <AreaChart
            data={areaChartData}
            margin={{ top: 0, right: 5, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorUv1" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#E09E50" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#E09E50" stopOpacity={1} />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} stroke="#F2F8F7" />
            <XAxis
              dataKey="name"
              tick={{ fontSize: 12 }}
              tickFormatter={(value: string) => value.charAt(0)}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickCount={8}
              tickFormatter={() => ""}
              width={5}
            ></YAxis>
            <Tooltip />
            <Area
              type="monotone"
              dataKey="modelsScanned"
              fill="url(#colorUv1)"
              stroke="#E09E50"
              strokeWidth={3}
            />
          </AreaChart>
        </ResponsiveContainer>
    </Box>
  );
};
export default ModelsScanned;

import { useState } from "react";
import { Stack, Link, Typography } from "@mui/material";
import {
  BarChart,
  Bar,
  XAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
interface DataItem {
  date: string;
  "Post Attack": number;
  "Post Mitigation": number;
}
const data: DataItem[] = [
  { date: "29/4", "Post Attack": 0.3, "Post Mitigation": 0.4 },
  { date: "7/5", "Post Attack": 0.4, "Post Mitigation": 0.5 },
  { date: "12/5", "Post Attack": 0.5, "Post Mitigation": 0.6 },
  { date: "15/5", "Post Attack": 0.4, "Post Mitigation": 0.6 },
  { date: "21/6", "Post Attack": 0.4, "Post Mitigation": 0.5 },
];

const SecurityTrend = () => {
  const [hiddenItems, setHiddenItems] = useState<any>([]);
  const handleLegendClick = (entry: any) => {
    const { dataKey } = entry;
    if (hiddenItems.includes(dataKey)) {
      setHiddenItems(hiddenItems.filter((legend: any) => legend !== dataKey));
    } else {
      setHiddenItems([...hiddenItems, dataKey]);
    }
  };

  // Custom legend icon to display circles instead of lines
  const renderLegend = (props: any) => {
    const { payload } = props;
    return (
      <Stack direction="row" gap={2} justifyContent="center">
        {payload.map((entry: any, index: number) => (
          <Link
            underline="none"
            key={`item-${index}`}
            onClick={() => handleLegendClick(entry)}
            color="#3C5268"
          >
            <svg width="8" height="8" style={{ marginRight: 5 }}>
              <circle cx="3" cy="3" r="3" fill={entry.color} />
            </svg>
            <Typography variant="caption" component="span">
              {entry.value}
            </Typography>
          </Link>
        ))}
      </Stack>
    );
  };
  return (
    <>
      <Typography variant="body1" className="allCaps">
        Trend
      </Typography>
      <ResponsiveContainer
        width="100%"
        height={250}
        className="customLegend autoLegendWidth"
      >
        <BarChart
          margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
          data={data}
        >
          <CartesianGrid
            vertical={false}
            horizontal={true}
            strokeDasharray="0 0"
          />
          <XAxis dataKey="date" fontSize={12} color="#A4B8CB" />

          <Tooltip />
          <Legend
            content={renderLegend} // Use custom legend renderer
          />

          <Bar
            dataKey="Post Attack"
            fill="#CBE1DF"
            barSize={4}
            name="Post Attack"
            opacity={hiddenItems.includes("Post Attack") ? 0 : 1}
            radius={[10, 10, 0, 0]}
          />
          <Bar
            dataKey="Post Mitigation"
            fill="#E09E50"
            barSize={4}
            name="Post Mitigation"
            opacity={hiddenItems.includes("Post Mitigation") ? 0 : 1}
            radius={[10, 10, 0, 0]} // Make the top corners rounded
          />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};

export default SecurityTrend;

import {
  Box,
  Link,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import upArrow from "../assets/images/up-arrow.svg";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import downArrow from "../assets/images/down-arrow.svg";
import { Tooltip as MuiTooltip } from "@mui/material";
import {
  BarChart,
  Bar,
  XAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  YAxis,
} from "recharts";
import { useState } from "react";
interface DataItem {
  name: string;
  score: number;
  fillColor: any;
}

const data: DataItem[] = [
  { name: "Pre attack", score: 78, fillColor: "#B1D2D0" },
  { name: "Post Attack", score: 49, fillColor: "#599B96" },
  { name: "Post defence", score: 61, fillColor: "#E09E50" },
];
const dataColor = [
  { name: "Pre attack", fillColor: "#B1D2D0" },
  { name: "Post Attack", fillColor: "#599B96" },
  { name: "Post defence", fillColor: "#E09E50" },
];
const ModalScoreOverview = () => {
  const renderLegend = (props: any) => {
    const { payload } = props;
    return (
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        gap={2}
      >
        {payload.map((entry: any, index: any) => (
          <Link
            underline="none"
            key={`item-${index}`}
            onClick={() => handleLegendClick(entry)}
          >
            <Stack direction="row" alignItems="center" gap={0.5}>
              <svg width="8" height="8">
                <circle cx="3" cy="3" r="3" fill={entry.color} />
              </svg>
              <Typography
                variant="caption"
                component="span"
                key={`item-${index}`}
              >
                {entry.value}
              </Typography>
            </Stack>
          </Link>
        ))}
      </Stack>
    );
  };
  const [hiddenItems, setHiddenItems] = useState<any>([]);
  const handleLegendClick = (entry: any) => {
    const { dataKey } = entry;
    if (hiddenItems.includes(dataKey)) {
      setHiddenItems(hiddenItems.filter((legend: any) => legend !== dataKey));
    } else {
      setHiddenItems([...hiddenItems, dataKey]);
    }
  };
  return (
    <Box>
      <Stack mt={-3} mb={3}>
        <small>Detailed Report</small>
      </Stack>
      <Box>
        <Typography variant="body1" className="allCaps">
          Score Overview
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
            <CartesianGrid vertical={false} strokeDasharray="0 0" />
            <YAxis
              tick={false}
              label={{
                value: "% Compliance",
                angle: -90,
                position: "Left",
              }}
              tickLine={false}
              axisLine={false}
              tickCount={5}
              tickFormatter={() => ""}
              width={5}
            />
            <Tooltip />
            <Legend
              payload={data.map((item, index) => ({
                id: item.name,
                type: "circle",
                value: `${item.name}`,
                color: item.fillColor,
              }))}
              content={renderLegend}
            />
            {/* <Legend content={renderLegend} /> */}
            {/* <Tooltip />
            <Legend /> */}

            {dataColor.map((entry, index) => (
              <Bar
                dataKey="score"
                fill={entry.fillColor}
                barSize={4}
                radius={[10, 10, 0, 0]}
              />
            ))}
          </BarChart>
        </ResponsiveContainer>
      </Box>
      <Box mt={2}>
        <Typography variant="body1" className="allCaps" mb={2}>
          Highest Scores
        </Typography>
        <TableContainer component={Paper}>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell width="50%">Model</TableCell>
                <TableCell component="th">
                  <Stack direction="row" alignItems="center" gap={1}>
                    <span>Delta </span>
                    <MuiTooltip title="Post attack to post mitigation delta">
                      <InfoOutlinedIcon className="mediumIcon" />
                    </MuiTooltip>
                  </Stack>
                </TableCell>
                <TableCell component="th">Post mitigation</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell component="td">Neural Network</TableCell>
                <TableCell component="td">
                  <Stack direction="row" alignItems="center" gap={1}>
                    <span>43.1% </span>
                    <img src={upArrow} alt="" />
                  </Stack>
                </TableCell>
                <TableCell component="td">
                  <Stack direction="row" alignItems="center" gap={1}>
                    <span>43.1% </span>
                    <img src={upArrow} alt="" />
                  </Stack>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="td">NeuraLink</TableCell>
                <TableCell component="td">
                  <Stack direction="row" alignItems="center" gap={1}>
                    <span>43.1% </span>
                    <img src={upArrow} alt="" />
                  </Stack>
                </TableCell>
                <TableCell component="td">
                  <Stack direction="row" alignItems="center" gap={1}>
                    <span>43.1% </span>
                    <img src={upArrow} alt="" />
                  </Stack>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="td">QuantumMind</TableCell>
                <TableCell component="td">
                  <Stack direction="row" alignItems="center" gap={1}>
                    <span>43.1% </span>
                    <img src={upArrow} alt="" />
                  </Stack>
                </TableCell>
                <TableCell component="td">
                  <Stack direction="row" alignItems="center" gap={1}>
                    <span>43.1% </span>
                    <img src={upArrow} alt="" />
                  </Stack>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="td">Cognitive Alpha</TableCell>
                <TableCell component="td">
                  <Stack direction="row" alignItems="center" gap={1}>
                    <span>43.1% </span>
                    <img src={upArrow} alt="" />
                  </Stack>
                </TableCell>
                <TableCell component="td">
                  <Stack direction="row" alignItems="center" gap={1}>
                    <span>43.1% </span>
                    <img src={upArrow} alt="" />
                  </Stack>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="td">NNeuroPulse</TableCell>
                <TableCell component="td">
                  <Stack direction="row" alignItems="center" gap={1}>
                    <span>43.1% </span>
                    <img src={upArrow} alt="" />
                  </Stack>
                </TableCell>
                <TableCell component="td">
                  <Stack direction="row" alignItems="center" gap={1}>
                    <span>43.1% </span>
                    <img src={upArrow} alt="" />
                  </Stack>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Box mt={3}>
        <Typography variant="body1" className="allCaps" mb={2}>
          Lowest Scores
        </Typography>
        <TableContainer component={Paper}>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell width="50%">Model</TableCell>
                <TableCell component="th">
                  <Stack direction="row" alignItems="center" gap={1}>
                    <span>Delta </span>
                    <MuiTooltip title="Post attack to post mitigation delta">
                      <InfoOutlinedIcon className="mediumIcon" />
                    </MuiTooltip>
                  </Stack>
                </TableCell>
                <TableCell component="th">Post mitigation</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell component="td">Neural Network</TableCell>
                <TableCell component="td">
                  <Stack direction="row" alignItems="center" gap={1}>
                    <span>-7.2% </span>
                    <img src={downArrow} alt="" />
                  </Stack>
                </TableCell>
                <TableCell component="td">
                  <Stack direction="row" alignItems="center" gap={1}>
                    <span>58.7% </span>
                    <img src={upArrow} alt="" />
                  </Stack>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="td">NeuraLink</TableCell>
                <TableCell component="td">
                  <Stack direction="row" alignItems="center" gap={1}>
                    <span>-11.4% </span>
                    <img src={downArrow} alt="" />
                  </Stack>
                </TableCell>
                <TableCell component="td">
                  <Stack direction="row" alignItems="center" gap={1}>
                    <span>42.6% </span>
                    <img src={upArrow} alt="" />
                  </Stack>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="td">QuantumMind</TableCell>
                <TableCell component="td">
                  <Stack direction="row" alignItems="center" gap={1}>
                    <span>-13.5% </span>
                    <img src={downArrow} alt="" />
                  </Stack>
                </TableCell>
                <TableCell component="td">
                  <Stack direction="row" alignItems="center" gap={1}>
                    <span>46.1% </span>
                    <img src={upArrow} alt="" />
                  </Stack>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="td">Cognitive Alpha</TableCell>
                <TableCell component="td">
                  <Stack direction="row" alignItems="center" gap={1}>
                    <span>-15.9% </span>
                    <img src={downArrow} alt="" />
                  </Stack>
                </TableCell>
                <TableCell component="td">
                  <Stack direction="row" alignItems="center" gap={1}>
                    <span>58.3% </span>
                    <img src={upArrow} alt="" />
                  </Stack>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="td">NNeuroPulse</TableCell>
                <TableCell component="td">
                  <Stack direction="row" alignItems="center" gap={1}>
                    <span>-19.0% </span>
                    <img src={downArrow} alt="" />
                  </Stack>
                </TableCell>
                <TableCell component="td">
                  <Stack direction="row" alignItems="center" gap={1}>
                    <span>62.2% </span>
                    <img src={upArrow} alt="" />
                  </Stack>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};
export default ModalScoreOverview;

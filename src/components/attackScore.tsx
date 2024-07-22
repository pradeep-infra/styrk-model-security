import React, { useContext, useEffect, useState } from "react";

import { CommonContext, CommonContextType } from "../core/context";
import {
  Box,
  Button,
  ButtonGroup,
  Stack,
  Typography,
} from "@mui/material";

import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  YAxis,
} from "recharts";
import exitIcon from "../assets/images/exit-icon.svg";
import upArrow from "../assets/images/up-arrow.svg";
import trendLine from "../assets/images/trend-line.svg";
import exitIconDark from "../assets/images/exit-icon-dark.svg";
import ScoreDetailedReport from "./scoreDetailedReport";
import DrawerComp from "../common/customDrawer";
interface DataItem {
  month: string;
  preAttack: number;
  postAttack: number;
  postMitigation: number;
}

const data: DataItem[] = [
  { month: "29/4", preAttack: 55, postAttack: 80, postMitigation: 110 },
  { month: "7/5", preAttack: 35, postAttack: 60, postMitigation: 100 },
  { month: "12/5", preAttack: 150, postAttack: 200, postMitigation: 250 },
  { month: "15/5", preAttack: 100, postAttack: 180, postMitigation: 200 },
  { month: "21/6", preAttack: 210, postAttack: 280, postMitigation: 350 },
];

// const preAttack = "#8CBDB9";
const postMitigation = "#599B96";
const postAttack = "#E09E50";
const AttackScore = () => {
  const { themeType } = useContext(CommonContext) as CommonContextType;
  const [hiddenItems, setHiddenItems] = useState<string[]>([]);
  const [preAttack, setPreAttack] = useState<any>();
  const handleLegendClick = (entry: string) => {
    if (hiddenItems.includes(entry)) {
      setHiddenItems(hiddenItems.filter((item) => item !== entry));
    } else {
      setHiddenItems([...hiddenItems, entry]);
    }
  };
  useEffect(() => {
    if (themeType === "light") {
      setPreAttack("#8CBDB9");
    } else {
      setPreAttack("#000");
    }
  }, [themeType]);
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  return (
    <Box
      className="card-bg card-shadow skore-chart"
      px={{ xs: 2, md: 3 }}
      py={{ xs: 2, md: 3 }}
      borderRadius={3.5}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        mb={1}
      >
        <Typography textTransform="uppercase" variant="subtitle1">
          Score
        </Typography>
        <Typography component="a" onClick={() => setOpenDrawer(true)}>
          <Stack direction="row" alignItems="center" gap={1}>
            <small>Detailed Report</small>
            <img src={themeType === "dark" ? exitIconDark : exitIcon} alt="" />
          </Stack>
        </Typography>
      </Stack>
      <Stack direction="row" spacing={1} alignItems="flex-end" mb={2}>
        <Typography variant="h1">89</Typography>
        <Box>
          <img src={trendLine} alt="" />
        </Box>
        <Stack direction="row" alignItems="center" spacing={0.5}>
          <img src={upArrow} alt="" />
          <Typography variant="caption">7</Typography>
        </Stack>
      </Stack>
      <ButtonGroup
        variant="outlined"
        className="d-flex space-between flex-row btn-group"
      >
        <Button>24h</Button>
        <Button>7d</Button>
        <Button>30d</Button>
        <Button>6m</Button>
        <Button>12m</Button>
      </ButtonGroup>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart
          data={data}
          margin={{ top: 20, right: 0, left: 0, bottom: 20 }}
        >
          <CartesianGrid vertical={false} stroke="#E8ECEB" />
          <XAxis
            dataKey="month"
            interval={0}
            tick={{ fontSize: 12, fill: "#A4B8CB" }}
          />
          <YAxis
            tickLine={false}
            axisLine={false}
            ticks={[0, 50, 100, 150, 200, 250, 300, 350, 400]}
            tickFormatter={() => ""}
            width={5}
          ></YAxis>
          <Tooltip />
          <Line
            type="bump"
            dataKey="preAttack"
            name="Pre Attack"
            stroke={preAttack}
            strokeWidth={3}
            dot={false}
            isAnimationActive={false}
            connectNulls
            hide={hiddenItems.includes("Pre Attack")}
          />
          <Line
            type="bump"
            dataKey="postMitigation"
            name="Post Mitigation"
            stroke={postMitigation}
            strokeWidth={3}
            dot={false}
            isAnimationActive={false}
            connectNulls
            hide={hiddenItems.includes("Post Mitigation")}
          />
          <Line
            type="bump"
            dataKey="postAttack"
            name="Post Attack"
            stroke={postAttack}
            strokeWidth={3}
            dot={false}
            isAnimationActive={false}
            connectNulls
            hide={hiddenItems.includes("Post Attack")}
          />
        </LineChart>
      </ResponsiveContainer>

      <Stack direction="row" flexWrap="wrap" justifyContent="space-between">
        <Box
          key={`legend-pre-attack`}
          display="flex"
          alignItems="center"
          onClick={() => handleLegendClick("Pre Attack")}
          style={{ cursor: "pointer" }}
        >
          <svg width="6" height="6">
            <circle cx="3" cy="3" r="3" fill={preAttack} />
          </svg>
          <Typography variant="body2" ml={0.5}>
            Pre attack
          </Typography>
        </Box>
        <Box
          key={`legend-post-mitigation`}
          display="flex"
          alignItems="center"
          onClick={() => handleLegendClick("Post Mitigation")}
          style={{ cursor: "pointer" }}
        >
          <svg width="6" height="6">
            <circle cx="3" cy="3" r="3" fill={postMitigation} />
          </svg>
          <Typography variant="body2" ml={0.5}>
            Post Mitigation
          </Typography>
        </Box>
      </Stack>
      <Box
        key={`legend-post-attack`}
        display="flex"
        alignItems="center"
        onClick={() => handleLegendClick("Post Attack")}
        style={{ cursor: "pointer", marginTop: 5 }}
      >
        <svg width="6" height="6">
          <circle cx="3" cy="3" r="3" fill={postAttack} />
        </svg>
        <Typography variant="body2" ml={0.5}>
          Post attack
        </Typography>
      </Box>
      <DrawerComp
      heading="Score"
      maxWidth={500}
      content={<ScoreDetailedReport />}
      drawer={openDrawer}
      onClose={() => setOpenDrawer(false)}
      />
    </Box>
  );
};
export default AttackScore;

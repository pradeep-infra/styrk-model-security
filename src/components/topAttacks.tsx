import { Box, Tab, Tabs } from "@mui/material";
import React, { useState } from "react";
import DrawerComp from "../common/customDrawer";
import TopAttacksData from "./TopAttacksData";

interface CircleProps {
  cx: number;
  cy: number;
  r: number;
  fillColor: string;
  label: string;
  value: number;
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
const TopAttacks: React.FC = () => {
  const [value, setValue] = React.useState(0);
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  // Data for circles
  const circles: CircleProps[] = [
    { cx: 30, cy: 30, r: 20, fillColor: "#e09e50", label: "iFGSM", value: 3 },
    {
      cx: 80,
      cy: 80,
      r: 35,
      fillColor: "#599b96",
      label: "HopSkipJump",
      value: 5,
    },
    { cx: 150, cy: 70, r: 25, fillColor: "#a4b8cb", label: "FGSM", value: 4 },
    {
      cx: 40,
      cy: 150,
      r: 30,
      fillColor: "#c7d1cf",
      label: "Wasserstein",
      value: 5,
    },
    {
      cx: 130,
      cy: 150,
      r: 45,
      fillColor: "#cbe1df",
      label: "DeepFool",
      value: 6,
    },
  ];

  return (
    <div>
      <Box>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Most vulnerable" {...a11yProps(0)} />
          <Tab label="Least vulnerable" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Box className="pointer" onClick={() => setOpenDrawer(true)}>
          <svg
            id="Layer_2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 200"
          >
            <defs>
              <style>
                {`
              .cls-1{fill:#e09e50;stroke-width:0px;}
              .cls-2{fill:#c7d1cf;stroke-width:0px;}
              .cls-3{fill:#cbe1df;stroke-width:0px;}
              .cls-4{fill:#a4b8cb;stroke-width:0px;}
              .cls-5{fill:#599b96;stroke-width:0px;}
            `}
              </style>
            </defs>
            <g id="graph">
              {circles.map((circle, index) => (
                <>
                  <circle
                    key={index}
                    className={`cls-${index + 1}`} // Using index + 1 to match the class names
                    cx={circle.cx}
                    cy={circle.cy}
                    r={circle.r}
                    fill={circle.fillColor}
                  />
                  <text
                    x={circle.cx}
                    y={circle.cy}
                    textAnchor="middle"
                    fill="#2D3E4E"
                    fontSize={12}
                  >
                    <tspan>{circle.label}</tspan>
                  </text>
                  {/* Value */}
                  <text
                    x={circle.cx}
                    y={circle.cy}
                    textAnchor="middle"
                    fill="#2D3E4E"
                    fontSize={14}
                    fontWeight="bold"
                  >
                    <tspan x={circle.cx} dy="1.2em">
                      {circle.value}
                    </tspan>
                  </text>
                </>
              ))}
            </g>
          </svg>
        </Box>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Item Two
      </CustomTabPanel>
      <DrawerComp
        heading="Top Attacks"
        maxWidth={500}
        content={<TopAttacksData />}
        drawer={openDrawer}
        onClose={() => setOpenDrawer(false)}
      />
    </div>
  );
};

export default TopAttacks;

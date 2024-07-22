import { Box, Stack, Typography } from "@mui/material";

import editIcon from "../assets/images/edit-icon.svg";
import { Tooltip, ResponsiveContainer, Area, AreaChart } from "recharts";
import Slider from "react-slick";
import { useState } from "react";
// import Select from "react-select";
import DrawerComp from "../common/customDrawer";
import EditComplianceWatchList from "./editWatchList";
import ModalScoreOverview from "./modelScoreOverview";

const settings = {
  slidesToShow: 5,
  speed: 500,
  slidesToScroll: 1,
  arrows: true,
  dots: false,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};
/*slider */
const areaChartData = [
  { name: "May", modelsScanned: 400 },
  { name: "Jun", modelsScanned: 500 },
  { name: "Jul", modelsScanned: 700 },
  { name: "Aug", modelsScanned: 600 },
  { name: "Sep", modelsScanned: 900 },
  { name: "Oct", modelsScanned: 1100 },
  { name: "Nov", modelsScanned: 800 },
  { name: "Dec", modelsScanned: 1300 },
];
const ComplianceWatchList = () => {
  const [openWatchList, setopenWatchList] = useState<boolean>(false);
  const [openModalScoreOverview, setOpenModalScoreOverview] =
    useState<boolean>(false);
  return (
    <Box
      className="card-bg card-shadow compliance-box"
      px={{ xs: 2, md: 3 }}
      py={{ xs: 2, md: 3 }}
      borderRadius={3.5}
    >
      <Stack direction="row" alignItems="center" gap={1} mb={1}>
        <Typography textTransform="uppercase" variant="subtitle1">
          Compliance Watchlist
        </Typography>
        <Typography
          component="a"
          className="d-flex align-item-center"
          onClick={() => setopenWatchList(true)}
        >
          <img src={editIcon} alt="" />
        </Typography>
      </Stack>
      <div className="slider">
        <Slider {...settings}>
          <div
            className="pointer"
            onClick={() => setOpenModalScoreOverview(true)}
          >
            <Stack spacing={1}>
              <Typography variant="body2" color="primary.dark">
                Spectrum Analyzer
              </Typography>
              <Stack direction="row" alignItems="center" m={0} spacing={0.5}>
                <Typography variant="h5" color="primary.dark">
                  48.9
                </Typography>
                <Typography variant="body2" color="success.main">
                  +6.2
                </Typography>
              </Stack>
            </Stack>
            <ResponsiveContainer width="100%" height={80}>
              <AreaChart
                data={areaChartData}
                margin={{ top: 0, right: 20, left: 20, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#BECCDA" stopOpacity={0} />
                    <stop offset="95%" stopColor="#7190AD" stopOpacity={1} />
                  </linearGradient>
                </defs>
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="modelsScanned"
                  fill="url(#colorUv)"
                  stroke="#597C9B"
                  strokeWidth={3}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="pointer">
            <Stack spacing={1}>
              <Typography variant="body2" color="primary.dark">
                Neural Network
              </Typography>
              <Stack direction="row" alignItems="center" m={0} spacing={0.5}>
                <Typography variant="h5" color="primary.dark">
                  65.4
                </Typography>
                <Typography variant="body2" color="error">
                  -2.1
                </Typography>
              </Stack>
            </Stack>
            <ResponsiveContainer width="100%" height={80}>
              <AreaChart
                data={areaChartData}
                margin={{ top: 0, right: 20, left: 20, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#BECCDA" stopOpacity={0} />
                    <stop offset="95%" stopColor="#7190AD" stopOpacity={1} />
                  </linearGradient>
                </defs>
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="modelsScanned"
                  fill="url(#colorUv)"
                  stroke="#597C9B"
                  strokeWidth={3}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="pointer">
            <Stack spacing={1}>
              <Typography variant="body2" color="primary.dark">
                Quantum Processor
              </Typography>
              <Stack direction="row" alignItems="center" m={0} spacing={0.5}>
                <Typography variant="h5" color="primary.dark">
                  37.6
                </Typography>
                <Typography variant="body2" color="error">
                  -18.4
                </Typography>
              </Stack>
            </Stack>
            <ResponsiveContainer width="100%" height={80}>
              <AreaChart
                data={areaChartData}
                margin={{ top: 0, right: 20, left: 20, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#BECCDA" stopOpacity={0} />
                    <stop offset="95%" stopColor="#7190AD" stopOpacity={1} />
                  </linearGradient>
                </defs>
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="modelsScanned"
                  fill="url(#colorUv)"
                  stroke="#597C9B"
                  strokeWidth={3}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="pointer">
            <Stack spacing={1}>
              <Typography variant="body2" color="primary.dark">
                Cognitive Engine
              </Typography>
              <Stack direction="row" alignItems="center" m={0} spacing={0.5}>
                <Typography variant="h5" color="primary.dark">
                  79.1
                </Typography>
                <Typography variant="body2" color="success.main">
                  +4.5
                </Typography>
              </Stack>
            </Stack>
            <ResponsiveContainer width="100%" height={80}>
              <AreaChart
                data={areaChartData}
                margin={{ top: 0, right: 20, left: 20, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#BECCDA" stopOpacity={0} />
                    <stop offset="95%" stopColor="#7190AD" stopOpacity={1} />
                  </linearGradient>
                </defs>
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="modelsScanned"
                  fill="url(#colorUv)"
                  stroke="#597C9B"
                  strokeWidth={3}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="pointer">
            <Stack spacing={1}>
              <Typography variant="body2" color="primary.dark">
                Synapse
              </Typography>
              <Stack direction="row" alignItems="center" m={0} spacing={0.5}>
                <Typography variant="h5" color="primary.dark">
                  92.7
                </Typography>
                <Typography variant="body2" color="success.main">
                  +5.6
                </Typography>
              </Stack>
            </Stack>
            <ResponsiveContainer width="100%" height={80}>
              <AreaChart
                data={areaChartData}
                margin={{ top: 0, right: 20, left: 20, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#BECCDA" stopOpacity={0} />
                    <stop offset="95%" stopColor="#7190AD" stopOpacity={1} />
                  </linearGradient>
                </defs>
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="modelsScanned"
                  fill="url(#colorUv)"
                  stroke="#597C9B"
                  strokeWidth={3}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="pointer">
            <Stack spacing={1}>
              <Typography variant="body2" color="primary.dark">
                Logic Processor
              </Typography>
              <Stack direction="row" alignItems="center" m={0} spacing={0.5}>
                <Typography variant="h5" color="primary.dark">
                  53.7
                </Typography>
                <Typography variant="body2" color="error">
                  -4.9
                </Typography>
              </Stack>
            </Stack>
            <ResponsiveContainer width="100%" height={80}>
              <AreaChart
                data={areaChartData}
                margin={{ top: 0, right: 20, left: 20, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#BECCDA" stopOpacity={0} />
                    <stop offset="95%" stopColor="#7190AD" stopOpacity={1} />
                  </linearGradient>
                </defs>
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="modelsScanned"
                  fill="url(#colorUv)"
                  stroke="#597C9B"
                  strokeWidth={3}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="pointer">
            <Stack spacing={1}>
              <Typography variant="body2" color="primary.dark">
                Deep Learning
              </Typography>
              <Stack direction="row" alignItems="center" m={0} spacing={0.5}>
                <Typography variant="h5" color="primary.dark">
                  38.1
                </Typography>
                <Typography variant="body2" color="error">
                  -10.4
                </Typography>
              </Stack>
            </Stack>
            <ResponsiveContainer width="100%" height={80}>
              <AreaChart
                data={areaChartData}
                margin={{ top: 0, right: 20, left: 20, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#BECCDA" stopOpacity={0} />
                    <stop offset="95%" stopColor="#7190AD" stopOpacity={1} />
                  </linearGradient>
                </defs>
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="modelsScanned"
                  fill="url(#colorUv)"
                  stroke="#597C9B"
                  strokeWidth={3}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Slider>
      </div>
      <DrawerComp
        heading="Compliance Watchlist"
        maxWidth={500}
        content={<EditComplianceWatchList />}
        drawer={openWatchList}
        onClose={() => setopenWatchList(false)}
      />

      <DrawerComp
        heading="Spectrum Analyzer"
        maxWidth={500}
        content={<ModalScoreOverview />}
        drawer={openModalScoreOverview}
        onClose={() => setOpenModalScoreOverview(false)}
      />
    </Box>
  );
};
export default ComplianceWatchList;

import Datepicker from "react-horizontal-strip-datepicker";
import "react-horizontal-strip-datepicker/dist/ReactHorizontalDatePicker.css";

import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import HourglassEmptyRoundedIcon from "@mui/icons-material/HourglassEmptyRounded";
import { Box, IconButton, Link, Stack, Typography } from "@mui/material";
import editIcon from "../assets/images/edit-gold-icon.svg";
import trashIcon from "../assets/images/trash-gold-icon.svg";
import Drawer from "../common/customDrawer";
import ScanStatus from "./scanStatus";
import { useState } from "react";
const HorizontalDatePicker = () => {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const onSelectedDay = (val: any) => {
    console.log(val);
  };

  return (
    <Box
      className="card-bg card-shadow"
      px={{ xs: 2, md: 3 }}
      py={{ xs: 2, md: 3 }}
      borderRadius={3.5}
    >
      <Datepicker
        selectedDay={onSelectedDay}
        enableScroll={false}
        enableDays={180}
      />
      <Stack className="calData">
        <Stack direction="row" gap={2} className="selectedDateDataRow">
          <Typography variant="body2">08.00</Typography>
          <Typography variant="body2">AlphaMind, NeuralNet 123</Typography>
          <Stack
            direction="row"
            gap={0.5}
            alignItems="center"
            justifyContent="flex-end"
            className="btnContainer"
          >
            <Box className="btnItems">
              <IconButton>
                <img src={editIcon} alt="" />
              </IconButton>
              <IconButton>
                <img src={trashIcon} alt="" />
              </IconButton>
            </Box>
          </Stack>
        </Stack>
        <Stack direction="row" gap={2} className="selectedDateDataRow">
          <Typography variant="body2">15.00</Typography>
          <Typography variant="body2">SynthAI</Typography>
          <Stack
            direction="row"
            gap={0.5}
            alignItems="center"
            justifyContent="flex-end"
            className="btnContainer"
          >
            <Box className="btnItems">
              <IconButton>
                <img src={editIcon} alt="" />
              </IconButton>
              <IconButton>
                <img src={trashIcon} alt="" />
              </IconButton>
            </Box>
          </Stack>
        </Stack>
        <Stack direction="row" gap={2} className="selectedDateDataRow">
          <Typography variant="body2">16.00</Typography>
          <Typography variant="body2">DataSynth</Typography>
          <Stack
            direction="row"
            gap={0.5}
            alignItems="center"
            justifyContent="flex-end"
            className="btnContainer"
          >
            <Box className="btnItems">
              <IconButton>
                <img src={editIcon} alt="" />
              </IconButton>
              <IconButton>
                <img src={trashIcon} alt="" />
              </IconButton>
            </Box>
          </Stack>
        </Stack>
      </Stack>
      <Typography variant="body1" className="allCaps" mt={2}>
        Scan Status
      </Typography>
      <Stack gap={3}>
        <Stack
          direction="row"
          gap={2}
          pl={2}
          pr={2}
          alignItems="center"
          className="selectedDateDataRow defaultRadius no-border datarowBg"
        >
          <InfoOutlinedIcon className="largeIcon" color="error" />
          <Stack>
            <Typography variant="subtitle2">2 scans have errors</Typography>
            <Link className="label" onClick={() => setOpenDrawer(true)}>
              View details
            </Link>
          </Stack>
        </Stack>
        <Stack
          direction="row"
          gap={2}
          pl={2}
          pr={2}
          alignItems="center"
          className="selectedDateDataRow defaultRadius no-border datarowBg"
        >
          <CheckCircleOutlinedIcon className="largeIcon" color="success" />
          <Stack>
            <Typography variant="subtitle2">3 scans completed</Typography>
            <Link className="label" onClick={() => setOpenDrawer(true)}>
              View details
            </Link>
          </Stack>
        </Stack>
        <Stack
          direction="row"
          gap={2}
          pl={2}
          pr={2}
          alignItems="center"
          className="selectedDateDataRow defaultRadius no-border datarowBg"
        >
          <HourglassEmptyRoundedIcon className="largeIcon" color="warning" />
          <Stack>
            <Typography variant="subtitle2">2 scans in progress</Typography>
            <Link className="label" onClick={() => setOpenDrawer(true)}>
              View details
            </Link>
          </Stack>
        </Stack>
      </Stack>
      <Drawer
        drawer={openDrawer}
        maxWidth={600}
        heading={"Scan Status"}
        content={<ScanStatus />}
        onClose={() => setOpenDrawer(false)}
      />
    </Box>
  );
};
export default HorizontalDatePicker;

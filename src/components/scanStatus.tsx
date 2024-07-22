import { Box, Link, Stack, Typography } from "@mui/material";
import rightArrowIcon from "../assets/images/custom-right-arrow.svg";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import ResponsiveProgressSvg from "./responsiveProgressSvg";

const ScanStatus = () => {
    return (
<>
  <Stack mt={-3} mb={3}>
    <small>25/6/24</small>
  </Stack>
<Box mt={2}>
  <Typography variant="body1" className="allCaps" mb={1}>
    Errors
  </Typography>
  <Stack gap={2}>
    <Stack
      direction="row"
      gap={2}
      pl={2}
      pr={2}
      className="selectedDateDataRow defaultRadius no-border datarowBg"
    >
      <InfoOutlinedIcon className="largeIcon" color="error" />
      <Stack>
        <small>09:12 am</small>
        <Typography variant="subtitle1">AlphaMind</Typography>
        <Typography variant="body1" mb={1}>
          One line explaining what went wrong and how it can be fixed.
        </Typography>
        <Link
          underline="none"
          className="d-flex align-item-center gap-1"
        >
          <span>Modify settings</span>{" "}
          <img
            className="mt-1"
            width="5px"
            src={rightArrowIcon}
            alt=""
          />
        </Link>
      </Stack>
    </Stack>
    <Stack
      direction="row"
      gap={2}
      pl={2}
      pr={2}
      className="selectedDateDataRow defaultRadius no-border datarowBg"
    >
      <InfoOutlinedIcon className="largeIcon" color="error" />
      <Stack>
        <small>07:36 pm</small>
        <Typography variant="subtitle1">Synapse</Typography>
        <Typography variant="body1" mb={1}>
          One line explaining what went wrong and how it can be fixed.
        </Typography>
        <Link
          underline="none"
          className="d-flex align-item-center gap-1"
        >
          <span>Restart Scan</span>
          <img
            className="mt-1"
            width="5px"
            src={rightArrowIcon}
            alt=""
          />
        </Link>
      </Stack>
    </Stack>
  </Stack>
</Box>
<Box mt={3}>
  <Typography variant="body1" className="allCaps" mb={1}>
    Completed
  </Typography>
  <Stack gap={2}>
    <Stack
      direction="row"
      gap={2}
      pl={2}
      pr={2}
      className="selectedDateDataRow defaultRadius no-border datarowBg"
    >
      <InfoOutlinedIcon className="largeIcon" color="error" />
      <Stack>
        <small>02:58 pm</small>
        <Typography variant="subtitle1">NeuraLink</Typography>
        <Typography variant="body2" mb={1}>
          1 hour, 46 min
        </Typography>

        <Link
          underline="none"
          className="d-flex align-item-center gap-1"
        >
          <span>View Report</span>{" "}
          <img
            className="mt-1"
            width="5px"
            src={rightArrowIcon}
            alt=""
          />
        </Link>
      </Stack>
    </Stack>
    <Stack
      direction="row"
      gap={2}
      pl={2}
      pr={2}
      className="selectedDateDataRow defaultRadius no-border datarowBg"
    >
      <CheckCircleOutlinedIcon
        className="largeIcon"
        color="success"
      />
      <Stack>
        <small>11:36 am</small>
        <Typography variant="subtitle1">CyberGen</Typography>
        <Typography variant="body2" mb={1}>
          3 hours, 5 min
        </Typography>
        <Link
          underline="none"
          className="d-flex align-item-center gap-1"
        >
          <span>View Report</span>
          <img
            className="mt-1"
            width="5px"
            src={rightArrowIcon}
            alt=""
          />
        </Link>
      </Stack>
    </Stack>
  </Stack>
</Box>
<Box mt={3}>
  <Typography variant="body1" className="allCaps" mb={1}>
    In Progress
  </Typography>
  <Stack gap={2}>
    <Stack
      direction="row"
      gap={2}
      pl={2}
      pr={2}
      className="selectedDateDataRow defaultRadius no-border datarowBg"
    >
      <Stack alignItems="center" width={50} className="rotateSvg">
        <ResponsiveProgressSvg percentage={68} />
      </Stack>
      <Stack>
        <Typography variant="subtitle1">Spectrum Analyzer</Typography>
        <Typography variant="body2" mb={1}>
          3 hours, 18 min elapsed
        </Typography>
      </Stack>
    </Stack>
    <Stack
      direction="row"
      gap={2}
      pl={2}
      pr={2}
      className="selectedDateDataRow defaultRadius no-border datarowBg"
    >
      <Stack alignItems="center" width={50} className="rotateSvg">
        <ResponsiveProgressSvg percentage={42} />
      </Stack>
      <Stack>
        <Typography variant="subtitle1">Deep Learning</Typography>
        <Typography variant="body2" mb={1}>
          32 min elapsed
        </Typography>
      </Stack>
    </Stack>
  </Stack>
</Box>
</>
    )
}
export default ScanStatus;
import {
  Box,
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
import SecurityTrend from "./securitytrend";
import downArrow from "../assets/images/down-arrow.svg";
import { Tooltip as MuiTooltip } from "@mui/material";
const ScoreDetailedReport = () => {
  return (
    <>
      <Stack mt={-3} mb={3}>
        <small>Detailed Report</small>
      </Stack>
      <SecurityTrend />
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
    </>
  );
};
export default ScoreDetailedReport;

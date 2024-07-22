import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Paper,
  Stack,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Tabs,
  Typography,
} from "@mui/material";
import { SyntheticEvent, useState } from "react";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import downArrow from "../assets/images/down-arrow.svg";
import { Tooltip as MuiTooltip } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
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
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      className="tabPanel"
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}
function tabProps(index: number) {
  return {
    id: `tab-${index}`,
    "aria-controls": `tabpanel-${index}`,
  };
}
const TopAttacksData = () => {
  const [value, setValue] = useState(0);

  const [expanded, setExpanded] = useState<string | false>("panel1");
  const handleAccordionChange =
    (panel: string) => (event: SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  const handleTabChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Box>
        <Tabs value={value} onChange={handleTabChange} aria-label="tabs">
          <Tab label="Most vulnerable" {...tabProps(0)} />
          <Tab label="Least vulnerable" {...tabProps(1)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Box className="customAccordionWrapper">
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleAccordionChange("panel1")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className="largeIcon" />}
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <Stack
                direction="row"
                gap={1}
                justifyContent="space-between"
                width="100%"
              >
                <Box>
                  <Typography component="p" variant="subtitle1" mb={0}>
                    DeepFool
                  </Typography>
                  <Typography variant="caption">6 models</Typography>
                </Box>
                <Stack direction="row" alignItems="center" gap={2.5} mr={1.5}>
                  <Typography variant="subtitle1">
                    -48.6 <img src={downArrow} alt="" />
                  </Typography>
                  <Typography variant="subtitle1">
                    32.3 <img src={downArrow} alt="" />
                  </Typography>
                </Stack>
              </Stack>
            </AccordionSummary>
            <AccordionDetails>
              <TableContainer component={Paper}>
                <Table className="largeTable">
                  <TableRow className="virtualThead">
                    <TableCell width="80%" component="td">
                      Model
                    </TableCell>
                    <TableCell component="td">
                      <Stack direction="row" alignItems="center" gap={1}>
                        <span>Delta </span>
                        <MuiTooltip title="Pre attack to post attack delta">
                          <InfoOutlinedIcon className="mediumIcon" />
                        </MuiTooltip>
                      </Stack>
                    </TableCell>
                    <TableCell component="td">
                      <Stack direction="row" alignItems="center" gap={1}>
                        <span>Score </span>
                        <MuiTooltip title="Post attack score">
                          <InfoOutlinedIcon className="mediumIcon" />
                        </MuiTooltip>
                      </Stack>
                    </TableCell>
                  </TableRow>

                  <TableBody>
                    <TableRow>
                      <TableCell component="td">Neural Network</TableCell>
                      <TableCell component="td">
                        <Stack direction="row" alignItems="center" gap={1}>
                          <span>43.1% </span>
                          <img src={downArrow} alt="" />
                        </Stack>
                      </TableCell>
                      <TableCell component="td">
                        <Stack direction="row" alignItems="center" gap={1}>
                          <span>43.1% </span>
                          <img src={downArrow} alt="" />
                        </Stack>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell component="td">NeuraLink</TableCell>
                      <TableCell component="td">
                        <Stack direction="row" alignItems="center" gap={1}>
                          <span>43.1% </span>
                          <img src={downArrow} alt="" />
                        </Stack>
                      </TableCell>
                      <TableCell component="td">
                        <Stack direction="row" alignItems="center" gap={1}>
                          <span>43.1% </span>
                          <img src={downArrow} alt="" />
                        </Stack>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell component="td">QuantumMind</TableCell>
                      <TableCell component="td">
                        <Stack direction="row" alignItems="center" gap={1}>
                          <span>43.1% </span>
                          <img src={downArrow} alt="" />
                        </Stack>
                      </TableCell>
                      <TableCell component="td">
                        <Stack direction="row" alignItems="center" gap={1}>
                          <span>43.1% </span>
                          <img src={downArrow} alt="" />
                        </Stack>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell component="td">Cognitive Alpha</TableCell>
                      <TableCell component="td">
                        <Stack direction="row" alignItems="center" gap={1}>
                          <span>43.1% </span>
                          <img src={downArrow} alt="" />
                        </Stack>
                      </TableCell>
                      <TableCell component="td">
                        <Stack direction="row" alignItems="center" gap={1}>
                          <span>43.1% </span>
                          <img src={downArrow} alt="" />
                        </Stack>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell component="td">NNeuroPulse</TableCell>
                      <TableCell component="td">
                        <Stack direction="row" alignItems="center" gap={1}>
                          <span>43.1% </span>
                          <img src={downArrow} alt="" />
                        </Stack>
                      </TableCell>
                      <TableCell component="td">
                        <Stack direction="row" alignItems="center" gap={1}>
                          <span>43.1% </span>
                          <img src={downArrow} alt="" />
                        </Stack>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleAccordionChange("panel2")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className="largeIcon" />}
              aria-controls="panel2d-content"
              id="panel2d-header"
            >
              <Stack
                direction="row"
                gap={1}
                justifyContent="space-between"
                width="100%"
              >
                <Box>
                  <Typography component="p" variant="subtitle1" mb={0}>
                    HopSkipJump
                  </Typography>
                  <Typography variant="caption">5 models</Typography>
                </Box>
                <Stack direction="row" alignItems="center" gap={2.5} mr={1.5}>
                  <Typography variant="subtitle1">
                    -45.7 <img src={downArrow} alt="" />
                  </Typography>
                  <Typography variant="subtitle1">
                    30.9 <img src={downArrow} alt="" />
                  </Typography>
                </Stack>
              </Stack>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Nunc vitae orci ultricies, auctor nunc in, volutpat nisl.
                Integer sit amet egestas eros, vitae egestas augue. Duis vel est
                augue.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleAccordionChange("panel3")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className="largeIcon" />}
              aria-controls="panel3d-content"
              id="panel3d-header"
            >
              <Stack
                direction="row"
                gap={1}
                justifyContent="space-between"
                width="100%"
              >
                <Box>
                  <Typography component="p" variant="subtitle1" mb={0}>
                    Wasserstein
                  </Typography>
                  <Typography variant="caption">5 models</Typography>
                </Box>
                <Stack direction="row" alignItems="center" gap={2.5} mr={1.5}>
                  <Typography variant="subtitle1">
                    -38.9 <img src={downArrow} alt="" />
                  </Typography>
                  <Typography variant="subtitle1">
                    29.1 <img src={downArrow} alt="" />
                  </Typography>
                </Stack>
              </Stack>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Nunc vitae orci ultricies, auctor nunc in, volutpat nisl.
                Integer sit amet egestas eros, vitae egestas augue. Duis vel est
                augue.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel4"}
            onChange={handleAccordionChange("panel4")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className="largeIcon" />}
              aria-controls="panel4d-content"
              id="panel4d-header"
            >
              <Stack
                direction="row"
                gap={1}
                justifyContent="space-between"
                width="100%"
              >
                <Box>
                  <Typography component="p" variant="subtitle1" mb={0}>
                    FGSM
                  </Typography>
                  <Typography variant="caption">4 models</Typography>
                </Box>
                <Stack direction="row" alignItems="center" gap={2.5} mr={1.5}>
                  <Typography variant="subtitle1">
                    -35.8 <img src={downArrow} alt="" />
                  </Typography>
                  <Typography variant="subtitle1">
                    27.6 <img src={downArrow} alt="" />
                  </Typography>
                </Stack>
              </Stack>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Nunc vitae orci ultricies, auctor nunc in, volutpat nisl.
                Integer sit amet egestas eros, vitae egestas augue. Duis vel est
                augue.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel5"}
            onChange={handleAccordionChange("panel5")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className="largeIcon" />}
              aria-controls="panel5d-content"
              id="panel5d-header"
            >
              <Stack
                direction="row"
                gap={1}
                justifyContent="space-between"
                width="100%"
              >
                <Box>
                  <Typography component="p" variant="subtitle1" mb={0}>
                    iFGSM
                  </Typography>
                  <Typography variant="caption"> models</Typography>
                </Box>
                <Stack direction="row" alignItems="center" gap={2.5} mr={1.5}>
                  <Typography variant="subtitle1">
                    -32.3 <img src={downArrow} alt="" />
                  </Typography>
                  <Typography variant="subtitle1">
                    26.4 <img src={downArrow} alt="" />
                  </Typography>
                </Stack>
              </Stack>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Nunc vitae orci ultricies, auctor nunc in, volutpat nisl.
                Integer sit amet egestas eros, vitae egestas augue. Duis vel est
                augue.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Item Two
      </CustomTabPanel>
    </>
  );
};
export default TopAttacksData;

import React, { useEffect, useState } from "react";
import { Box, Grid, Typography } from "@mui/material";

import AttackScore from "../components/attackScore";
import ComplianceWatchList from "../components/complianceWatchList";
import HorizontalDatePicker from "../components/horizontalDatepicker";
import ModelsScanned from "../components/modelScanned";
import ModelsSources from "../components/modelSources";
import Vulnerabilities from "../components/vulnerabilities";
import TopAttacks from "../components/topAttacks";


const Dashboard = () => {
  //for mobile screen
  const [isMobile, setIsMobile] = useState<boolean>(false);

  //choose the screen size
  const handleResize = () => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  // create an event listener
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });
  // mobile screen end

  return (
    <Box mx="auto">
      <Grid container columnSpacing={3} rowSpacing={3} pb={3}>
        {/* Model Security */}
        <Grid item xs={12} sm={6} md={4} xl={3}>
          <AttackScore />
          <Vulnerabilities />
          {isMobile ? (
            <Grid item xs={12} sm={12} md={6} lg={7} xl={8.5}>
              <Grid container columnSpacing={3} rowSpacing={3}>
                <Grid item xs={12} sm={12} md={12} xl={6}>
                  <ModelsScanned />
                </Grid>
                <Grid item xs={12} sm={12} md={12} xl={6}>
                  <ModelsSources />
                </Grid>
              </Grid>
              <Grid container columnSpacing={3} rowSpacing={3} mt={0.5}>
                <Grid item xs={12} sm={12} md={12} xl={6}>
                  <Box
                    className="card-bg card-shadow skore-chart"
                    px={{ xs: 2, md: 3 }}
                    py={{ xs: 2, md: 3 }}
                    borderRadius={3.5}
                  >
                    <Typography textTransform="uppercase" variant="subtitle1">
                      Top Attacks
                    </Typography>
                    <TopAttacks />
                  </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={12} xl={6}>
                  <ModelsSources />
                </Grid>
              </Grid>
            </Grid>
          ) : (
            ""
          )}
        </Grid>
        <Grid item xs={12} sm={6} md={8} xl={9}>
          <ComplianceWatchList />
          <Grid container columnSpacing={3} rowSpacing={3} mt={0.5}>
            {!isMobile ? (
              <Grid item xs={12} sm={12} md={6} lg={7} xl={8.5}>
                <Grid container columnSpacing={3} rowSpacing={3}>
                  <Grid item xs={12} sm={12} md={12} xl={6}>
                    <ModelsScanned />
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} xl={6}>
                    <ModelsSources />
                  </Grid>
                </Grid>
                <Grid container columnSpacing={3} rowSpacing={3} mt={0.5}>
                  <Grid item xs={12} sm={12} md={12} xl={6}>
                    <Box
                      className="card-bg card-shadow skore-chart"
                      px={{ xs: 2, md: 3 }}
                      py={{ xs: 2, md: 3 }}
                      borderRadius={3.5}                      
                    >
                      <Typography textTransform="uppercase" variant="subtitle1">
                        Top Attacks
                      </Typography>
                      <TopAttacks />                      
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} xl={6}>
                    <ModelsSources />
                  </Grid>
                </Grid>
              </Grid>
            ) : (
              ""
            )}
            <Grid item xs={12} sm={12} md={6} lg={5} xl={3.5}>
              <HorizontalDatePicker />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      
    </Box>
  );
};

export default Dashboard;

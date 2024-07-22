import React, { FC} from 'react';
import { Box, Drawer, IconButton, Stack, Typography } from '@mui/material';
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

interface IDrawerComp {
    drawer : boolean,
    maxWidth: any, 
    heading:string,
    content:any,
    onClose : (data : any) =>void
}
const DrawerComp: FC<IDrawerComp>=(props) => {
    const {content,onClose,heading, maxWidth,drawer} = props;
    console.log(maxWidth,"width")
  return (
    
    <Drawer
    variant="temporary"
    anchor="right"
    open={drawer}
    onClose={onClose}
    sx={{
      "& .MuiDrawer-paper": {
        width: "100%",
        maxWidth: { lg: `${maxWidth}px`, xs: "90%" },
      },
    }}
  >
    <Box p={3}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <Stack>
          <Typography textTransform="uppercase" variant="subtitle1">
            {heading}
          </Typography>
        </Stack>
        <Box textAlign="right">
          <IconButton onClick={onClose}>
            <CloseRoundedIcon />
          </IconButton>
        </Box>
      </Stack>
      
      {content}
    </Box>
    
  </Drawer>
  );
};

export default DrawerComp;

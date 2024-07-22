
import { Box } from "@mui/material";
import Navigation from "./navigation";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../screens/dashboard";
const MainLayout = () => {
  return (
    <>
      <Box id="layout-wrapper">
        <Navigation/>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Dashboard />}>
            {/* <Route index element={<Home />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} /> */}
            </Route>
        </Routes>
        </BrowserRouter>
      </Box>
    </>
  );
};

export default MainLayout;

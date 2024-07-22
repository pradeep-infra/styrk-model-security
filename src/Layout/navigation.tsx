import React, { useContext, useState } from "react";
import { Typography, Stack, IconButton, Avatar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import settingsIcon from "../assets/images/settings.svg";
import settingsIconDark from "../assets/images/settings-dark.svg";
import NotificationIcon from "../assets/images/notification.svg";
import NotificationIconDark from "../assets/images/notification-dark.svg";
import allAppsIcon from "../assets/images/allApps.svg";
import allAppsIconDark from "../assets/images/allApps-dark.svg";
import searchIcon from "../assets/images/search-icon.svg";
import searchIconDark from "../assets/images/search-icon-dark.svg";
import Backdrop from "@mui/material/Backdrop";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import logo from "../assets/images/styrk-logo.svg";
import logoDark from "../assets/images/styrk-logo-dark.svg";
import profilePicture from "../assets/images/profile-pic.png";
import { CommonContext, CommonContextType } from "../core/context";
const navLinks = [
  {
    text: "Dashboard",
    path: "/Dashboard",
  },
  {
    text: "Scan",
    path: "/about",
  },
  {
    text: "Schedule",
    path: "/store",
  },
  {
    text: "Reports",
    path: "/faq",
  },
];

const Navigation = () => {
  const { setThemeType, themeType } = useContext(
    CommonContext
  ) as CommonContextType;
  const [navOpen, setNavOpen] = useState<boolean>();
  const [searchOpen, setSearchOpen] = useState<boolean>();
  const [mainNav, setMainNav] = useState(null);
 
  const openNav = Boolean(mainNav);

  const [openBackdrop, setOpenBackdrop] = useState<boolean>(false);
  const openMainNav = (event: any) => {
    setMainNav(event.currentTarget);
    setOpenBackdrop(true);
  };
  const closeMainNav = () => {
    setMainNav(null);
    setOpenBackdrop(false);
  };

  const toggleTheme = () => {
    if (themeType === "light") {
      setThemeType("dark");
    } else {
      setThemeType("light");
    }
  };

  return (
    <nav className="responsive-toolbar">
      <Stack direction="row" alignItems="center" gap={2}>
        <img src={themeType === "light"? logoDark: logo} height="40px" width="40px" alt="" />
        <Stack direction="row" alignItems="center" onClick={openMainNav}>
          <Typography component="a" variant="body2">
            <span>DEFEND</span>
          </Typography>
          <KeyboardArrowDownRoundedIcon />          
        </Stack>
        <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={openBackdrop}
            onClick={closeMainNav}
          >
            <Menu
              anchorEl={mainNav}
              id="defend-menu1"
              open={openNav}
              onClose={closeMainNav}
              onClick={closeMainNav}
              transformOrigin={{ horizontal: "left", vertical: "top" }}
              anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
            >
              <MenuItem>Overview</MenuItem>
              <MenuItem>Model Security</MenuItem>
              <MenuItem>Trust</MenuItem>
              <MenuItem>LLM Security</MenuItem>
              <MenuItem>Privacy</MenuItem>
            </Menu>
          </Backdrop>
      </Stack>

      <ul className={navOpen ? "active" : ""}>
        {navLinks.map((link, index) => (
          <li key={index}>
            <Typography component="a">{link.text}</Typography>
          </li>
        ))}
      </ul>
      <div className="nav-right">
        <div className={searchOpen ? "search-box active" : "search-box"}>
          <img src={themeType === "dark"? searchIconDark: searchIcon} alt="" />
          <input type="text" placeholder="Search" />
        </div>
        <div className="nav-right-items">
          <ul>
            <li className={!navOpen ? "active" : ""}>
              <MenuIcon
                className="navToggle"
                onClick={() => {
                  setNavOpen(!navOpen);
                }}
              />
            </li>
            <li>
              <img src={themeType === "dark"? settingsIconDark: settingsIcon} alt="" />
            </li>
            <li>
              <img src={themeType === "dark"? NotificationIconDark: NotificationIcon} alt="" />
            </li>
            <li
              className="appsIcon"
              onClick={() => {
                setSearchOpen(!searchOpen);
              }}
            >
              <img src={themeType === "dark"? allAppsIconDark: allAppsIcon} alt="" />
            </li>
            <li>
            <Typography component="a" className="modeIcon" onClick={() => toggleTheme()}>
                {themeType === "dark"? <WbSunnyOutlinedIcon />: <DarkModeOutlinedIcon />}            
            </Typography>
            </li>
          </ul>
        </div>
        <div className="profile-box">
          <IconButton size="small" sx={{ ml: 1 }}>
            <Avatar
              sx={{ width: 32, height: 32 }}
              alt=""
              src={profilePicture}
            ></Avatar>
          </IconButton>
        </div>
        
      </div>
    </nav>
  );
};

export default Navigation;

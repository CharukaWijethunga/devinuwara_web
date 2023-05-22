import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SimpleSlider from "../Components/SimpleSlider";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

import { Component } from "react";
import { blue } from "@mui/material/colors";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = [
  "Rituals",
  "About",
  "Features",
  "News | Events",
  "Donation",
  "Online Store",
];

export default function DrawerAppBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const { t } = useTranslation();
  const { i18n } = useTranslation();

  function changeLanguage(e) {
    i18n.changeLanguage(e.target.value);
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <Box maxWidth="xl" sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          backgroundColor: "white",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
              color: "black",
            }}
          >
            Welcome to Devinuwara Uthpalawanna Maha Dewalaya
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: "black" }}>
                {item}
              </Button>
            ))}
          </Box>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Button className="btn-sm" onClick={changeLanguage} value="en">
              english
            </Button>
            <Button className="btn-sm" onClick={changeLanguage} value="es">
              sinhala
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Grid
        lg={12}
        item
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{
          marginTop: "10px",
          // marginLeft: "10px",
          // marginRight: "10px",
          color: { backgroundColor: "lightblue" },
          height:'2200px'
        }}
      >
        <Grid
          item
          lg={3}
          container
          direction="row"
          justifyContent="space-evenly"
          alignItems="stretch"
          spacing={0.3}
          sx={{color:{
            backgroundColor:'red',
          }}}
        >
          <Grid item container lg={4} direction="column"
           style={{color:{backgroundColor:'white'}}}>
            <Grid item container lg={7} >
              <img src={require('../assests/images/2.jpg')} width="100%" height="100%" />
            </Grid>
            <Grid item container lg={5}>
              {/* <img src={require('../assests/images/1.jpg')} width="100%" height="100%" /> */}
            </Grid>
          </Grid>


          <Grid item container lg={8}>
             <img src={require('../assests/images/3.jpg')} width="100%" height="100%"/>
          </Grid>
        </Grid>
        <Grid
          item
          lg={3}
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={1}
        >
          <Grid item lg={6}>
            <h1 style={{ backgroundColor: "green" }}>Block 1</h1>
          </Grid>
          <Grid item lg={3}>
            <h1 style={{ backgroundColor: "green" }}>Block 1.1</h1>
          </Grid>
        </Grid>
        <Grid
          item
          lg={3}
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={1}
        >
          <Grid item lg={6}>
            <h1 style={{ backgroundColor: "green" }}>Block 1</h1>
          </Grid>
          <Grid item lg={3}>
            <h1 style={{ backgroundColor: "green" }}>Block 1.1</h1>
          </Grid>
        </Grid>
        <Grid
          item
          lg={3}
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={1}
        >
          <Grid item lg={6}>
            <h1 style={{ backgroundColor: "green" }}>Block 1</h1>
          </Grid>
          <Grid item lg={3}>
            <h1 style={{ backgroundColor: "green" }}>Block 1.1</h1>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

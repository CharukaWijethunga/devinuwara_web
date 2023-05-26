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
import Zoom from "@mui/material/Zoom";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

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
          <Stack direction="row" spacing={2}>
          <Avatar
            alt="logo"
            src="../assests/images/logo/logo1.jpg"         
          />  
    </Stack>
              
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
              color: "black",
            }}
          >
            Devinuwara Uthpalawanna Maha Dewalaya
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
          // color: { backgroundColor: "lightblue" },
          height: "2200px",
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
          sx={{
            color: {
              backgroundColor: "black",
            },
          }}
        >
          <Grid
            item
            container
            lg={4}
            direction="column"
            justifyContent="space-evenly"
            style={{ color: { backgroundColor: "white" } }}
          >
            <Grid item container lg={7}>
              <img
                src={require("../assests/images/2.jpg")}
                width="100%"
                height="100%"
              />
            </Grid>
            <Grid item container lg={5} direction="column" textAlign="center">
              {/* <img src={require('../assests/images/1.jpg')} width="100%" height="100%" /> */}
              <Typography
                variant="h4"
                sx={{ color: "white", marginTop: "10px" }}
              >
                Welcome to Devinuwara
              </Typography>
              <Typography variant="h5" sx={{ color: "white" }}>
                Uthpalawanna Maha Dewalaya
              </Typography>

              <Zoom
                in={true}
                style={{ transitionDelay: true ? "500ms" : "0ms" }}
              >
                {
                  <Typography
                    variant="h7"
                    sx={{
                      color: "white",
                      marginTop: "25px",
                      marginLeft: "10px",
                      marginRight: "10p",
                    }}
                  >
                    This is the official website of Uthpalawanna Maha Dewalaya,
                    Devinuwara. A UNESCO World Heritage
                  </Typography>
                }
              </Zoom>
            </Grid>
          </Grid>

          <Grid item container lg={8}>
            <img
              src={require("../assests/images/3.jpg")}
              width="100%"
              height="100%"
            />
          </Grid>
        </Grid>
        <Grid
          item
          lg={3}
          container
          direction="row"
          justifyContent="space-evenly"
          alignItems="stretch"
          height="100%"
          width="95%"
          spacing={3}
        >
          <Grid item lg={6} direction="column" textAlign="center" marginTop={5}>
            <Typography variant="h6" sx={{ color: "black", marginTop: "10px" }}>
              A Brief History of the Temple of the Sacred Tooth Relic
            </Typography>
            <Typography variant="h8" sx={{ color: "black" }}>
              The Temple of the Sacred Tooth Relic is a world-renowned place of
              worship, where the left Canine tooth of Gautama Buddha is
              enshrined. The temple which is venerated by thousands of local &
              foreign devotees and tourists daily was named as a world heritage
              by UNESCO in 1988.
            </Typography>
            <Typography variant="h8" sx={{ color: "black", marginTop: "20px" }}>
              The temple which carries a lot of value to Buddhists all over the
              world also has immense cultural value. The architecture is of
              unique Kandyan architectural style with a combination of the
              unique style used to build “Dalada Mandira” the shrines which
              housed the Sacred Tooth Relic previously in other kingdoms.
            </Typography>
            <Typography variant="h8" sx={{ color: "black", marginTop: "20px" }}>
              The temple of the Sacred Tooth Relic is built in the city of Kandy
              near the ancient Royal Palace which is situated to the North of
              the temple and the forest reserve called “Udawaththa Kelaya” to
              the East. The famous Kandy Lake also known as “Kiri Muhuda” to the
              South and “Natha & Paththini Devala” on the West. The temple is
              adorned with intricate carvings using gold, silver, bronze, and
              ivory
            </Typography>
          </Grid>
          <Grid item lg={6} direction="column" textAlign="center" marginTop={5}>
            <img
              src={require("../assests/images/1.jpg")}
              width="100%"
              height="100%"
            />
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
          <Grid item lg={4}>
            <h1 style={{ backgroundColor: "green" }}>Block 1</h1>
          </Grid>
          <Grid item lg={4}>
            <h1 style={{ backgroundColor: "green" }}>Block 1.1</h1>
          </Grid>
          <Grid item lg={4}>
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

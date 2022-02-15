import React, { lazy, useState } from 'react';
import {
  Route, Routes, useNavigate,
} from 'react-router-dom';
// Constants
import { Paths, SideMenu } from 'constants/general';

// Components
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

// Icons
import MenuIcon from 'mdi-react/MenuIcon';

// Pages
const PlanSelections = lazy(() => import('components/plan/Selections'));
const UpdatePlanItems = lazy(() => import('components/plan/UpdatePlanItems'));

function Navigation(props) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();

  const menuItems = [
    SideMenu.Selections,
    SideMenu.UpdatePlanItems,
  ];

  const renderDrawer = () => (
    <Drawer
      anchor="left"
      open={drawerOpen}
      onClose={() => setDrawerOpen(false)}
    >
      <Box
        sx={{
          width: 250,
        }}
        role="presentation"
        pt={3}
        onClick={() => setDrawerOpen(false)}
        onKeyDown={() => setDrawerOpen(false)}
      >
        <List>
          {menuItems.map((el) => (
            <ListItem
              button
              key={el.value}
              onClick={() => {
                navigate(el.path);
              }}
            >
              <ListItemText primary={el.label} />
            </ListItem>
          ))}
        </List>
        <Divider />
      </Box>
    </Drawer>
  );

  return (
    <>
      <ElevationScroll props={props}>
        <AppBar>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={() => setDrawerOpen(true)}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
      <Container>
        <Box sx={{ my: 2 }}>
          <Routes>
            <Route
              path={Paths.UpdatePlanItems}
              element={<UpdatePlanItems />}
            />
            <Route
              index
              element={<PlanSelections />}
            />
          </Routes>
        </Box>
      </Container>

      {renderDrawer()}
    </>
  );
}

export default Navigation;

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

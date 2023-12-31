import React from "react";
import Navigation from "../../components/navigation/Navigation.component";
import { Outlet } from "react-router-dom";

const NavigationRoute = () => {
  return (
    <div>
      <Navigation />
      <Outlet />
    </div>
  );
};

export default NavigationRoute;

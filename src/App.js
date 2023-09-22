import { Routes, Route, Outlet } from "react-router-dom";
import NavigationRoute from "./routes/navigation/navigation.routes";
import Home from "./routes/home/home.routes";

const Shop = () => {
  return (
    <div>
      <h1>Shop Page</h1>
      <Outlet />
    </div>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavigationRoute />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;

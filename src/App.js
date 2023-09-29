import { Routes, Route, Outlet } from "react-router-dom";
import NavigationRoute from "./routes/navigation/navigation.routes";
import HomeRoute from "./routes/home/home.routes";
import AuthenticationRoute from "./routes/authentication/authentication.routes";
import ShopRoute from "./routes/shop/shop.routes";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavigationRoute />}>
        <Route index element={<HomeRoute />} />
        <Route path="shop" element={<ShopRoute />} />
        <Route path="auth" element={<AuthenticationRoute />} />
      </Route>
    </Routes>
  );
};

export default App;

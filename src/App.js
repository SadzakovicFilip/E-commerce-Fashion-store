import { Routes, Route, Outlet } from "react-router-dom";
import NavigationRoute from "./routes/navigation/navigation.routes";
import HomeRoute from "./routes/home/home.routes";
import AuthenticationRoute from "./routes/authentication/authentication.routes";
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
        <Route index element={<HomeRoute />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<AuthenticationRoute />} />
      </Route>
    </Routes>
  );
};

export default App;

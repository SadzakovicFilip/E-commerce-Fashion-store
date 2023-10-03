import { Routes, Route } from "react-router-dom";
import NavigationRoute from "./routes/navigation/navigation.routes";
import HomeRoute from "./routes/home/home.routes";
import AuthenticationRoute from "./routes/authentication/authentication.routes";
import ShopRoute from "./routes/shop/shop.routes";
import CheckoutRoute from "./routes/checkout/checkout.routes";
import CategoryRoute from "./routes/category/category.routes";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavigationRoute />}>
        <Route index element={<HomeRoute />} />
        <Route path="shop/*" element={<ShopRoute />} />
        <Route path="shop/:title" element={<CategoryRoute />} />
        <Route path="auth" element={<AuthenticationRoute />} />
        <Route path="checkout" element={<CheckoutRoute />} />
      </Route>
    </Routes>
  );
};

export default App;

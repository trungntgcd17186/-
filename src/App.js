import { Route, Routes, useLocation } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
// Slick Slider
import "slick-carousel/slick/slick.css";
import About from "./components/About/about";
import Sidebar from "./components/Admin/Sidebar";
import Cart from "./components/Cart/cart";
import "./components/Cart/cart.css";
import UserCategories from "./components/Category/categories";
import ChooseSize from "./components/ChooseSize/chooseSize";
import Contact from "./components/Contact/contact";
import DeliveryDetail from "./components/DeliveryDetail/deliveryDetail";
import Detailproduct from "./components/DetailProduct/detailProduct";
import "./components/Footer/footer.css";
import Help from "./components/Help/help";
import Home from "./components/Home/home";
//==================================================//
import "./components/Login/base.css";
import Login from "./components/Login/login";
import Navbar from "./components/Navbar/navbar";
import Order from "./components/Order/order";
import HomePage from "./components/ReduxHomePage/HomePage";
import Register from "./components/Register/register";
// Admin
import Dashboard from "./components/Admin/Dashboard";
import Products from "./components/Admin/Products";
import Users from "./components/Admin/Users";
import Feedbacks from "./components/Admin/Feedbacks";
import Orders from "./components/Admin/Orders";
import AdminCategories from "./components/Admin/Categories";
// Ẩn thanh Navbar bên trên và Sidebar bên trái để chỉ hiển thị trong một số trang cần thiết.

function App() {
  const { pathname } = useLocation();
  const hideNavbar =
    pathname !== "/dashboard" &&
    pathname !== "/contact" &&
    pathname !== "/dashboard" &&
    pathname !== "/help" &&
    pathname !== "/login" &&
    pathname !== "/register" &&
    pathname !== "/contact" &&
    pathname !== "/dashboard/products" &&
    pathname !== "/dashboard/import" &&
    pathname !== "/dashboard/categories" &&
    pathname !== "/dashboard/orders" &&
    pathname !== "/dashboard/users" &&
    pathname !== "/dashboard/feedbacks";

  const hideSidebar =
    pathname !== "/help" &&
    pathname !== "/login" &&
    pathname !== "/register" &&
    pathname !== "/" &&
    pathname !== "/cart" &&
    pathname !== "/order" &&
    pathname !== "/choosesize" &&
    pathname !== "/about" &&
    pathname !== "/deliverydetail" &&
    pathname !== "/categories" &&
    pathname !== "/contact" &&
    pathname !== "/detailproduct";

  return (
    <div
      className={
        pathname === "/dashboard" ||
        pathname === "/dashboard/products" ||
        pathname === "/dashboard/import" ||
        pathname === "/dashboard/categories" ||
        pathname === "/dashboard/contact" ||
        pathname === "/dashboard/orders" ||
        pathname === "/dashboard/users" ||
        pathname === "/dashboard/feedbacks" ||
        pathname === "/dashboard/feedbacks"
          ? "App"
          : ""
      }
    >
      {hideNavbar && <Navbar />}
      {hideSidebar && <Sidebar />}

      <Routes>
        {/* ADMIN-PAGE */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/products" element={<Products />} />
        <Route path="/dashboard/users" element={<Users />} />
        <Route path="/dashboard/feedbacks" element={<Feedbacks />} />
        <Route path="/dashboard/orders" element={<Orders />} />
        <Route path="/dashboard/categories" element={<AdminCategories />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* USER-PAGE */}
        <Route path="/" element={<Home />} />
        <Route path="/help" element={<Help />} />
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<Order />} />
        <Route path="/choosesize" element={<ChooseSize />} />
        <Route path="/about" element={<About />} />
        <Route path="/deliverydetail" element={<DeliveryDetail />} />
        <Route path="/categories" element={<UserCategories />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/detailproduct" element={<Detailproduct />} />
      </Routes>
    </div>
  );
}

export default App;

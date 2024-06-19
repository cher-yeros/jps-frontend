import { Route, Routes } from "react-router-dom";
import HomeLayout from "./Layout/HomeLayout";
import Layout from "./Layout/Layout";
import AuthWrapper from "./components/AuthWrapper";
import Dashboard from "./pages/Admin/Dashboard";
import Home from "./pages/Client/Home/Home";
import Login from "./pages/Client/Login";
import MyProfile from "./pages/Client/MyProfile";
import PaymentSuccess from "./pages/Client/PaymentSuccess";
import SignUp from "./pages/Client/SignUp";

function App() {
  return (
    <Routes>
      <Route element={<AuthWrapper />}>
        {" "}
        <Route path="/" element={<HomeLayout />}>
          <Route path="" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/my-profile" element={<MyProfile />} />
        </Route>
        <Route path="/admin" element={<Layout />}>
          <Route path="" element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
        <Route path="/payment-success/:tx_no" element={<PaymentSuccess />} />
      </Route>
    </Routes>
  );
}

export default App;

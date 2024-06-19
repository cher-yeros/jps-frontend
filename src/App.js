import { Route, Routes } from "react-router-dom";
import HomeLayout from "./Layout/HomeLayout";
import Layout from "./Layout/Layout";
import AuthWrapper from "./components/AuthWrapper";
import Dashboard from "./pages/Admin/Dashboard";
import Blog from "./pages/Client/Blog/Blog";
import SingleBlog from "./pages/Client/Blog/SingleBlog";
import Gallery from "./pages/Client/Gallery/Gallery";
import Home from "./pages/Client/Home/Home";
import Login from "./pages/Client/Login";
import MyProfile from "./pages/Client/MyProfile";
import PaymentSuccess from "./pages/Client/PaymentSuccess";
import SignUp from "./pages/Client/SignUp";
import Partnership from "./pages/Client/Partnership/Partnership";

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
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/blog">
            <Route path="" element={<Blog />} />
            <Route path=":title" element={<SingleBlog />} />
          </Route>
          <Route path="/bible-study" element={<Gallery />} />
          <Route path="/partnership" element={<Partnership />} />
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

import { Route, Routes } from "react-router-dom";
import HomeLayout from "./Layout/HomeLayout";
import Layout from "./Layout/Layout";
import AuthWrapper from "./components/AuthWrapper";
import Dashboard from "./pages/Admin/Dashboard";
import Blog from "./pages/Client/Blog/Blog";
import SingleBlog from "./pages/Client/Blog/SingleBlog";
import Gallery from "./pages/Client/Gallery/Gallery";
import Give from "./pages/Client/Give/Give";
import Home from "./pages/Client/Home/Home";
import Login from "./pages/Client/Login";
import MyProfile from "./pages/Client/MyProfile";
import Partnership from "./pages/Client/Partnership/Partnership";
import SignUp from "./pages/Client/SignUp";
import Visitors from "./pages/Client/Visitors/Visitors";
import EmailVerified from "./pages/Status/EmailVerified";
import PaymentSuccessful from "./pages/Status/PaymentSuccessful";

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
          <Route path="/programs">
            <Route path="" element={<Blog />} />
            <Route path=":title" element={<SingleBlog />} />
          </Route>
          <Route path="/bible-study" element={<Gallery />} />
          <Route path="/partnership" element={<Partnership />} />
          <Route path="/visitors" element={<Visitors />} />
          <Route path="/give" element={<Give />} />
        </Route>
        <Route path="/admin" element={<Layout />}>
          <Route path="" element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
        <Route path="/payment-success/:tx_no" element={<PaymentSuccessful />} />
        <Route path="/verify-email/:token" element={<EmailVerified />} />
      </Route>
    </Routes>
  );
}

export default App;

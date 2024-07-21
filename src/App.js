import { Route, Routes } from "react-router-dom";
import HomeLayout from "./Layout/HomeLayout";
import Layout from "./Layout/Layout";
import AuthWrapper from "./components/AuthWrapper";
import BibleStudyApplications from "./pages/Admin/Bible Study/BibleStudyApplications";
import BibleStudySessions from "./pages/Admin/Bible Study/BibleStudySessions";
import Blogs from "./pages/Admin/Blog/Blogs";
import Categorys from "./pages/Admin/Blog/Category";
import Dashboard from "./pages/Admin/Dashboard";
import Feedbacks from "./pages/Admin/Feedbacks";
import AdminGallery from "./pages/Admin/Gallery";
import GalleryCategory from "./pages/Admin/GalleryCategory";
import GuestHousePrayerApplications from "./pages/Admin/Guest House/GuestHousePrayerApplications";
import GuestHousePrayerSchedules from "./pages/Admin/Guest House/GustHousePrayerSchedules";
import Payments from "./pages/Admin/Payments";
import ServiceCategory from "./pages/Admin/ServiceCategory";
import AdminServices from "./pages/Admin/Services";
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

import Partners from "./pages/Admin/Partners";
import Portfolio from "./pages/Client/Home/Portfolio";
import PageNotFound from "./pages/Status/404";
import EmailVerified from "./pages/Status/EmailVerified";
import PaymentSuccessful from "./pages/Status/PaymentSuccessful";
import ResetPassword from "./pages/Status/ResetPassword";

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
          <Route path="/services" element={<Portfolio />} />
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

          <Route path="blog">
            <Route path="posts" element={<Blogs />} />
            <Route path="category" element={<Categorys />} />
          </Route>

          <Route path="partners" element={<Partners />} />
          <Route path="payments" element={<Payments />} />
          <Route path="feedbacks" element={<Feedbacks />} />
          <Route path="service-category" element={<ServiceCategory />} />
          <Route path="services" element={<AdminServices />} />
          <Route path="gallery" element={<AdminGallery />} />
          <Route path="gallery-category" element={<GalleryCategory />} />

          <Route
            path="prophetic-school-sessions"
            element={<BibleStudySessions />}
          />
          <Route
            path="prophetic-school-members"
            element={<BibleStudyApplications />}
          />

          <Route
            path="visitors-schedules"
            element={<GuestHousePrayerSchedules />}
          />
          <Route
            path="visitors-applications"
            element={<GuestHousePrayerApplications />}
          />

          <Route path="my-profile" element={<MyProfile />} />
        </Route>
        <Route path="/payment-success/:tx_no" element={<PaymentSuccessful />} />
        <Route path="/verify-email/:token" element={<EmailVerified />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
}

export default App;

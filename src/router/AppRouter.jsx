// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Home from "../pages/Home";
// import ServicesPage from "../pages/ServicesPage";
// import PricingPage from "../pages/PricingPage";

// const AppRouter = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />

//         <Route
//           path="/services"
//           element={<ServicesPage />}
//         />

//         <Route
//           path="/pricing"
//           element={<PricingPage />}
//         />
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default AppRouter; 
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Home from "../pages/Home";
import ServicesPage from "../pages/ServicesPage";
import PricingPage from "../pages/PricingPage";
import StaffPage from "../pages/StaffPage";
import GalleryPage from "../pages/GalleryPage";
import ContactPage from "../pages/ContactPage";
// import AppointmentPage from "../components/Appointment";
import AboutPage from "../pages/AboutPage";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Services */}
        <Route path="/services" element={<ServicesPage />} />

        {/* Pricing */}
        <Route path="/pricing" element={<PricingPage />} />

        {/* Staff */}
        <Route path="/staff" element={<StaffPage />} />

        {/* Gallery */}
        <Route path="/gallery" element={<GalleryPage />} />

        {/* Contact */}
        <Route path="/contact" element={<ContactPage />} />

        {/* Appointment */}
        {/* <Route path="/appointment" element={<AppointmentPage />} /> */}
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
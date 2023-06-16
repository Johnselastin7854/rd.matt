import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
src/components/Formik.jsximport Root from "./Pages/Layout/Root";
import Home from "./Pages/Home";
import ServicesPage from "./Pages/ServicesPage";
import SpecializedPage from "./Pages/SpecializedPage";
import AboutPage from "./Pages/AboutPage";
import HowWorksPage from "./Pages/HowWorksPage";
import FaqPage from "./Pages/FaqPage";
import TestimonialPage from "./Pages/TestimonialPage";
import CtaPage from "./Pages/CtaPage";
import WhyUsPage from "./Pages/WhyUsPage";

// import Formik from "./components/Formik";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: "service/:id", element: <ServicesPage /> },
      { path: "about", element: <AboutPage /> },
      { path: "howitwork", element: <HowWorksPage /> },
      { path: "specialized", element: <SpecializedPage /> },
      { path: "faq", element: <FaqPage /> },
      { path: "testimonial", element: <TestimonialPage /> },
      { path: "contact", element: <CtaPage /> },
      { path: "whyus", element: <WhyUsPage /> },
    ],
  },
  // { path: "/", element: <Formik /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

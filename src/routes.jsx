// src/routes.js
import Home from "./pages/index";
import About from "./pages/about";
import Home2 from "./pages/index-2";
import CompanyOverview from "./pages/company-overview";
import Contact from "./pages/contact";
import Dashboard from "./pages/dashboard";
import Faq from "./pages/faq";
// import ForgotPassword from "./pages/ForgotPassword";
// import Login from "./pages/login";
import NewsDetails from "./pages/news-details";
import NewsStandard from "./pages/news-standard";
import Pricing from "./pages/pricing";
import Project1 from "./pages/project-1";
import ProjectDetails from "./pages/project-details";
// import SignUpPage from "./pages/SignUpPage";
import TeamMember from "./pages/team-member";
import Testimonial from "./pages/testimonial";

const routes = [
  { path: "/", Component: Home },
  { path: "/index-2", Component: Home2 },
  { path: "/about", Component: About },
  { path: "/company-overview", Component: CompanyOverview },
  { path: "/contact", Component: Contact },
  { path: "/dashboard", Component: Dashboard },
  { path: "/faq", Component: Faq },
  //   { path: "/forgot-password", Component: ForgotPassword },
  // { path: "/login", Component: Login },
  { path: "/cvp", Component: NewsStandard },
  { path: "/pricing", Component: Pricing },
  { path: "/explore", Component: Project1 },
  { path: "/project-details", Component: ProjectDetails },
  //   { path: "/sign-up", Component: SignUpPage },
  { path: "/team-member", Component: TeamMember },
  { path: "/testimonial", Component: Testimonial },
];

export default routes;

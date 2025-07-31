import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./Components/Navbar/navbar";
import FundingSolution from "./Components/Routes/fundingSolution";
import OurProcess from "./Components/Routes/ourProcess";
import WhoWeServe from "./Components/Routes/whoWeServer";
import AboutUs from "./Components/Routes/aboutUs";
import Footer from "./Components/Footer/footer";
import Home from "./Components/Routes/home";
import PrivacyPolicy from "./Components/Routes/privacyPolicy";
import TermsOfService from "./Components/Routes/termsOfService";
import LegalInformation from "./Components/Routes/legalInformation";
import { AnimatePresence, motion } from "framer-motion";
import ScrollToTop from "./Components/scrollToTop";
import "./App.css";
const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 1 }}
  >
    {children}
  </motion.div>
);

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageWrapper>
              <Home />
            </PageWrapper>
          }
        />
        <Route
          path="/funding-solution"
          element={
            <PageWrapper>
              <FundingSolution />
            </PageWrapper>
          }
        />
        <Route
          path="/our-process"
          element={
            <PageWrapper>
              <OurProcess />
            </PageWrapper>
          }
        />
        <Route
          path="/who-we-serve"
          element={
            <PageWrapper>
              <WhoWeServe />
            </PageWrapper>
          }
        />
        <Route
          path="/about-us"
          element={
            <PageWrapper>
              <AboutUs />
            </PageWrapper>
          }
        />
        <Route
          path="/privacy-policy"
          element={
            <PageWrapper>
              <PrivacyPolicy />
            </PageWrapper>
          }
        />
        <Route
          path="/terms-of-service"
          element={
            <PageWrapper>
              <TermsOfService />
            </PageWrapper>
          }
        />
        <Route
          path="/legal-information"
          element={
            <PageWrapper>
              <LegalInformation />
            </PageWrapper>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <AnimatedRoutes />
      <Footer />
    </Router>
  );
}

export default App;

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import SignIn from "./components/SignIn";
import Dashboard from "./components/Dashboard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HomePage from "./pages/HomePage";
import CurrencyPage from "./pages/CurrencyPage";
import ItemsAndSkinsPage from "./pages/ItemsAndSkinsPage";
import AccountsPage from "./pages/AccountsPage";
import PowerLeveling from "./pages/PowerLeveling";
import ViewAllGamesPage from "./pages/ViewAllGamesPage";
import AboutPage from "./pages/AboutPage";
import SupportPage from "./pages/SupportPage";
import PolicyPage from "./pages/PolicyPage";

function App() {
  return (
    <Router>
      <ToastContainer />
      <Routes>
        <Route path="/login" element={<SignIn />} />
        <Route
          path="/dashboard"
          element={
            <Dashboard>
              <HomePage />
            </Dashboard>
          }
        />

        <Route
          path="/currency"
          element={
            <Dashboard>
              <CurrencyPage />
            </Dashboard>
          }
        />

        <Route
          path="/items-and-skins"
          element={
            <Dashboard>
              <ItemsAndSkinsPage />
            </Dashboard>
          }
        />

        <Route
          path="/accounts"
          element={
            <Dashboard>
              <AccountsPage />
            </Dashboard>
          }
        />

        <Route
          path="/power-leveling"
          element={
            <Dashboard>
              <PowerLeveling />
            </Dashboard>
          }
        />

        <Route
          path="/games"
          element={
            <Dashboard>
              <ViewAllGamesPage />
            </Dashboard>
          }
        />

        <Route
          path="/about"
          element={
            <Dashboard>
              <AboutPage />
            </Dashboard>
          }
        />

        <Route
          path="/support"
          element={
            <Dashboard>
              <SupportPage />
            </Dashboard>
          }
        />

        <Route
          path="/policy"
          element={
            <Dashboard>
              <PolicyPage />
            </Dashboard>
          }
        />
        <Route path="/" element={<Navigate replace to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;

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
import { useAuth } from "./context/useAuth";
import LoginButton from "./components/LoginButton";

function App() {
  const { user } = useAuth();

  const message = (
    <div className="h-[100vh] w-full grid place-items-center">
      <div className="flex flex-col gap-2">
        <p>You need to be logged in to view this page</p>
        <LoginButton />
      </div>
    </div>
  );

  return (
    <Router>
      <ToastContainer />
      <Routes>
        <Route path="/login" element={<SignIn />} />
        <Route
          path="/home"
          element={
            <Dashboard>
              <HomePage />
            </Dashboard>
          }
        />

        <Route
          path="/currency"
          element={<Dashboard>{!user ? message : <CurrencyPage />}</Dashboard>}
        />

        <Route
          path="/items-and-skins"
          element={
            <Dashboard>{!user ? message : <ItemsAndSkinsPage />}</Dashboard>
          }
        />

        <Route
          path="/accounts"
          element={<Dashboard>{!user ? message : <AccountsPage />}</Dashboard>}
        />

        <Route
          path="/power-leveling"
          element={<Dashboard>{!user ? message : <PowerLeveling />}</Dashboard>}
        />

        <Route
          path="/games"
          element={
            <Dashboard>{!user ? message : <ViewAllGamesPage />}</Dashboard>
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
        <Route path="/" element={<Navigate replace to="/home" />} />
      </Routes>
    </Router>
  );
}

export default App;

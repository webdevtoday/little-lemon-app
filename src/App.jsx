import { HashRouter as Router, Route, Routes } from "react-router";
import { Layout } from "./components/Layout";
import * as routes from "./routes";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { MenuPage } from "./pages/MenuPage";
import { ReservationPage } from "./pages/ReservationPage";
import { OrderOnlinePage } from "./pages/OrderOnlinePage";
import { LoginPage } from "./pages/LoginPage";
import "./styles/global.css";
import { ReservationProvider } from "./context/reservationContext";
import { ReservationThankYouPage } from "./pages/ReservationThankYouPage";

function App() {
  return (
    <ReservationProvider>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path={routes.homePageRoute()} element={<HomePage />} />
            <Route path={routes.aboutPageRoute()} element={<AboutPage />} />
            <Route path={routes.menuPageRoute()} element={<MenuPage />} />
            <Route
              path={routes.reservationPageRoute()}
              element={<ReservationPage />}
            />
            <Route
              path={routes.reservationThankYouPageRoute()}
              element={<ReservationThankYouPage />}
            />
            <Route
              path={routes.orderOnlinePageRoute()}
              element={<OrderOnlinePage />}
            />
            <Route path={routes.loginPageRoute()} element={<LoginPage />} />
          </Route>
        </Routes>
      </Router>
    </ReservationProvider>
  );
}

export default App;

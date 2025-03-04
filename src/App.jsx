import { BrowserRouter, Route, Routes } from "react-router";
import { Layout } from "./components/Layout";
import * as routes from "./routes";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { MenuPage } from "./pages/MenuPage";
import { ReservationPage } from "./pages/ReservationPage";
import { OrderOnlinePage } from "./pages/OrderOnlinePage";
import { LoginPage } from "./pages/LoginPage";
import "./styles/global.css";

function App() {
  return (
    <BrowserRouter>
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
            path={routes.orderOnlinePageRoute()}
            element={<OrderOnlinePage />}
          />
          <Route path={routes.loginPageRoute()} element={<LoginPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

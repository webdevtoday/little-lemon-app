import { Outlet } from "react-router";
import { Header } from "../Header";
import { Main } from "../Main";
import { Footer } from "../Footer";

export const Layout = () => {
  return (
    <div className="Layout">
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </div>
  );
};

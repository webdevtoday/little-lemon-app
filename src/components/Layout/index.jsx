import { Outlet } from "react-router";
import { Header } from "../Header";
import { Main } from "../Main";
import { Footer } from "../Footer";

export const Layout = () => {
  return (
    <div className="Layout">
      <Header className="section section-body" />
      <Main>
        <Outlet />
      </Main>
      <div className="section-primary">
        <div className="section-body">
          <Footer />
        </div>
      </div>
    </div>
  );
};

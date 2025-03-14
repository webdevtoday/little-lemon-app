import { Outlet } from "react-router";
import { Header } from "../Header";
import { Footer } from "../Footer";
import css from "./index.module.css";

export const Layout = () => {
  return (
    <div className={css.layout}>
      <Header className="section section-body" />
      <main>
        <Outlet />
      </main>
      <div className="section-primary">
        <div className="section-body">
          <Footer />
        </div>
      </div>
    </div>
  );
};

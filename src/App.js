import "./App.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Nav } from "./components/Nav";

function App() {
  return (
    <>
      <Header>
        <img src="__LOGO__" alt="__LOGO__" />
        <Nav>
          <ul>
            {[
              "Home",
              "About",
              "Menu",
              "Reservations",
              "Order online",
              "Login",
            ].map((item) => (
              <li key={item}>
                <a href={`/${item.toLowerCase().split(" ").join("-")}`}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </Nav>
      </Header>
      <Main></Main>
      <Footer>
        <img src="__LOGO__" alt="__LOGO__" />

        <nav>
          <li>Doormat Navigation</li>
          {[
            "Home",
            "About",
            "Menu",
            "Reservations",
            "Order online",
            "Login",
          ].map((item) => (
            <li key={item}>
              <a href={`/${item.toLowerCase().split(" ").join("-")}`}>{item}</a>
            </li>
          ))}
        </nav>

        <nav>
          <li>Contact</li>
          {["Address", "Phone number", "Email"].map((item) => (
            <li key={item}>
              <a href={`/${item.toLowerCase().split(" ").join("-")}`}>{item}</a>
            </li>
          ))}
        </nav>

        <nav>
          <li>Social Media Links</li>
          {["Address", "Phone number", "Email"].map((item) => (
            <li key={item}>
              <a href={`/${item.toLowerCase().split(" ").join("-")}`}>{item}</a>
            </li>
          ))}
        </nav>
      </Footer>
    </>
  );
}

export default App;

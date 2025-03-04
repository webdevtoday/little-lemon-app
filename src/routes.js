export const homePageRoute = () => "/";
export const aboutPageRoute = () => "/about";
export const menuPageRoute = () => "/menu";
export const reservationPageRoute = () => "/reservation";
export const orderOnlinePageRoute = () => "/order-online";
export const loginPageRoute = () => "/login";

export const siteMenu = [
  {
    name: "Home",
    path: homePageRoute(),
  },
  {
    name: "About",
    path: aboutPageRoute(),
  },
  {
    name: "Menu",
    path: menuPageRoute(),
  },
  {
    name: "Reservations",
    path: reservationPageRoute(),
  },
  {
    name: "Order Online",
    path: orderOnlinePageRoute(),
  },
  {
    name: "Login",
    path: loginPageRoute(),
  },
];

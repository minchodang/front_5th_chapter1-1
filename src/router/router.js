import ErrorPage from "../pages/ErrorPage.js";
import LoginPage from "../pages/LoginPage.js";
import MainPage from "../pages/MainPage.js";
import ProfilePage from "../pages/ProfilePage.js";
import { ProfilePageGuard } from "./ProfilePageGuard.js";

export const routes = {
  "/": {
    element: MainPage,
  },
  "/login": {
    element: LoginPage,
  },
  "/profile": {
    guard: ProfilePageGuard,
    element: ProfilePage,
  },
};
const router = () => {
  const path = window.location.pathname;
  const route = routes[path];

  if (!route) {
    document.getElementById("root").innerHTML = ErrorPage;
    return;
  }
  const { guard, element } = route;
  const render = () => element();
  const html = guard ? guard(render) : render();
  document.getElementById("root").innerHTML = html;
};

export default router;

import LoginPage from "./pages/LoginPage.js";
import MainPage from "./pages/MainPage.js";

const routes = {
  "/": MainPage,
  "/login": LoginPage,
};
const router = () => {
  const path = window.location.pathname;
  const page = routes[path] || routes["/"];
  document.getElementById("root").innerHTML = page
    ? page()
    : "<h1>404 Not Found</h1>";
};

export default router;

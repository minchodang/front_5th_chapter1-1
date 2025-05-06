import LoginPage from "../pages/LoginPage";

export const ProfilePageGuard = (render) => {
  const isLoggedIn = localStorage.getItem("username");
  if (!isLoggedIn) {
    window.history.replaceState(null, "", "/login");
    return LoginPage();
  }
  return render();
};

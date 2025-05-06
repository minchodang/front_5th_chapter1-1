import router from "./router/router.js";

router();

window.addEventListener("popstate", router);

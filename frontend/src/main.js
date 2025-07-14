import "./styles/homepage.css";
import "./styles/auth.css";
import "./styles/navbar.css";

import { clearErrorMessagesHandler } from "./util/uiHandler";
import { renderHomepage } from "./components/homepage";
import { handleSignupSubmit } from "./handlers/signupSubmitHandler";
import { renderNavbar } from "./components/navbar";
import { handleSigninSubmit } from "./handlers/signinSubmitHandler";

renderNavbar();
renderHomepage();
clearErrorMessagesHandler();

const signupForm = document.getElementById("myForm");
handleSignupSubmit(signupForm);

import { handleSigninSubmit } from "../handlers/signinSubmitHandler";

export function renderSigninDiv() {
  const signinDiv = document.createElement("div");
  signinDiv.className = "authDiv";

  const title = document.createElement("h1");
  title.innerHTML = "Sign In";
  title.className = "title";

  const signinForm = document.createElement("form");
  signinForm.id = "mySigninForm";
  signinForm.className = "form";
  // signinForm.action = "/signin";

  const emailLabel = document.createElement("label");
  emailLabel.innerHTML = "Email";
  emailLabel.className = "label";
  emailLabel.setAttribute("for", "email");

  const emailInput = document.createElement("input");
  emailInput.setAttribute("type", "text");
  emailInput.className = "input";
  emailInput.id = "email";
  emailInput.name = "email";
  emailInput.placeholder = "Enter your email";
  emailInput.maxLength = "320";

  const errorMsgEmail = document.createElement("h6");
  errorMsgEmail.className = "errMsg";
  errorMsgEmail.id = "errMsgEmail";

  const passwordLabel = document.createElement("label");
  passwordLabel.innerHTML = "Password";
  passwordLabel.className = "label";
  passwordLabel.setAttribute("for", "password");

  const passwordInput = document.createElement("input");
  passwordInput.setAttribute("type", "password");
  passwordInput.className = "input";
  passwordInput.id = "password";
  passwordInput.name = "password";
  passwordInput.placeholder = "Enter a valid password";

  const errorMsgPassword = document.createElement("h6");
  errorMsgPassword.className = "errMsg";
  errorMsgPassword.id = "errMsgPassword";

  const signinBtn = document.createElement("button");
  signinBtn.textContent = "Sign In";
  signinBtn.className = "btn";
  signinBtn.type = "submit";

  signinBtn.addEventListener("click", (event) => {});

  const signupOption = document.createElement("div");
  signupOption.id = "signupOption";

  const signupLink = document.createElement("a");
  signupLink.innerHTML = "Sign Up";

  signupOption.innerHTML = "Do not have an account? ";
  signupOption.append(signupLink);

  signinForm.append(
    emailLabel,
    emailInput,
    errorMsgEmail,
    passwordLabel,
    passwordInput,
    errorMsgPassword,
    signinBtn,
    signupOption
  );

  signinDiv.append(title, signinForm);

  const homepage = document.querySelector("#homepage");
  homepage.replaceChildren();
  homepage.append(signinDiv);

  const mySigninForm = document.getElementById("mySigninForm");
  handleSigninSubmit(mySigninForm);
}

import { renderSignoutDiv } from "../components/signout";

export async function showMessage(response) {
  const msg = response.message;

  if (msg === "Name is required") {
    document.querySelector("#errMsgName").innerHTML = msg;
  } else if (msg === "email already exist") {
    document.querySelector("#errMsgEmail").innerHTML = msg;
  } else if (
    msg === "password too short" ||
    "Password must include uppercase, lowercase, number, and @"
  ) {
    document.querySelector("#errMsgPassword").innerHTML = msg;
  }
}

export async function signUpDoneMsg() {
  let homepage = document.querySelector("#homepage");
  homepage.firstChild.replaceChildren();
  homepage.firstChild.innerHTML = "You have successfully signed up!";
}

export function clearErrorMessagesHandler() {
  const nameInput = document.querySelector("#name");
  const emailInput = document.querySelector("#email");
  const passwordInput = document.querySelector("#password");

  nameInput?.addEventListener("input", () => {
    document.querySelector("#errMsgName").innerHTML = "";
  });
  emailInput?.addEventListener("input", () => {
    document.querySelector("#errMsgEmail").innerHTML = "";
  });
  passwordInput?.addEventListener("input", () => {
    document.querySelector("#errMsgPassword").innerHTML = "";
  });
}

export async function signInDoneMsg() {
  let homepage = document.querySelector("#homepage");
  homepage.firstChild.replaceChildren();
  homepage.firstChild.innerHTML = "You have successfully signed in!";

  renderSignoutDiv();
}

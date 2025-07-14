import { renderSignupDiv } from "./signup";

const homepage = document.querySelector("#homepage");

export function renderHomepage() {
  let signupDiv = renderSignupDiv();
  homepage.append(signupDiv);

  const inputs = document.querySelectorAll(".input");

  inputs.forEach((input) => {
    input.addEventListener("blur", () => {
      if (input.value.trim() !== "") {
        input.classList.add("filled");
      } else {
        input.classList.remove("filled");
      }
    });
  });
}

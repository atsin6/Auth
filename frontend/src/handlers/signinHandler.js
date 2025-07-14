import { renderSigninDiv } from "../components/signin";

export async function goToSigninPage(siginLink) {
  siginLink.addEventListener("click", async (event) => {
    siginLink.classList.add("active-link");
    renderSigninDiv();
  });
}

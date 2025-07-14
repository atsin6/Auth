export function renderSignoutDiv() {
  let navigation = document.querySelector("#navigation");

  let signoutBtn = document.createElement("btn");
  signoutBtn.textContent = "Sign Out";
  signoutBtn.className = "btn";
  signoutBtn.type = "button";
  signoutBtn.id = "signoutBtn";

  navigation.append(signoutBtn);
}

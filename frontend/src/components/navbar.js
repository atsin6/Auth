export function renderNavbar() {
  const navbar = document.querySelector("#navbar");

  let title = document.createElement("h1");
  title.innerHTML = "Taskify.Do";
  title.id = "title";

  let navigation = document.createElement("div");
  navigation.id = "navigation";

  navbar.append(title, navigation);
  return navbar;
}

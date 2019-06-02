const currentTheme = localStorage.getItem("theme");

if (currentTheme === "light") {
  document
    .querySelector("meta[name='theme-color']")
    .setAttribute("content", "#FAFAFA");
  document.body.setAttribute("data-theme", currentTheme);
} else {
  document
    .querySelector("meta[name='theme-color']")
    .setAttribute("content", "#121212");
}

function switchTheme() {
  if (document.body.getAttribute("data-theme") === "light") {
    document
      .querySelector("meta[name='theme-color']")
      .setAttribute("content", "#121212");
    localStorage.setItem("theme", "dark");
    document.body.setAttribute("data-theme", "dark");
  } else {
    document
      .querySelector("meta[name='theme-color']")
      .setAttribute("content", "#FAFAFA");
    localStorage.setItem("theme", "light");
    document.body.setAttribute("data-theme", "light");
  }
}

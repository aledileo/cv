window.addEventListener("beforeprint", function(event) {
  const details = document.getElementsByClassName("details");
  for (let i = 0; i < details.length; i++) {
    details.item(i).setAttribute("open", true);
  }
});

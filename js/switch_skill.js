const DEFAULT_INITIAL = "attPerception";

let nav_options = document.getElementsByClassName("selectable-icon");

for(let i = 0; i < nav_options.length; i++){
  let element = nav_options[i];
  element.addEventListener("click", () => {
    loadAttribute(element.id);
  });
}

let selected = null;
loadAttribute(DEFAULT_INITIAL);

function loadAttribute(name) {
  if (selected != null) {
    document.getElementById(selected).className = "selectable-icon";
  }
  selected = name;
  document.getElementById(selected).className = "selected-icon";
  loadAttributeInHtml(selected);
  updatePerksListeners();
}
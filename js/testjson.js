let nav_options = document.getElementsByClassName("selectable-icon");

for(let i = 0; i < nav_options.length; i++){
  let element = nav_options[i];
  element.addEventListener("click", () => {
    console.log(element.id);
  });
}
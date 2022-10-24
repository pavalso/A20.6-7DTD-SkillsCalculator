const ICON_PANEL = document.getElementById("icon-panel");
const ATTRIBUTES_TREE = document.getElementById("attributes-tree");

const ICON_DIV = (icon, id) => `
  <div class="selectable-icon" id="${id}" title=${id} alt=${icon}>
    <img src="public/icons/${icon}.png">
  </div>`;

const ATTR_DIV = (margin, id, icon, name, max_level, level, parent) => `
  <div class="list-item" id="selectable">
    <div class="margin-${margin}" id="${parent}">
    <div class="attribute-list-item" id="${id}">
      <img src="public/icons/${icon}.png">
      <div class="info">
        <label>${name}</label>
        <label>${level}/${max_level}</label>
      </div>
    </div>
    </div>
  </div>`;

  const SKILL_DIV = (margin, id, icon, name) => `
  <div class="list-item" id="non-selectable">
    <div class="margin-${margin}">
      <div class="attribute-list-item" id="${id}">
        <img src="public/icons/${icon}.png">
        <div class="info">
          <label>${name}</label>
          <label></label>
        </div>
      </div>
    </div>
  </div>`;

for (let attribute in data) {
  let attributeData = data[attribute];
  let icon = attributeData["icon"];
  let new_icon = ICON_DIV(icon, attribute);
  ICON_PANEL.innerHTML += new_icon;
}

function loadAttributeInHtml(name) {
  clear();
  let attributeData = data[name];
  let new_attr = ATTR_DIV(0, name , attributeData["icon"], attributeData["name"], attributeData["max_level"], 0, "None");
  ATTRIBUTES_TREE.innerHTML += new_attr;
  for (let skillI in attributeData["skills"]){
    let skill = attributeData["skills"][skillI];
    new_attr = SKILL_DIV(1, skillI, skill["icon"], skill["name"]);
    ATTRIBUTES_TREE.innerHTML += new_attr;
    for (let perkI in skill["perks"]){
      let perk = skill["perks"][perkI];
      new_attr = ATTR_DIV(2, perkI, perk["icon"], perk["name"], perk["max_level"], 0, skillI);
      ATTRIBUTES_TREE.innerHTML += new_attr;
    }
  }

  function clear() {
    let actual_tree = document.querySelectorAll(".list-item");
    actual_tree.forEach(node => {
      node.remove();
    })
  }
}
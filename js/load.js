const ICON_PANEL = document.getElementById("icon-panel");
const ATTRIBUTES_TREE = document.getElementById("attributes-tree");
const USED_POINTS = document.getElementById("used-points");

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
        <label><span id="level">${level}</span>/${max_level}</label>
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

let user_levels = { };
let cost = 0;

for (let attribute in data) {
  let attributeData = data[attribute];
  let icon = attributeData["icon"];
  let new_icon = ICON_DIV(icon, attribute);
  ICON_PANEL.innerHTML += new_icon;
}

for (let i in data){
  let attribute = data[i];
  user_levels[i] = 2;
  for (let x in attribute["skills"]){
    let skill = attribute["skills"][x];
    for (let y in skill["perks"]){
      user_levels[y] = 1;
    }
  }
}

let index = window.location.href.indexOf("#");
if (index != -1){
  loadSaveString(window.location.href.substring(index + 1));
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

  refreshLevels();

  function clear() {
    ATTRIBUTES_TREE.innerHTML = "";
  }
}

function refreshLevels() {
  let levels_spans = ATTRIBUTES_TREE.querySelectorAll("#level");
  for (let i = 0; i < levels_spans.length; i++) {
    let level = levels_spans[i];
    let id = level.parentNode.parentNode.parentNode.id;
    level.textContent = user_levels[id] - 1 || 0;
  }
  USED_POINTS.textContent = cost;
  window.location.replace(`\#${getSaveString()}`);
}

function getSaveString() {
  let save_string = `${cost}-`;
  for (let i in user_levels){
    let level = user_levels[i];
    save_string += (level - 1).toString(16);
  }
  return save_string;
}

function loadSaveString(string) {
  let x = 0;
  let index = string.indexOf("-");
  if (index == -1){
    return;
  }
  cost = parseInt(string.substring(0, index));
  let input_levels = string.substring(index + 1);
  for (let i in user_levels){
    let level = parseInt(input_levels[x], 16) + 1;
    if (isNaN(level)){
      return;
    }
    user_levels[i] = level;
    x += 1;
  }
}
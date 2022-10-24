const PERK_NAME = document.getElementById("perk-name");
const PERK_ICON = document.getElementById("perk-icon");
const PERK_DESCRIPTION = document.getElementById("perk-description");
const LEVELS_TREE = document.getElementById("levels-tree");

const PERK_DIV = (index, name, description, id, state, cost) => `
  <div class="${state}" id="${id}">
    <div class="selectable-perk">
      <label id="perk-index">${index}</label>
      <div>
        <label id="perk-level-name">${name}</label>
        <label>${description}</label>
      </div>
      <img src="public/icons/ui_game_symbol_bat.png" title="Cost : ${cost} point(s)">
    </div>
  </div>`;

let selected_perk_div = null;
let selected_perk_data = null;

function updatePerksListeners() {
  let items = document.querySelectorAll('[id=selectable]');
  selectPerk(items[0]);
  for(let i = 0; i < items.length; i++){
    let item = items[i];
    item.addEventListener("click", () => {
      selectPerk(item);
    });
  }
}

function selectPerk(perkElement) {
  if (selected_perk_div != null){
    selected_perk_div.id = "selectable";
  }
  let skill = perkElement.children[0].id;
  let perk = perkElement.children[0].children[0].id;
  let perk_data = { };
  if (skill == "None"){
    perk_data = data[selected];
  } else {
    perk_data = data[selected]["skills"][skill]["perks"][perk];
  }
  selected_perk_div = perkElement;
  selected_perk_div.id = "selected";
  selected_perk_data = perk_data;
  showPerkInfo(perk_data, perk);
}

function showPerkInfo(perk, key) {
  clear();
  PERK_NAME.textContent = perk["name"];
  PERK_ICON.src = `public/icons/${perk["icon"]}.png`;
  PERK_DESCRIPTION.textContent = perk["description"];
  let levels = perk["levels"];
  for (let i in levels) {
    let level = levels[i];
    let actual_level = user_levels[key] || 1;
    let status = "blocked-perk";
    if (i < actual_level){
      status = "bought-perk";
    } else if (i == actual_level){
      status = "unblocked-perk";
    }
    let new_div = PERK_DIV(i, level["short_description"], level["long_description"], i, status, level["cost"]);
    LEVELS_TREE.innerHTML += new_div;
  }
  for (let i in levels) {
    let element = document.getElementById(i);
    element.addEventListener("click", () => {
      if (element.className != "unblocked-perk") {
        return;
      }
      let id = element.id;
      let level = levels[id];
      let index = parseInt(id);
      user_levels[key] = index + 1;
      element.className = "bought-perk";
      refreshLevels();
      if (index >= perk["max_level"]) {
        return;
      }
      document.getElementById(index + 1).className = "unblocked-perk";
    })
  }

  function clear() {
    LEVELS_TREE.innerHTML = "";
  }
}

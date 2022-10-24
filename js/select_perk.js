const PERK_NAME = document.getElementById("perk-name");
const PERK_ICON = document.getElementById("perk-icon");
const PERK_DESCRIPTION = document.getElementById("perk-description");
const LEVELS_TREE = document.getElementById("levels-tree");

const PERK_DIV = (index, name, description) => `
  <div class="unblocked-perk" id="perk">
    <div class="selectable-perk">
      <label id="perk-index">${index}</label>
      <div>
        <label id="perk-level-name">${name}</label>
        <label>${description}</label>
      </div>
      <img src="public/icons/ui_game_symbol_bat.png" alt="">
    </div>
  </div>`;

let selected_perk = null

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
  if (selected_perk != null){
    selected_perk.id = "selectable";
  }
  let skill = perkElement.children[0].id;
  let perk = perkElement.children[0].children[0].id;
  let perk_data = { };
  if (skill == "None"){
    perk_data = data[selected];
  } else {
    perk_data = data[selected]["skills"][skill]["perks"][perk];
  }
  selected_perk = perkElement;
  selected_perk.id = "selected";
  showPerkInfo(perk_data);
}

function showPerkInfo(perk) {
  clear();
  PERK_NAME.textContent = perk["name"];
  PERK_ICON.src = `public/icons/${perk["icon"]}.png`;
  PERK_DESCRIPTION.textContent = perk["description"];
  let levels = perk["levels"];
  for (let i in levels){
    let level = levels[i];
    let new_div = PERK_DIV(i, level["short_description"], level["long_description"]);
    LEVELS_TREE.innerHTML += new_div;
  }

  function clear() {
    let actual_tree = LEVELS_TREE.querySelectorAll("#perk");
    actual_tree.forEach(node => {
      node.remove();
    })
  }
}

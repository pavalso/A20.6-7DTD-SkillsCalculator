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
  //showPerkInfo(selected_perk);
}
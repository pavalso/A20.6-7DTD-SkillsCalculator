const ICON_PANEL = document.getElementById("icon-panel");


let currentAttribute = null;
let lastSelected = null;
let attributesMap = { };

function onDocumentLoad() {

  for (let attrKey in data) {
    let attribute = new Attribute(attrKey);
    attributesMap[attrKey] = attribute;
    let newIconDiv = ICON_DIV(attribute.icon, attrKey);
    ICON_PANEL.append(newIconDiv);
    newIconDiv.addEventListener("click", () => {
      onIconClick(attribute);
    })
  }

  let defaultAttribute = ICON_PANEL.firstElementChild;
  let index = window.location.href.indexOf("#");
  if (index != -1){
    loadSaveString(window.location.href.substring(index + 1));
  }
  changeSelectedAttribute(attributesMap[defaultAttribute.id]);

  function onIconClick(attribute) {
    changeSelectedAttribute(attribute);
  }
}

function changeSelectedAttribute(attribute) {
  let div = ICON_PANEL.querySelector(`#${attribute.key}`);
  if (lastSelected != null) {
    let lastDiv = ICON_PANEL.querySelector(`#${lastSelected.key}`);
    lastDiv.className = "selectable-icon";
  }
  div.className = "selected-icon"
  lastSelected = attribute;
  let treeDivs = displayAttribute(attribute);
  for (const [skill, perks] of Object.entries(treeDivs)) {
    perks.forEach((perkDiv, i) => {
      let perk = attribute;
      if (skill) {
        perk = attribute.skills[skill].perks[perkDiv.id];
      }
      perkDiv.addEventListener("click", () => {
        onPerkClick(perk);
      });
    });
  }

  currentAttribute = attribute;
  changeSelectedPerk(currentAttribute);

  function onPerkClick(perk) {
    changeSelectedPerk(perk);
  }
}

function changeSelectedPerk(perk) {
  let levelsDivs = displayAttrPerkData(perk);
  levelsDivs.forEach(div => {
    div.addEventListener("click", () => {
      let state = div.className;
      let id = div.id;
      if (state != STATES.unblocked){
        return;
      }
      perk.levels[id].isBought = true;
      changeSelectedPerk(perk);
      let levelDiv = document.getElementById(`level-${perk.key}`);
      levelDiv.textContent = getLevel(perk);
    });
  });
} 

function getSaveString() {
  let saveString = "";
  for (const [key, attr] of Object.entries(attributesMap)) {
    saveString += `-${attr.toSaveString()}`;
  }
  saveString = saveString.substring(1);
  return saveString;
}

function loadSaveString(saveString) {
  let strings = saveString.split("-")
  for (const [key, attr] of Object.entries(attributesMap)) {
    let attrSaveString = strings.shift();
    attr.updateFromSaveString(attrSaveString);
  }
}

onDocumentLoad();
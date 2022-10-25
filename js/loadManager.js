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
      if (!skill) {
        return;
      }
      let perk = attribute.skills[skill].perks[perkDiv.id];
      perkDiv.addEventListener("click", () => {
        currentAttribute = attribute;
        onPerkClick(perk);
      });
    });
  }

  function onPerkClick(perk) {
    changeSelectedPerk(perk);
  }
}

function changeSelectedPerk(perk) {
  displayAttrPerkData(perk);
} 

onDocumentLoad();
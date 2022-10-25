const ATTRIBUTES_TREE = document.getElementById("attributes-tree");
const LEVELS_TREE = document.getElementById("levels-tree");

const USED_POINTS = document.getElementById("used-points");

const PERK_NAME = document.getElementById("perk-name");
const PERK_ICON = document.getElementById("perk-icon");
const PERK_DESCRIPTION = document.getElementById("perk-description");

const STATES = {
  blocked : "blocked-perk",
  unblocked : "unblocked-perk",
  bought : "bought-perk"
}


function displayAttribute(attribute) {
  ATTRIBUTES_TREE.innerHTML = "";
  let newTreeDiv = SELECTABLE_SKILL(0, attribute.key, attribute.icon, attribute.name, attribute.maxLevel, 0);
  let newDivs = {"": [newTreeDiv]};
  ATTRIBUTES_TREE.append(newTreeDiv);
  for (const [key, skill] of Object.entries(attribute.skills)) {
    newTreeDiv = UNSELECTABLE_SKILL(1, skill.key, skill.icon, skill.name);
    ATTRIBUTES_TREE.append(newTreeDiv);
    newDivs[skill.key] = [ ];
    for (const [key, perk] of Object.entries(skill.perks)) {
      newTreeDiv = SELECTABLE_SKILL(2, perk.key, perk.icon, perk.name, perk.maxLevel, 0);
      newDivs[skill.key].push(newTreeDiv);
      ATTRIBUTES_TREE.append(newTreeDiv);
    }
  }
  return newDivs;
}

function displayAttrPerkData(element) {
  LEVELS_TREE.innerHTML = "";
  PERK_NAME.textContent = element.name;
  PERK_ICON.src = `public/icons/${element.icon}.png`;
  PERK_DESCRIPTION.textContent = element.description;
  for (const [i, level] of Object.entries(element.levels)) {
    let state = STATES.blocked;
    if (level.isBought) {
      state = STATES.bought;
    } else if (level.requiredLevel < getLevel(currentAttribute)) {
      state = STATES.blocked;
    }
    let newDiv = PERK_DIV(i, level.name, level.description, level.key, state, level.cost);
    LEVELS_TREE.append(newDiv);
  }
}

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
  let newTreeDiv = SELECTABLE_SKILL(0, attribute.key, attribute.icon, attribute.name, attribute.maxLevel, getLevel(attribute));
  let newDivs = {"": [newTreeDiv]};
  ATTRIBUTES_TREE.append(newTreeDiv);
  for (const [key, skill] of Object.entries(attribute.skills)) {
    newTreeDiv = UNSELECTABLE_SKILL(1, skill.key, skill.icon, skill.name);
    ATTRIBUTES_TREE.append(newTreeDiv);
    newDivs[skill.key] = [ ];
    for (const [key, perk] of Object.entries(skill.perks)) {
      newTreeDiv = SELECTABLE_SKILL(2, perk.key, perk.icon, perk.name, perk.maxLevel, getLevel(perk));
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
  let currentLevel = getLevel(element);
  let levelsDivs = [ ];
  for (const [i, level] of Object.entries(element.levels)) {
    let state = STATES.blocked;
    if (level.isBought) {
      state = STATES.bought;
      if (!(isLevelAvailable(level))) {
        level.isBought = false;
        state = STATES.blocked;
      }
    } else if (isLevelAvailable(level) && parseInt(level.key) == currentLevel + 1) {
      state = STATES.unblocked;
    }
    let newDiv = PERK_DIV(i, level.name, level.description, level.key, state, level.requiredLevel);
    LEVELS_TREE.append(newDiv);
    levelsDivs.push(newDiv);
  }
  return levelsDivs;
}

function updateTotalPointCost() {
  USED_POINTS.innerText = getTotalPointCost();
}

function getTotalPointCost() {
  let cost = 0;
  for (const [key, attr] of Object.entries(attributesMap)) {
    cost += attr.getPointCost();
  }
  return cost;
}

function isLevelAvailable(level) {
  return level.requiredLevel <= getLevel(currentAttribute)
}
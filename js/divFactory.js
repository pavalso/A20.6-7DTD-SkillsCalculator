const ICON_DIV = (icon, id) => {
    let wrapper = document.createElement("div");
    wrapper.innerHTML = `<div class="selectable-icon" id="${id}" title=${id} alt=${icon}>
      <img src="public/icons/${icon}.png">
    </div>`;
    let div = wrapper.firstChild;
    return div;
};

const SELECTABLE_SKILL = (margin, id, icon, name, max_level, level) => {
    let wrapper = document.createElement("div");
    wrapper.innerHTML = `<div id="${id}">
      <div class="list-item" id="selectable">
        <div class="margin-${margin}">
        <div class="attribute-list-item">
          <img src="public/icons/${icon}.png">
          <div class="info">
            <label>${name}</label>
            <label><span id="level-${id}">${level}</span>/${max_level}</label>
          </div>
        </div>
        </div>
      </div>
    </div>`;
    return wrapper.firstChild;
};
  
const UNSELECTABLE_SKILL = (margin, id, icon, name) => {
    let wrapper = document.createElement("div");
    wrapper.innerHTML = `<div class="list-item" id="${id}">
      <div class="margin-${margin}" id="non-selectable" >
        <div class="attribute-list-item">
          <img src="public/icons/${icon}.png">
          <div class="info">
            <label>${name}</label>
            <label></label>
          </div>
        </div>
      </div>
    </div>`;
    return wrapper.firstChild;
};

const PERK_DIV = (index, name, description, id, state, cost) => {
    let wrapper = document.createElement("div");
    wrapper.innerHTML = `<div class="${state}" id="${id}">
      <div class="levels-tree" id="levels-tree">
        <div class="selectable-perk">
          <label id="perk-index">${index}</label>
          <div>
            <label id="perk-level-name">${name}</label>
            <label>${description}</label>
          </div>
          <label class="level-needed">${cost}</label>
        </div>
      </div>
    </div>`;
    return wrapper.firstChild;
};

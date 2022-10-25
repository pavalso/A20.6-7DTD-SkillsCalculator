
class JsonObject {
    constructor(key, rawData=data) {
        this.key = key;
        this.read(rawData);
    }
}

class Level extends JsonObject{
    constructor(level, data) {
        super(level, data);
        this.isBought = true;
    }

    read(rawData) {
        let levelData = rawData["levels"][this.key];
        this.name = levelData["short_description"];
        this.description = levelData["long_description"];
        this.cost = levelData["cost"];
        let requirementData = rawData["requirements"];
        if (requirementData == null){
            this.requiredLevel = null;
            return;
        }
        requirementData = requirementData[this.key];
        this.requiredLevel = requirementData["required_level"];
        this.blockedDescription = requirementData["description"];
    }
}

class Perk extends JsonObject {
    constructor(perk, data) {
        super(perk, data);
    }

    read(rawData) {
        this.levels = { };
        let attrData = rawData[this.key];
        this.nameKey = attrData["name_key"];
        this.name = attrData["name"];
        this.icon = attrData["icon"];
        this.description = attrData["description"];
        this.maxLevel = attrData["max_level"];
        let levels = attrData["levels"];
        for (let i in levels) {
            let newLevel = new Level(i, attrData);
            this.levels[i] = newLevel;
        }
    }
}

class Skill extends JsonObject {
    constructor(skill, data) {
        super(skill, data);
    }

    read(rawData) {
        this.perks = { };
        let attrData = rawData[this.key];
        this.nameKey = attrData["name_key"];
        this.name = attrData["name"];
        this.icon = attrData["icon"];
        let perks = attrData["perks"];
        for (let name in perks) {
            let newPerk = new Perk(name, perks);
            this.perks[name] = newPerk;
        }
    }
}

class Attribute extends JsonObject {
    constructor(key) {
        super(key);
    }

    read(rawData) {
        this.levels = { };
        this.skills = { };
        let attrData = rawData[this.key];
        this.nameKey = attrData["name_key"];
        this.name = attrData["name"];
        this.icon = attrData["icon"];
        this.description = attrData["description"];
        this.maxLevel = attrData["max_level"];
        let levels = attrData["levels"];
        for (let i in levels) {
            let newLevel = new Level(i, attrData);
            this.levels[i] = newLevel;
        }
        let skill = attrData["skills"];
        for (let name in skill) {
            let newSkill = new Skill(name, skill);
            this.skills[name] = newSkill;
        }
    }
}

function getLevel(haveLevelsAttribute) {
    let lastLevel = null;
    for (let i in haveLevelsAttribute.levels) {
        let level = haveLevelsAttribute.levels[i];
        if (!level.isBought) {
            break;
        }
        lastLevel = level;
    }
    if (!lastLevel) {
        return 0;
    }
    return lastLevel.key;
}

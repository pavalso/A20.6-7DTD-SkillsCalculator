
class JsonObject {
    constructor(key, rawData=data) {
        this.key = key;
        this.read(rawData);
    }
}

class Level extends JsonObject{
    constructor(level, data) {
        super(level, data);
        this.isBought = false;
    }

    read(rawData) {
        let levelData = rawData["levels"][this.key];
        this.name = levelData["short_description"];
        this.description = levelData["long_description"];
        this.cost = levelData["cost"];
        let requirementData = rawData["requirements"];
        if (requirementData == null){
            this.requiredLevel = 0;
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
        this.perks = { };
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
        this.levels["1"].isBought = true;
        let skill = attrData["skills"];
        for (let name in skill) {
            let newSkill = new Skill(name, skill);
            this.skills[name] = newSkill;
            for (const [key, perk] of Object.entries(newSkill.perks)) {
                this.perks[key] = perk;
            }
        }
        this.perks[this.key] = this;
    }

    setLevel(level, perk) {
        let perkData = this.perks[perk];
        while ((level -= 1) >= 0) {
            if (perkData.maxLevel < level + 1) {
                return;
            }
            perkData.levels[level + 1].isBought = true;
        }
    }

    toSaveString() {
        let saveString = "";
        for (const [key, perk] of Object.entries(this.perks)) {
            saveString += getLevel(perk).toString(16);
        }
        return saveString;
    }

    updateFromSaveString(saveString) {
        saveString = [...saveString];
        for (const [key, perk] of Object.entries(this.perks)) {
            this.setLevel(parseInt(saveString.shift(), 16), key);
        }
    }

    getPointCost() {
        let cost = -1;
        for (const [key, perk] of Object.entries(this.perks)) {
            for (const [key, level] of Object.entries(perk.levels)) {
                if (!level.isBought) {
                    continue;
                }
                cost += level.cost;
            }
        }
        return cost;
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
    return parseInt(lastLevel.key);
}

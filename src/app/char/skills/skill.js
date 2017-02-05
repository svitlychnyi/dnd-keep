System.register(["./../abilities/abitly"], function (exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  var abitly_1;
  var Skill;
  return {
    setters: [
      function (abitly_1_1) {
        abitly_1 = abitly_1_1;
      }],
    execute: function () {
      Skill = (function () {
        function Skill(name, label, ability) {
          this.name = name;
          this.label = label;
          this.ability = ability;
          Skill.ALL.push(this);
        }
        ;
        Skill.prototype.getName = function () {
          return this.name;
        };
        Skill.prototype.getLabel = function () {
          return this.label;
        };
        ;
        Skill.prototype.getAbility = function () {
          return this.ability;
        };
        ;
        Skill.ALL = [];
        Skill.ALCHEMY = new Skill("alchemy", "Alchemy", abitly_1.Ability.INT);
        Skill.ANIMAL_EMPATHY = new Skill("animalEmpathy", "Animal Empathy", abitly_1.Ability.CHA);
        Skill.APPRISE = new Skill("apprise", "Apprise", abitly_1.Ability.INT);
        Skill.BALANCE = new Skill("balance", "Balance", abitly_1.Ability.DEX);
        Skill.BLUFF = new Skill("bluff", "Bluff", abitly_1.Ability.CHA);
        Skill.CLIMB = new Skill("climb", "Climb", abitly_1.Ability.STR);
        Skill.CONCENTRATION = new Skill("concentration", "Concentration", abitly_1.Ability.CON);
        Skill.CRAFT_1 = new Skill("craft1", "Craft", abitly_1.Ability.INT);
        Skill.DECIPHER_SCRIPT = new Skill("decipherScript", "Decipher Script", abitly_1.Ability.INT);
        Skill.DIPLOMACY = new Skill("diplomacy", "Diplomacy", abitly_1.Ability.CHA);
        Skill.DISABLE_DEVICE = new Skill("disableDevice", "Disable Device", abitly_1.Ability.INT);
        Skill.DISGUISE = new Skill("disguise", "disguise", abitly_1.Ability.CHA);
        Skill.ESCAPE_ARTIST = new Skill("escapeArtist", "Escape Artist", abitly_1.Ability.DEX);
        Skill.FORGERY = new Skill("forgery", "Forgery", abitly_1.Ability.INT);
        Skill.GATHER_INFORMATION = new Skill("gatherInformation", "Gather Information", abitly_1.Ability.DEX);
        Skill.HANDLE_ANIMAL = new Skill("handleAnimal", "Handle Animal", abitly_1.Ability.CHA);
        Skill.HEAL = new Skill("heal", "Heal", abitly_1.Ability.INT);
        Skill.HIDE = new Skill("hide", "Hide", abitly_1.Ability.DEX);
        Skill.INNUENDO = new Skill("innuendo", "Innuendo", abitly_1.Ability.WIS);
        Skill.INTIMIDATE = new Skill("intimidate", "Intimidate", abitly_1.Ability.CHA);
        Skill.INTUIT_DIRECTION = new Skill("intuitDirection", "Intuit Direction", abitly_1.Ability.WIS);
        Skill.JUMP = new Skill("jump", "Jump", abitly_1.Ability.STR);
        Skill.KNOWLEDGE_ARC = new Skill("knowledgeArc", "Knowledge (Arcana)", abitly_1.Ability.INT);
        Skill.KNOWLEDGE_NATURE = new Skill("knowledgeNature", "Knowledge (Nature)", abitly_1.Ability.INT);
        Skill.KNOWLEDGE_RELIGION = new Skill("knowledgeReligion", "Knowledge (Religion)", abitly_1.Ability.INT);
        Skill.KNOWLEDGE_PLANAR = new Skill("knowledgePlanar", "Knowledge (Planar)", abitly_1.Ability.INT);
        Skill.KNOWLEDGE_HISTORY = new Skill("knowledgeHistory", "Knowledge (History)", abitly_1.Ability.INT);
        Skill.KNOWLEDGE_3 = new Skill("knowledge3", "Knowledge", abitly_1.Ability.INT);
        Skill.KNOWLEDGE_4 = new Skill("knowledge4", "Knowledge", abitly_1.Ability.INT);
        Skill.KNOWLEDGE_5 = new Skill("knowledge5", "Knowledge", abitly_1.Ability.INT);
        Skill.LISTEN = new Skill("listen", "Listen", abitly_1.Ability.WIS);
        Skill.MOVE_SILENTLY = new Skill("moveSilently", "Move Silently", abitly_1.Ability.DEX);
        Skill.OPEN_LOCK = new Skill("openLock", "Open Lock", abitly_1.Ability.DEX);
        Skill.PERFORM = new Skill("perform", "Perform", abitly_1.Ability.CHA);
        Skill.PICK_POCKETS = new Skill("pickPockets", "Pick Pockets", abitly_1.Ability.DEX);
        Skill.PROFESSION_1 = new Skill("profession1", "Profession", abitly_1.Ability.INT);
        Skill.PROFESSION_2 = new Skill("profession2", "Profession", abitly_1.Ability.INT);
        Skill.PROFESSION_3 = new Skill("profession3", "Profession", abitly_1.Ability.INT);
        Skill.READ_LIPS = new Skill("readLips", "Read Lips", abitly_1.Ability.INT);
        Skill.RIDE = new Skill("ride", "Ride", abitly_1.Ability.DEX);
        Skill.SCRY = new Skill("scry", "Scry", abitly_1.Ability.INT);
        Skill.SEARCH = new Skill("search", "Search", abitly_1.Ability.INT);
        Skill.SENSE_MOTIVE = new Skill("senseMotive", "Sense Motive", abitly_1.Ability.WIS);
        Skill.SPEAK_LANGUAGE = new Skill("speakLanguage", "Speak Language", abitly_1.Ability.INT);
        Skill.SPELLCRAFT = new Skill("spellcraft", "Spellcraft", abitly_1.Ability.INT);
        Skill.SPOT = new Skill("spot", "Spot", abitly_1.Ability.WIS);
        Skill.SWIM = new Skill("swim", "Swim", abitly_1.Ability.STR);
        Skill.TUMBLE = new Skill("tumble", "Tumble", abitly_1.Ability.DEX);
        Skill.USE_MAGIC_DEVICE = new Skill("useMagicDevice", "Use Magic Device", abitly_1.Ability.CHA);
        Skill.USE_ROPE = new Skill("useRope", "Use Rope", abitly_1.Ability.DEX);
        Skill.WILDERNESS_LORE = new Skill("wildernessLore", "Wilderness Lore", abitly_1.Ability.WIS);
        Skill.PLACEHOLDER_1 = new Skill("placeholder1", "", abitly_1.Ability.INT);
        Skill.PLACEHOLDER_2 = new Skill("placeholder2", "", abitly_1.Ability.INT);
        return Skill;
      }());
      exports_1("Skill", Skill);
    }
  }
});
//# sourceMappingURL=skill.js.map

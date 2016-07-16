import {Ability} from "./../abilities/abitly";

export class Skill {
	public static ALL:Skill[] = [];

    public static ALCHEMY:Skill = new Skill("alchemy", "Alchemy", Ability.INT);
    public static ANIMAL_EMPATHY:Skill = new Skill("animalEmpathy", "Animal Empathy", Ability.CHA);
    public static APPRISE:Skill = new Skill("apprise", "Apprise", Ability.INT);
    public static BALANCE:Skill = new Skill("balance", "Balance", Ability.DEX);
    public static BLUFF:Skill = new Skill("bluff", "Bluff", Ability.CHA);
    public static CLIMB:Skill = new Skill("climb", "Climb", Ability.STR);
    public static CONCENTRATION:Skill = new Skill("concentration", "Concentration", Ability.CON);
    public static CRAFT_1:Skill = new Skill("craft1", "Craft", Ability.INT);
    public static DECIPHER_SCRIPT:Skill = new Skill("decipherScript", "Decipher Script", Ability.INT);
    public static DIPLOMACY:Skill = new Skill("diplomacy", "Diplomacy", Ability.CHA);
    public static DISABLE_DEVICE:Skill = new Skill("disableDevice", "Disable Device", Ability.INT);
    public static DISGUISE:Skill = new Skill("disguise", "disguise", Ability.CHA);
    public static ESCAPE_ARTIST:Skill = new Skill("escapeArtist", "Escape Artist", Ability.DEX);
    public static FORGERY:Skill = new Skill("forgery", "Forgery", Ability.INT);
    public static GATHER_INFORMATION:Skill = new Skill("gatherInformation", "Gather Information", Ability.DEX);
    public static HANDLE_ANIMAL:Skill = new Skill("handleAnimal", "Handle Animal", Ability.CHA);
    public static HEAL:Skill = new Skill("heal", "Heal", Ability.INT);
	public static HIDE:Skill = new Skill("hide","Hide", Ability.DEX);
	public static INNUENDO:Skill = new Skill("innuendo","Innuendo", Ability.WIS);
	public static INTIMIDATE:Skill = new Skill("intimidate","Intimidate", Ability.CHA);
	public static INTUIT_DIRECTION:Skill = new Skill("intuitDirection","Intuit Direction", Ability.WIS);
	public static JUMP:Skill = new Skill("jump","Jump", Ability.STR);
	public static KNOWLEDGE_ARC:Skill = new Skill("knowledgeArc","Knowledge (Arcana)", Ability.INT);
	public static KNOWLEDGE_NATURE:Skill = new Skill("knowledgeNature","Knowledge (Nature)", Ability.INT);
	public static KNOWLEDGE_RELIGION:Skill = new Skill("knowledgeReligion","Knowledge (Religion)", Ability.INT);
	public static KNOWLEDGE_1:Skill = new Skill("knowledge1","Knowledge", Ability.INT);
	public static KNOWLEDGE_2:Skill = new Skill("knowledge2","Knowledge", Ability.INT);
	public static KNOWLEDGE_3:Skill = new Skill("knowledge3","Knowledge", Ability.INT);
	public static KNOWLEDGE_4:Skill = new Skill("knowledge4","Knowledge", Ability.INT);
	public static KNOWLEDGE_5:Skill = new Skill("knowledge5","Knowledge", Ability.INT);
	public static LISTEN:Skill = new Skill("listen","Listen", Ability.WIS);
	public static MOVE_SILENTLY:Skill = new Skill("moveSilently","Move Silently", Ability.DEX);
	public static OPEN_LOCK:Skill = new Skill("openLock","Open Lock", Ability.DEX);
	public static PERFORM:Skill = new Skill("perform","Perform", Ability.CHA);
	public static PICK_POCKETS:Skill = new Skill("pickPockets","Pick Pockets", Ability.DEX);
	public static PROFESSION_1:Skill = new Skill("profession1","Profession", Ability.NONE);
	public static PROFESSION_2:Skill = new Skill("profession2","Profession", Ability.NONE);
	public static PROFESSION_3:Skill = new Skill("profession3","Profession", Ability.NONE);
	public static READ_LIPS:Skill = new Skill("readLips","Read Lips", Ability.INT);
	public static RIDE:Skill = new Skill("ride","Ride", Ability.DEX);
	public static SCRY:Skill = new Skill("scry","Scry", Ability.INT);
	public static SEARCH:Skill = new Skill("search","Search", Ability.INT);
	public static SENSE_MOTIVE:Skill = new Skill("senseMotive","Sense Motive", Ability.WIS);
	public static SPEAK_LANGUAGE:Skill = new Skill("speakLanguage","Speak Language", Ability.NONE);
	public static SPELLCRAFT:Skill = new Skill("spellcraft","Spellcraft", Ability.INT);
	public static SPOT:Skill = new Skill("spot","Spot", Ability.WIS);
	public static SWIM:Skill = new Skill("swim","Swim", Ability.STR);
	public static TUMBLE:Skill = new Skill("tumble","Tumble", Ability.DEX);
	public static USE_MAGIC_DEVICE:Skill = new Skill("useMagicDevice","Use Magic Device", Ability.CHA);
	public static USE_ROPE:Skill = new Skill("useRope","Use Rope", Ability.DEX);
	public static WILDERNESS_LORE:Skill = new Skill("wildernessLore","Wilderness Lore", Ability.WIS);
	public static PLACEHOLDER_1:Skill = new Skill("placeholder1","", Ability.NONE);
	public static PLACEHOLDER_2:Skill = new Skill("placeholder2","", Ability.NONE);

    private name:string;
    private label:string;
    private ability:Ability;

    constructor(name:string, label:string, ability:Ability) {
        this.name = name;
        this.label = label;
        this.ability = ability;
		Skill.ALL.push(this);
    };

    public getName():string {
        return this.name;
    }

    public getLabel():string {
        return this.label;
    };

    public getAbility():Ability {
        return this.ability;
    };
}
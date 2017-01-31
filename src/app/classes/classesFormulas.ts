/**
 * Created by sargon on 7/16/16.
 */
export class ClassesFormulas {

    public static none(level: number): number {
        return 0;
    }

    public static getHighBAB(level:number): number {
        return Number(level);
    }

    public static getMediumBAB(level:number): number {
        level = Number(level);
        return level > 0
            ? (level - 1) - Math.round((level - 1) / 4.1)
            : 0;
    }

    public static getLowBAB(level:number): number {
        level = Number(level);
        return level > 0
            ? (level - 1) - Math.round((level - 1) / 2.1)
            : 0;
    }

    public static getHighSave(level:number): number {
        level = Number(level);
        return level > 0
            ? 2 + ClassesFormulas.getLowBAB(level)
            : 0;
    }

    public static getLowSave(level:number): number {
        level = Number(level);
        return level > 0
            ? Math.round(level / 3.1)
            : 0;
    }
}
/** @internal */
export interface Resource {
    DateHumanize_MultipleDaysAgo: string;
    DateHumanize_MultipleDaysFromNow: string;
    DateHumanize_MultipleHoursAgo: string;
    DateHumanize_MultipleHoursFromNow: string;
    DateHumanize_MultipleMinutesAgo: string;
    DateHumanize_MultipleMinutesFromNow: string;
    DateHumanize_MultipleMonthsAgo: string;
    DateHumanize_MultipleMonthsFromNow: string;
    DateHumanize_MultipleSecondsAgo: string;
    DateHumanize_MultipleSecondsFromNow: string;
    DateHumanize_MultipleYearsAgo: string;
    DateHumanize_MultipleYearsFromNow: string;
    DateHumanize_Now: string;
    DateHumanize_SingleDayAgo: string;
    DateHumanize_SingleDayFromNow: string;
    DateHumanize_SingleHourAgo: string;
    DateHumanize_SingleHourFromNow: string;
    DateHumanize_SingleMinuteAgo: string;
    DateHumanize_SingleMinuteFromNow: string;
    DateHumanize_SingleMonthAgo: string;
    DateHumanize_SingleMonthFromNow: string;
    DateHumanize_SingleSecondAgo: string;
    DateHumanize_SingleSecondFromNow: string;
    DateHumanize_SingleYearAgo: string;
    DateHumanize_SingleYearFromNow: string;
    TimeHumanize_MultipleDays: string;
    TimeHumanize_MultipleHours: string;
    TimeHumanize_MultipleMilliseconds: string;
    TimeHumanize_MultipleMinutes: string;
    TimeHumanize_MultipleSeconds: string;
    TimeHumanize_MultipleWeeks: string;
    TimeHumanize_SingleDay: string;
    TimeHumanize_SingleHour: string;
    TimeHumanize_SingleMillisecond: string;
    TimeHumanize_SingleMinute: string;
    TimeHumanize_SingleSecond: string;
    TimeHumanize_SingleWeek: string;
    TimeHumanize_Zero: string;
}

/** @internal */
export interface ResourceDictionary {
    [culture: string]: Resource;
}

/** @internal */
export const _cultures: ResourceDictionary = {};

/** @internal */
export function getCurrentCulture(): string {
    return navigator.language || "en-US";
}

/** @internal */
export function getResource(culture: string): Resource {
    const r: Resource =_cultures[culture];
    if (r !== undefined) {
        return r;
    }
    return _cultures["en-US"];
}

/** @internal */
export function format(str: string, ...obj: any[]): string {
    let worker: string = str;
    for (let i: number = 0; i < obj.length; i++) {
        worker = worker.replace("{" + i + "}", obj[i].toString());
    }
    return worker;
}
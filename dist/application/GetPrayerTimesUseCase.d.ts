import { IPrayerTimesRepository } from "../domain/repositories/IPrayerTimesRepository";
export declare class GetPrayerTimesUseCase {
    private readonly repository;
    constructor(repository: IPrayerTimesRepository);
    execute(city: string, country: string, method?: number): Promise<import("../domain/entities/PrayerTimes").PrayerTimes>;
}
//# sourceMappingURL=GetPrayerTimesUseCase.d.ts.map
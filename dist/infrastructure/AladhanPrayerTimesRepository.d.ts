import { PrayerTimes } from "../domain/entities/PrayerTimes";
import { IPrayerTimesRepository } from "../domain/repositories/IPrayerTimesRepository";
export declare class AladhanPrayerTimesRepository implements IPrayerTimesRepository {
    getByCity(city: string, country: string, method?: number): Promise<PrayerTimes>;
}
//# sourceMappingURL=AladhanPrayerTimesRepository.d.ts.map
import { PrayerTimes } from '../entities/PrayerTimes';
export interface IPrayerTimesRepository {
    getByCity(city: string, country: string, method?: number): Promise<PrayerTimes>;
}
//# sourceMappingURL=IPrayerTimesRepository.d.ts.map
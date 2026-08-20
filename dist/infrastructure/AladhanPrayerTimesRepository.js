"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AladhanPrayerTimesRepository = void 0;
class AladhanPrayerTimesRepository {
    async getByCity(city, country, method = 3) {
        let date = getTodayFormatted();
        const url = `https://api.aladhan.com/v1/timingsByCity/${date}?city=${encodeURIComponent(city)}&country=${encodeURIComponent(country)}&method=${method}`;
        let response;
        try {
            response = await fetch(url);
        }
        catch (error) {
            throw new Error(`Failed to reach Aladhan API: ${error.message}`);
        }
        if (!response.ok) {
            throw new Error(`Aladhan API returned ${response.status} for city "${city}"`);
        }
        const data = await response.json();
        if (!data?.data?.timings) {
            throw new Error(`Unexpected Aladhan API response shape for city "${city}"`);
        }
        const prayerTimes = {
            date: data.data.date.readable,
            fajr: data.data.timings.Fajr,
            dhuhr: data.data.timings.Dhuhr,
            asr: data.data.timings.Asr,
            maghrib: data.data.timings.Maghrib,
            isha: data.data.timings.Isha,
        };
        return prayerTimes;
    }
}
exports.AladhanPrayerTimesRepository = AladhanPrayerTimesRepository;
function getTodayFormatted() {
    const now = new Date();
    const day = String(now.getUTCDate()).padStart(2, "0");
    const month = String(now.getUTCMonth() + 1).padStart(2, "0"); // months are 0-indexed!
    const year = now.getUTCFullYear();
    return `${day}-${month}-${year}`;
}
//# sourceMappingURL=AladhanPrayerTimesRepository.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetPrayerTimesUseCase = void 0;
class GetPrayerTimesUseCase {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    async execute(city, country, method) {
        console.log(`Executing GetPrayerTimesUseCase with city: ${city}, country: ${country}, method: ${method}`);
        if (!city || !country) {
            throw Error("City and Country are required");
        }
        return this.repository.getByCity(city, country, method);
    }
}
exports.GetPrayerTimesUseCase = GetPrayerTimesUseCase;
//# sourceMappingURL=GetPrayerTimesUseCase.js.map
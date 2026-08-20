import { IPrayerTimesRepository } from "../domain/repositories/IPrayerTimesRepository";



export class GetPrayerTimesUseCase {
    constructor(private readonly repository: IPrayerTimesRepository) { }

    async execute(city: string, country: string, method?: number) {
        console.log(`Executing GetPrayerTimesUseCase with city: ${city}, country: ${country}, method: ${method}`);
        if (!city || !country) {
            throw Error("City and Country are required")
        }

        return this.repository.getByCity(city, country, method)
    }
}
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrayerTimesController = void 0;
class PrayerTimesController {
    useCase;
    constructor(useCase) {
        this.useCase = useCase;
    }
    handle = async (req, res) => {
        console.log("Raw query:", req.query); // TEMP DEBUG
        const city = req.query.city;
        const country = req.query.country;
        const method = req.query.method ? Number(req.query.method) : undefined;
        try {
            const prayerTimes = await this.useCase.execute(city, country, method);
            res.status(200).json(prayerTimes);
        }
        catch (error) {
            const message = error.message;
            if (message.includes("required")) {
                res.status(400).json({ error: message });
            }
            else {
                res.status(502).json({ error: "Failed to retrieve prayer times", details: message });
            }
        }
    };
}
exports.PrayerTimesController = PrayerTimesController;
//# sourceMappingURL=PrayerTimesController.js.map
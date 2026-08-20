import { Request, Response } from "express";
import { GetPrayerTimesUseCase } from "../../application/GetPrayerTimesUseCase";

export class PrayerTimesController {
    constructor(private readonly useCase: GetPrayerTimesUseCase) { }

    handle = async (req: Request, res: Response): Promise<void> => {
        console.log("Raw query:", req.query); // TEMP DEBUG
        const city = req.query.city as string;
        const country = req.query.country as string;
        const method = req.query.method ? Number(req.query.method) : undefined;

        try {
            const prayerTimes = await this.useCase.execute(city, country, method);
            res.status(200).json(prayerTimes);
        } catch (error) {
            const message = (error as Error).message;

            if (message.includes("required")) {
                res.status(400).json({ error: message });
            } else {
                res.status(502).json({ error: "Failed to retrieve prayer times", details: message });
            }
        }
    };
}
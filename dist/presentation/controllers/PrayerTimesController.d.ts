import { Request, Response } from "express";
import { GetPrayerTimesUseCase } from "../../application/GetPrayerTimesUseCase";
export declare class PrayerTimesController {
    private readonly useCase;
    constructor(useCase: GetPrayerTimesUseCase);
    handle: (req: Request, res: Response) => Promise<void>;
}
//# sourceMappingURL=PrayerTimesController.d.ts.map
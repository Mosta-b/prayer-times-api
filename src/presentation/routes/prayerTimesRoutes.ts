import { Router } from "express";
import { PrayerTimesController } from "../controllers/PrayerTimesController";

export function createPrayerTimesRoutes(controller: PrayerTimesController): Router {
    const router = Router();
    router.get("/prayer-times", controller.handle);
    return router;
}
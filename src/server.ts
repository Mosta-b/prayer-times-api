import express from "express";
import { GetPrayerTimesUseCase } from "./application/GetPrayerTimesUseCase";
import { AladhanPrayerTimesRepository } from "./infrastructure/AladhanPrayerTimesRepository";
import { PrayerTimesController } from "./presentation/controllers/PrayerTimesController";
import { createPrayerTimesRoutes } from "./presentation/routes/prayerTimesRoutes";

const repository = new AladhanPrayerTimesRepository();
const useCase = new GetPrayerTimesUseCase(repository);
const controller = new PrayerTimesController(useCase);

const app = express();
app.use(createPrayerTimesRoutes(controller));
const PORT = process.env.PORT || 3000
app.get("/", (req, res) => {
    res.status(200).json({ status: "ok", service: "prayer-times-api" });
});
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
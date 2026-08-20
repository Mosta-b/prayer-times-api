"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const GetPrayerTimesUseCase_1 = require("./application/GetPrayerTimesUseCase");
const AladhanPrayerTimesRepository_1 = require("./infrastructure/AladhanPrayerTimesRepository");
const PrayerTimesController_1 = require("./presentation/controllers/PrayerTimesController");
const prayerTimesRoutes_1 = require("./presentation/routes/prayerTimesRoutes");
const repository = new AladhanPrayerTimesRepository_1.AladhanPrayerTimesRepository();
const useCase = new GetPrayerTimesUseCase_1.GetPrayerTimesUseCase(repository);
const controller = new PrayerTimesController_1.PrayerTimesController(useCase);
const app = (0, express_1.default)();
app.use((0, prayerTimesRoutes_1.createPrayerTimesRoutes)(controller));
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
//# sourceMappingURL=server.js.map
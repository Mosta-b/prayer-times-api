"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPrayerTimesRoutes = createPrayerTimesRoutes;
const express_1 = require("express");
function createPrayerTimesRoutes(controller) {
    const router = (0, express_1.Router)();
    router.get("/prayer-times", controller.handle);
    return router;
}
//# sourceMappingURL=prayerTimesRoutes.js.map
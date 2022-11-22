import { Router } from "express";
import { authController } from "../controllers";

const router = Router();

router.post("/auth/login", authController.login);
router.post("/auth/register", authController.register);
// router.get("/me", authController.getPatient);
// router.get("/auth/total", authController.getTotalPatient);
// router.get("/auth/:id", authController.getPatientById);
// router.delete("/auth/:id", authController.deletePatientById);
// router.put("/auth/:id", authController.putPatientById);

export default router;

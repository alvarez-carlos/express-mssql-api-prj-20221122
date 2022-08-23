import { Router } from "express";
import { ciController } from "../controllers";

const router = Router();

router.get("/chargeimport", ciController.getChargeImport);
// router.post("/chargeimport", ciController.postChargeImport);
// router.get("/chargeimport/total", ciController.getTotalChargeImport);
router.get("/chargeimport/:id", ciController.getChargeImportById);
// router.delete("/chargeimport/:id", ciController.deleteChargeImportById);
// router.put("/chargeimport/:id", ciController.putChargeImportById);

export default router;
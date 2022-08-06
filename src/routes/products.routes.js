import { Router } from "express";
import * as routes from "../controllers/products.controller";

const router = Router();

router.get("/products", routes.getProducts);
router.post("/products", routes.postProducts);
router.get("/products/total", routes.getTotalProducts);
router.get("/products/:id", routes.getProductById);
router.delete("/products/:id", routes.deleteProductById);
router.put("/products/:id", routes.putProductsById);

export default router;

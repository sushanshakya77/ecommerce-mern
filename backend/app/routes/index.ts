import { Router } from "express";

import userRoutes from "./usersRoute";
import carpartsRoutes from "./carparts";

const router = Router();

router.use("/auth", userRoutes);
router.use("/products", carpartsRoutes);

export default router;

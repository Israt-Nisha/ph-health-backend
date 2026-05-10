import { Router } from "express";
import { RagController } from "./rag.contoller";

const router = Router();

router.get("/stats", RagController.getStats);

export const RagRoutes = router;
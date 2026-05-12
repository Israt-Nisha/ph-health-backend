import { Router } from "express";
import { RagController } from "./rag.contoller";

const router = Router();

router.get("/stats", RagController.getStats);

//index doctors data
router.post("/ingest-doctors", RagController.ingestDoctors);

export const RagRoutes = router;
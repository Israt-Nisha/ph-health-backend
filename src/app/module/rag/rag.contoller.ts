import { Request, Response } from "express";
import status from "http-status";
import { catchAsync } from "../../sheard/catchAsync";
import { sendResponse } from "../../sheard/sendResponse";
import { RAGService } from "./rag.service";

const ragService = new RAGService();
const getStats = async (req: Request, res: Response) => {
  console.log("connected", req.query);
  res.status(200).json({ message: "connected rag apis" });
};

const ingestDoctors = catchAsync(async (req: Request, res: Response) => {
 const result = await ragService.ingestDoctorsData();

  sendResponse(res,{
    success: true,
    httpStatusCode: status.OK,
    message: "Doctors data ingestion completed",
    data: result
  })
});

export const RagController = {
  getStats,
  ingestDoctors,
};
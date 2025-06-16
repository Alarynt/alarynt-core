import { Request, Response } from 'express';
import Telemetry from '../models/telemetry.model';

// In-memory store
const telemetryData: any[] = [];

export const ingestTelemetry = async (req: Request, res: Response) => {
  try {
    const newTelemetry = { ...req.body, receivedAt: new Date() };
    telemetryData.push(newTelemetry);
    console.log('Ingested Telemetry:', newTelemetry);
    res.status(202).json({ message: 'Telemetry received' });
  } catch (error) {
    res.status(500).json({ message: 'Error ingesting telemetry', error });
  }
}; 
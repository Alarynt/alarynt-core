import { Router } from 'express';
import { ingestTelemetry } from '../controllers/telemetry';

const router = Router();

router.post('/', ingestTelemetry);

export default router; 
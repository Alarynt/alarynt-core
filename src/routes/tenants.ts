import { Router } from 'express';
import { createTenant, getTenants } from '../controllers/tenants';

const router = Router();

router.post('/', createTenant);
router.get('/', getTenants);

export default router; 
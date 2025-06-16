import { Router } from 'express';
import { createRule, getRules, updateRule } from '../controllers/rules';

const router = Router();

router.post('/', createRule);
router.get('/', getRules);
router.put('/:id', updateRule);

export default router; 
import { Router } from 'express';

import{
    createOrder,
    getOrderByCustomer,
} from '../controllers/orders71.controller.js'

const router = Router();

router.post('/', createOrder);
router.get('/customer/:customerId', getOrderByCustomer );

export default router;
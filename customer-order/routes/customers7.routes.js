import { Router } from "express";
import {
  createCustomer,
  getCustomers,
  deleteCustomer,
} from "../controllers/customers7.controller.js";

const router = Router();

router.post("/", createCustomer);
router.get("/", getCustomers);
router.delete("/", deleteCustomer);

export default router;

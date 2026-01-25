import * as service from "../services/orders71.service.js";

export const createOrder = async (req, res, next) => {
  try {
    const data = await service.createOrder(req.body);
    res.status(201).json(data);
  } catch (err) {
    next(err);
  }
};

export const getOrderByCustomer = async (req, res, next) => {
  try {
    const data = await service.getOrdersByCustomer(req.params.customerId);
    res.json(data);
  } catch (err) {
    next(err);
  }
};

export const deleteCustomer = async (req, res, next) => {
  try {
    const data = await service.deleteCustomer(req.params.id);
    res.json(data);
  } catch (err) {
    next(err);
  }
};

import * as service from "../services/customers7.service.js";
export const createCustomer = async (req, res, next) => {
  try {
    const data = await service.createCustomer(req.body);
    res.status(201).json(data);
  } catch (err) {
    next(err);
  }
};
export const getCustomers = async (req, res, next) => {
  try {
    const data = await service.getCustomers();
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

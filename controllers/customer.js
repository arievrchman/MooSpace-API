const { Customer } = require('../models');
const default_image = require('../utils/constant').image;

module.exports = {
  findAllCustomers: async function(req, res) {
    try {
      const response = await Customer.findAll({});
      res.json(response);
    } catch (error) {
      res.status(500).json({ error: 'Something went wrong!' });
    }
  },
  createCustomer: async function(req, res) {
    try {
      const customer = {
        name: req.body.name,
        identityNumber: req.body.identityNumber,
        phoneNumber: req.body.phoneNumber,
        email: req.body.email,
        image: req.file ? req.file.path : default_image,
      };
      const response = await Customer.create(customer);
      res.status(201).json(response);
    } catch (error) {
      const errMsg = error.errors.map(err => {
        const objErr = {
          type: err.path,
          msg: err.message,
        };
        return objErr;
      });
      res.status(400).json({ error: errMsg });
    }
  },
  updateCustomer: async function(req, res) {
    try {
      const validate = await Customer.findOne({
        where: { id: req.params.customerId },
      });

      if (!validate)
        return res.status(404).json({ error: 'Customer not found!' });

      const customer = {
        name: req.body.name,
        identityNumber: req.body.identityNumber,
        phoneNumber: req.body.phoneNumber,
        email: req.body.email,
        image: req.file ? req.file.path : validate.image,
      };

      await Customer.update(customer, {
        where: { id: req.params.customerId },
      });
      const newResponse = await Customer.findOne({
        where: { id: req.params.customerId },
      });
      res.json(newResponse);
    } catch (error) {
      const errMsg = error.errors.map(err => {
        const objErr = {
          type: err.path,
          msg: err.message,
        };
        return objErr;
      });
      res.status(400).json({ error: errMsg });
    }
  },
};

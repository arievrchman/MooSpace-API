const { Admin } = require('../models');
const jwt = require('jsonwebtoken');
const compare = require('../utils/bcrypt').compare;
const default_image = require('../utils/constant').image;

module.exports = {
  register: async function(req, res) {
    try {
      const newAdmin = {
        name: req.body.name,
        username: req.body.username,
        password: req.body.password,
        image: default_image,
      };
      const response = await Admin.create(newAdmin);
      const payload = {
        id: response.id,
        name: response.name,
        username: response.username,
        email: response.email,
        image: response.image,
      };
      const access_token = jwt.sign(payload, process.env.KEY);
      res.status(201).json({
        email: response.email,
        access_token,
      });
    } catch (error) {
      const errMsg = error.errors.map(err => {
        const objErr = {
          type: err.path,
          msg: err.message
        }
        return objErr;
      });
      res.status(400).json({ error: errMsg });
    }
  },
  login: async function(req, res) {
    try {
      const response = await Admin.findOne({
        where: { email: req.body.email },
      });
      if (response) {
        const validate = compare(req.body.password, response.password);
        const payload = {
          id: response.id,
          name: response.name,
          username: response.username,
          email: response.email,
          image: response.image,
        };
        const access_token = jwt.sign(payload, process.env.KEY);
        if (validate) {
          res.json({
            email: response.email,
            access_token,
          });
        } else {
          res.status(400).json({ error: 'Invalid email/password' });
        }
      } else {
        res.status(400).json({ error: 'Invalid email/password' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Something went wrong!' });
    }
  },
};

const router = require('express').Router();
const authenticate = require('../utils/middleware').authenticate;
const { findAllCustomers, createCustomer, updateCustomer } = require('../controllers/customer');
const image = require('../utils/image');

router.get('/', authenticate, findAllCustomers);
router.post('/', authenticate, image.upload.single('image'), createCustomer);
router.put('/:customerId', authenticate, image.upload.single('image'), updateCustomer);

module.exports = router;

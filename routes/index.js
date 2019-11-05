const router = require('express').Router();

const authenticate = require('../utils/middleware').authenticate;
const {findAllOrders, checkIn, checkOut} = require('../controllers/order');

// routes
const authRoutes = require('./auth');
const roomRoutes = require('./room');
const customerRoutes = require('./customer');

router.get('/', (req, res) => res.json({ msg: 'Connected to Express!' }));
router.use('/auth', authRoutes);
router.use('/room', roomRoutes);
router.use('/customer', customerRoutes);

router.get('/checkin', authenticate, findAllOrders);
router.post('/checkin', authenticate, checkIn);
router.put('/order/:orderId', authenticate, checkOut);

module.exports = router;
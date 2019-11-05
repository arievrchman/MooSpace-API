const router = require('express').Router();
const authenticate = require('../utils/middleware').authenticate;
const {findAllRooms, createRoom, updateRoom} = require('../controllers/room');

router.use(authenticate);
router.get('/', findAllRooms);
router.post('/', createRoom);
router.put('/:roomId', updateRoom);

module.exports = router;
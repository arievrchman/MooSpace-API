const { Room } = require('../models');

module.exports = {
  findAllRooms: async function(req, res) {
    try {
      const response = await Room.findAll({});
      res.json(response);
    } catch (error) {
      res.status(500).json({ error: 'Something went wrong!' });
    }
  },
  createRoom: async function(req, res) {
    try {
      const response = await Room.create({
        name: req.body.name,
      });
      res.status(201).json(response);
    } catch (error) {
      res.status(500).json({ error: 'Something went wrong!' });
    }
  },
  updateRoom: async function(req, res) {
    try {
      const validateRoom = await Room.findOne({
        where: { id: req.params.roomId },
      });
      if (validateRoom) {
        await Room.update(
          {
            name: req.body.name,
          },
          {
            where: { id: req.params.roomId },
          },
        );
        const newResponse = await Room.findAll({});
        return res.json(newResponse);
      } else {
        return res.status(404).json({ error: 'Cannot find the room!' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Something went wrong!' });
    }
  },
};

const { Order, Customer, Room } = require('../models');
const moment = require('moment');
const checkin = require('../utils/response').checkin;

module.exports = {
  findAllOrders: async function(req, res) {
    try {
      const response = await Room.findAll({
        include: [
          {
            model: Order,
            include: [
              {
                model: Customer,
              },
            ],
          },
        ],
      });
      const newResponse = checkin(response);
      res.json(newResponse);
    } catch (error) {
      res.status(500).json({ error: 'Something went wrong.' });
    }
  },

  checkIn: async function(req, res) {
    try {
      const now = new Date();
      const duration = +req.body.duration;
      const orderEndTime = moment(now)
        .add(duration, 'm')
        .format();

      // LOGS CHECKER
      // console.log(moment(now).format('llll'), '=======> started');
      // console.log(orderEndTime, '=======> ended');

      const checkIn = {
        roomId: req.body.roomId,
        customerId: req.body.customerId,
        duration,
        orderEndTime,
      };
      await Order.create(checkIn);
      const response = await Room.findAll({
        include: [
          {
            model: Order,
            include: [
              {
                model: Customer,
              },
            ],
          },
        ],
      });
      const newResponse = checkin(response);
      res.status(201).json(newResponse);
    } catch (error) {
      res.status(500).json({ error: 'Something went wrong.' });
    }
  },

  checkOut: async function(req, res) {
    try {
      await Order.update(
        {
          isDone: true,
          isBooked: false,
        },
        {
          where: { id: req.params.orderId },
        },
      );

      const response = await Room.findAll({
        include: [
          {
            model: Order,
            include: [
              {
                model: Customer,
              },
            ],
          },
        ],
      });
      const newResponse = checkin(response);
      res.json(newResponse);
    } catch (error) {
      res.status(500).json({ error: 'Something went wrong.' });
    }
  },
};

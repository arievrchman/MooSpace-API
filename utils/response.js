exports.checkin = response => {
  return response.map(item => {
    const orders = item.Orders.find(val => val.isDone == false);
    const obj = {
      id: item.id,
      name: item.name,
      order: orders
        ? {
            id: orders.id,
            isDone: orders.isDone,
            isBooked: orders.isBooked,
            duration: orders.duration,
            createdAt: orders.createdAt,
            orderEndTime: orders.orderEndTime,
          }
        : null,
      customer: orders
        ? {
            id: orders.Customer.id,
            name: orders.Customer.name,
            identityNumber: orders.Customer.identityNumber,
            phoneNumber: orders.Customer.phoneNumber,
            email: orders.Customer.email,
            image: orders.Customer.image,
          }
        : null,
    };
    return obj;
  });
};

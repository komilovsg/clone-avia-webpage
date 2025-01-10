import React from 'react';
import OrderCard from './orderCard';

const OrderList: React.FC = () => {
  const orders = [
    {
      route: 'Душанбе - Худжанд',
      name: 'ODILOV DALER',
      createdDate: '05.07.24 14:29',
      departureDate: '18.07.2024',
      price: 645.8,
      status: 'Заказ отменен клиентом',
      isCancelled: true,
    },
    {
      route: 'Душанбе - Худжанд',
      name: 'ODILOV DALER',
      createdDate: '25.06.24 15:42',
      departureDate: '04.07.2024',
      price: 372.9,
      status: 'Заказ отменен по таймлимиту',
      isCancelled: true,
    },
    {
      route: 'Душанбе - Худжанд',
      name: 'DMITRIEVA ELENA',
      createdDate: '10.06.24 13:49',
      departureDate: '15.06.2024',
      price: 450.9,
      status: 'Заказ отменен клиентом',
      isCancelled: true,
    },
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Заказы</h1>
      {orders.map((order, index) => (
        <OrderCard key={index} {...order} />
      ))}
    </div>
  );
};

export default OrderList;

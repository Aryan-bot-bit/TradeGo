
import React, { useContext } from "react";
import GeneralContext from "./GeneralContext";
import './Orders.css'; // Import the CSS file for styling

const Orders = () => {
  const { orders } = useContext(GeneralContext);

  return (
    <div className="orders">
      {orders.length > 0 ? (
        <table className="orders-table">
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Price</th>
              <th>Mode</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index}>
                <td>{order.name}</td>
                <td>{order.qty}</td>
                <td>{order.price}</td>
                <td>{order.mode}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="no-orders">
          <p>You haven't placed any orders today</p>
        </div>
      )}
    </div>
  );
};

export default Orders;

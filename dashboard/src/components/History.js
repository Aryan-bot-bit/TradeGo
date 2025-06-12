import React, { useContext } from "react";
import GeneralContext from "./GeneralContext";

const History = () => {
  const { orders } = useContext(GeneralContext);

  return (
    <div className="history">
      <h3>Order History</h3>
      {orders.length > 0 ? (
        <table>
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
        <div className="no-history">
          <p>No order history available</p>
        </div>
      )}
    </div>
  );
};

export default History;

import React, { useState } from "react";
import { Tooltip, Grow } from "@mui/material";
import { watchlist } from "../data/data";
import { BarChartOutlined, KeyboardArrowDown, KeyboardArrowUp, MoreHoriz } from "@mui/icons-material";
import BuyActionWindow from "./BuyActionWindow"; // Import BuyActionWindow
import SellActionWindow from "./SellActionWindow"; // Import SellActionWindow
import { DoughnutChart } from "./DoughnoutChart"; // Import DoughnutChart

const WatchList = () => {
  const [selectedStock, setSelectedStock] = useState(null); // State to manage selected stock for buying
  const [selectedSellStock, setSelectedSellStock] = useState(null); // State to manage selected stock for selling

  const labels = watchlist.map((subArray) => subArray["name"]);

  const data = {
    labels,
    datasets: [
      {
        label: "Price",
        data: watchlist.map((stock) => stock.price),
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 159, 64, 0.5)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const handleBuyClick = (stock) => {
    setSelectedStock(stock); // Set the selected stock for buying
  };

  const handleSellClick = (stock) => {
    setSelectedSellStock(stock); // Set the selected stock for selling
  };

  return (
    <div className='watchlist-container'>
      <div className='search-container'>
        <input type='text' name='search' id='search' placeholder='Search eg:infy, bse, nifty fut weekly, gold mcx' className='search' />
        <span className='counts'>{watchlist.length}/ 50</span>
      </div>

      <ul className="list">
        {watchlist.map((stock, index) => (
          <WatchListItem 
            stock={stock} 
            key={index} 
            onBuyClick={handleBuyClick} 
            onSellClick={handleSellClick} // Pass sell click handler
          />
        ))}
      </ul>

      <DoughnutChart data={data} />

      {selectedStock && <BuyActionWindow uid={selectedStock.name} onClose={() => setSelectedStock(null)} />} {/* Render BuyActionWindow */}
      {selectedSellStock && <SellActionWindow uid={selectedSellStock.name} onClose={() => setSelectedSellStock(null)} />} {/* Render SellActionWindow */}
    </div>
  );
}

const WatchListItem = ({ stock, onBuyClick, onSellClick }) => {
  const [showWatchListActions, setShowWatchListActions] = useState(false);

  const handleMouseEnter = () => setShowWatchListActions(true);
  const handleMouseExit = () => setShowWatchListActions(false);

  return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseExit}>
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
        <div className="itemInfo">
          <span className="percent">{stock.percent}</span>
          {stock.isDown ? <KeyboardArrowDown className="down" /> : <KeyboardArrowUp className="up" />}
          <span className="price">{stock.price}</span>
        </div>
      </div>
      {showWatchListActions && (
        <WatchListActions 
          onBuyClick={() => onBuyClick(stock)} 
          onSellClick={() => onSellClick(stock)} // Add sell click handler
        />
      )}
    </li>
  );
};

const WatchListActions = ({ onBuyClick, onSellClick }) => {
  return (
    <span className="actions">
      <Tooltip title="Buy (B)" placement="top" arrow TransitionComponent={Grow}>
        <button className="buy" onClick={onBuyClick}>Buy</button>
      </Tooltip>
      <Tooltip title="Sell (S)" placement="top" arrow TransitionComponent={Grow}>
        <button className="sell" onClick={onSellClick}>Sell</button> {/* Sell button */}
      </Tooltip>
      <Tooltip title="Analytics (A)" placement="top" arrow TransitionComponent={Grow}>
        <button className="action">
          <BarChartOutlined className="icon" />
        </button>
      </Tooltip>
      <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
        <button className="action">
          <MoreHoriz className="icon" />
        </button>
      </Tooltip>
    </span>
  );
};

export default WatchList;




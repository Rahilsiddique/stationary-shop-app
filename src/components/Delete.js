import React, { useContext, useRef } from "react";
import { SharedState } from "./context/SharedState";

const Delete = () => {
  const { shopData, setShopData } = useContext(SharedState);
  const selectItem = useRef();
  const countItem = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const del = shopData.find(
      (elm) => elm.itemName === selectItem.current.value
    );
    const del2 = countItem.current.value;
    const del3 = del.itemQuantity - del2;
    if (del3 < 0) return;
    const newState = shopData.map((obj) => {
      if (obj.itemName === del.itemName) {
        return { ...obj, itemQuantity: del3 };
      }
      return obj;
    });
    setShopData(newState);
    countItem.current.value = "";
  };
  return (
    <div className="middle-box">
      <form onSubmit={handleSubmit}>
        <select ref={selectItem}>
          {shopData.map((elm) => (
            <option value={elm.itemName}>{elm.itemName}</option>
          ))}
        </select>
        <label>Quantity: </label>
        <input type="number" ref={countItem}></input>
        <button>Delete</button>
      </form>
    </div>
  );
};

export default Delete;

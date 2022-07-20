import React, { useContext, useEffect, useRef } from "react";
import { SharedState } from "./context/SharedState";

const Add = () => {
  const { setShopData } = useContext(SharedState);

  const numData = useRef();
  const nameData = useRef("");
  const formRef = useRef();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (numData.current.value === "") return;
    if (nameData.current.value === "") return;
    setShopData((pre) => [
      ...pre,
      { itemName: nameData.current.value, itemQuantity: numData.current.value }
    ]);
    formRef.current.reset();
  };

  return (
    <div className="left-box">
      <form onSubmit={handleFormSubmit} ref={formRef}>
        <label>Name: </label>
        <input ref={nameData}></input>
        <label>Quantity: </label>
        <input type="number" ref={numData}></input>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default Add;

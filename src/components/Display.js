import React, { useContext } from "react";
import { SharedState } from "./context/SharedState";

const Display = () => {
  const { shopData } = useContext(SharedState);
  return (
    <div className="right-box">
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Quantity</th>
          </tr>
          {shopData.map((elm) => {
            return (
              <tr>
                <td>{elm.itemName}</td>
                <td>{elm.itemQuantity}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Display;

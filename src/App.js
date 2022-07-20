import Add from "./components/Add";
import Delete from "./components/Delete";
import Display from "./components/Display";
import { SharedState } from "./components/context/SharedState";
import { useState } from "react";

function App() {
  const [shopData, setShopData] = useState([
    { itemName: "pencil", itemQuantity: 25 },
    { itemName: "sharpner", itemQuantity: 12 },
    { itemName: "eraser", itemQuantity: 18 }
  ]);
  return (
    <SharedState.Provider value={{ shopData, setShopData }}>
      <div className="main-app-box">
        <Add />
        <Delete />
        <Display />
      </div>
    </SharedState.Provider>
  );
}

export default App;

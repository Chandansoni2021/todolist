import React, { useCallback, useState } from "react";
import ToDo from "./todolist";

const App = () => {
  const [inputList, setInputList] = useState("");
  const [Items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList(""); // Clear the input field after adding the item
  };

  const deleteitem =(id) =>{
    setItems((olditems) => {
      return olditems.filter((arrele,index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input type="text" placeholder="Add an Item " value={inputList} onChange={itemEvent} />
          <button onClick={listOfItems}>+</button>
          <ol>
            {Items.map((Itemval, index) => {
              return <ToDo key={index}
                id={index}
                text={Itemval}
                onSelect={deleteitem} />
            })}

          </ol>
        </div>
      </div>
    </>
  );
};

export default App;

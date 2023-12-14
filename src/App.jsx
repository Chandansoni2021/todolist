import React, { useCallback, useState, useEffect } from "react";
import ToDo from "./todolist";

const App = () => {
  const [inputList, setInputList] = useState("");
  const [Items, setItems] = useState([]);
  const [dateTime, setDateTime] = useState("");

  // Function to get current date and time
  const getCurrentDateTime = () => {
    const currentDate = new Date();
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const dateString = currentDate.toLocaleDateString("en-US", options);
    const timeString = currentDate.toLocaleTimeString("en-US");
    setDateTime(`${dateString} - ${timeString}`);
  };

  // Update date and time every second
  useEffect(() => {
    const interval = setInterval(() => {
      getCurrentDateTime();
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList(""); // Clear the input field after adding the item
  };

  const deleteItem = (id) => {
    setItems((oldItems) => {
      return oldItems.filter((arrele, index) => {
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
          <p>{dateTime}</p> {/* Display date and time */}
          <br />
          <input
            type="text"
            placeholder="Add an Item "
            value={inputList}
            onChange={itemEvent}
          />
          <button onClick={listOfItems}>+</button>
          <ol>
            {Items.map((Itemval, index) => {
              return (
                <ToDo
                  key={index}
                  id={index}
                  text={Itemval}
                  onSelect={deleteItem}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default App;

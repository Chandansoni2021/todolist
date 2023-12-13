import React from "react";

const ToDo = (props) => {



    return (
        <>
            <div className="list">
               <div className="but">
                <button onClick={() => {
                    props.onSelect(props.id);
                }}>X</button>
                </div>
                <div className="text">
                <h3>{props.text}</h3>
            </div>
            </div>

        </>
    );
};


export default ToDo;

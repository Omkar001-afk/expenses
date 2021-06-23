import React, { useState } from "react";
import ExpenseDate from "../date/ExpenseDate";

import Card from "../card/Card";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);
  //onclick function useState returns currentvalue(title) ,want to update value(setTitle)
  const TitleChange = () => {
    setTitle("Updated");
    console.log("button Clicked");
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={TitleChange}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;

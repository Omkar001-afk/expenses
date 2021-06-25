import React, { useState } from "react";
import "./ExpensesForm.styles.css";
const ExpensesForm = (props) => {
  const [currentTitle, setTitle] = useState("");
  const [currentAmount, setAmount] = useState("");
  const [currentDate, setDate] = useState("");

  const TitleChangeHandler = (e) => {
    setTitle(e.target.value);
  };
  const AmountChangeHandler = (e) => {
    setAmount(e.target.value);
  };
  const DateChangeHandler = (e) => {
    setDate(e.target.value);
  };
  const SubmitHandler = (e) => {
    e.preventDefault();
    const ExpenseData = {
      title: currentTitle,
      amount: +currentAmount,
      date: new Date(currentDate),
    };
    props.onSaveExpenseData(ExpenseData); //passing Expense data as an argument
    setTitle("");
    setAmount("");
    setDate("");
  };
  return (
    <form onSubmit={SubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={currentTitle}
            onChange={TitleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={currentAmount}
            onChange={AmountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="Date"
            min="2019-01-01"
            max="2022-12-31"
            value={currentDate}
            onChange={DateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpensesForm;

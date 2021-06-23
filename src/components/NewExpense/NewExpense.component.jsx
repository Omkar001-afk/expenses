import React from "react";
import ExpensesForm from "../ExpensesForm/ExpensesForm.component";
import "./NewExpense.styles.css";
const NewExpense = () => {
  return (
    <div className="new-expense">
      <ExpensesForm />
    </div>
  );
};
export default NewExpense;

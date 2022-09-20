import React, { useState } from "react";
import Card from "../Card/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import "./Expenses.scss";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const yearChangeHandler = (inputedYear) => {
    setFilteredYear(inputedYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        //2 WAY BINDING! Passing initial state to ExpensesFilter component!
        selected={filteredYear}
        //////////////////////////////////////////////////////////////////
        onYearChange={yearChangeHandler}
      ></ExpensesFilter>
      <ExpenseItem expenseData={props.expenseData[0]}></ExpenseItem>
      <ExpenseItem expenseData={props.expenseData[1]}></ExpenseItem>
      <ExpenseItem expenseData={props.expenseData[2]}></ExpenseItem>
      <ExpenseItem expenseData={props.expenseData[3]}></ExpenseItem>
    </Card>
  );
};

export default Expenses;

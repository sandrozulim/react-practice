import React, { useState } from "react";
import Card from "../Card/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import ExpensesList from "../ExpensesList/ExpensesList";
import "./Expenses.scss";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("All");

  const yearChangeHandler = (inputedYear) => {
    setFilteredYear(inputedYear);
  };

  // eslint-disable-next-line
  const filteredExpenses = props.expenseData.filter((expense, _, array) => {
    if (filteredYear === "All") return array;
    if (expense.date.getFullYear().toString() === filteredYear) return expense;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        //2 WAY BINDING! Passing current state to ExpensesFilter component!
        selected={filteredYear}
        onYearChange={yearChangeHandler}
      />

      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;

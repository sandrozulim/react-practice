import React, { useState } from "react";
import Card from "../Card/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import "./Expenses.scss";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("All");

  const yearChangeHandler = (inputedYear) => {
    setFilteredYear(inputedYear);
  };

  const filteredExpenses = props.expenseData.filter((expense, _, array) => {
    if (filteredYear === "All") return array;
    if (expense.date.getFullYear().toString() === filteredYear) return expense;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        //2 WAY BINDING! Passing current state to ExpensesFilter component!
        selected={filteredYear}
        //////////////////////////////////////////////////////////////////
        onYearChange={yearChangeHandler}
      />

      {filteredExpenses.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        );
      })}
    </Card>
  );
};

export default Expenses;

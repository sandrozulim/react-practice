import React from "react";
import ExpenseDate from "../ExpenseDate/ExpenseDate";
import "./ExpenseItem.scss";

const ExpenseItem = (props) => {
  return (
    <li className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <h2 className="expense-item__title">{props.title}</h2>
      <span className="expense-item__amount">{props.amount}</span>
    </li>
  );
};

export default ExpenseItem;

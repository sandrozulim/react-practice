import React from "react";
import Card from "../Card/Card";
import ExpenseDate from "../ExpenseDate/ExpenseDate";
import "./ExpenseItem.scss";

const ExpenseItem = (props) => {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <h2 className="expense-item__title">{props.title}</h2>
      <span className="expense-item__amount">{props.amount}</span>
    </Card>
  );
};

export default ExpenseItem;

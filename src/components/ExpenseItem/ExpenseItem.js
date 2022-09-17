import React, { useState } from "react";
import Card from "../Card/Card";
import ExpenseDate from "../ExpenseDate/ExpenseDate";
import "./ExpenseItem.scss";

const ExpenseItem = (props) => {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.expenseData.date}></ExpenseDate>
      <h2 className="expense-item__title">{props.expenseData.title}</h2>
      <span className="expense-item__amount">{props.expenseData.amount}</span>
    </Card>
  );
};

export default ExpenseItem;

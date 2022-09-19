import React, { useState } from "react";
import "./NewExpenseForm.scss";

const NewExpenseForm = () => {
  const [inputedTitle, setInputedTitle] = useState("");
  const [inputedAmount, setInputedAmount] = useState("");
  const [inputedDate, setInputedDate] = useState("");

  const titleChangeHandler = (e) => {
    setInputedTitle(e.target.value);
  };

  const amountChangeHandler = (e) => {
    setInputedAmount(e.target.value);
  };

  const dateChangeHandler = (e) => {
    setInputedDate(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const inputedData = {
      title: inputedTitle,
      amount: inputedAmount,
      date: new Date(inputedDate),
    };

    setInputedTitle("");
    setInputedAmount("");
    setInputedDate("");
  };

  return (
    <form onSubmit={submitHandler} className="new-expense-form">
      <div className="new-expense-form__item">
        <label className="new-expense-form__title">Title:</label>
        <input
          value={inputedTitle}
          onChange={titleChangeHandler}
          className="new-expense-form__input"
          type="text"
          name="title"
          id="title"
        />
      </div>

      <div className="new-expense-form__item">
        <label className="new-expense-form__title">Amount:</label>
        <input
          value={inputedAmount}
          onChange={amountChangeHandler}
          className="new-expense-form__input"
          type="number"
          name="amount"
          id="amount"
        />
      </div>

      <div className="new-expense-form__item">
        <label className="new-expense-form__title">Date:</label>
        <input
          value={inputedDate}
          onChange={dateChangeHandler}
          className="new-expense-form__input"
          type="date"
          name="date"
          id="date"
        />
      </div>

      <button className="new-expense-form__button">Save</button>
    </form>
  );
};

export default NewExpenseForm;

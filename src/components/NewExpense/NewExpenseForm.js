import React, { useState } from "react";
import "./NewExpenseForm.scss";

const NewExpenseForm = (props) => {
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

    //passing inputedData to PARENT component (newExpense)
    props.onSaveExpenseData(inputedData);
    //2 way binding
    setInputedTitle("");
    setInputedAmount("");
    setInputedDate("");
  };

  const stopEdit = () => {
    props.stopEditingHandler(false);
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
          required
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
          required
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
          required
        />
      </div>

      <div className="new-expense-form__control">
        <button onClick={stopEdit} type="button">
          Cancel
        </button>
        <button>Save</button>
      </div>
    </form>
  );
};

export default NewExpenseForm;

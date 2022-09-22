import React, { useState } from "react";
import Card from "../Card/Card";
import NewExpenseForm from "./NewExpenseForm";
import "./NewExpense.scss";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  //Receiving user submitted data from child component (NewExpenseForm)
  const saveExpenseData = (data) => {
    if (data.amount === "" || data.title === "")
      return alert("You have to fill ");

    const newExpenseData = {
      ...data,
      id: Math.random().toString(),
    };
    // Again passing newExpenseData to PARENT (app.js)
    props.onAddExpense(newExpenseData);
    setIsEditing(false);
  };

  // state setting functions for editing view
  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <>
      <Card className="new-expense">
        {!isEditing && (
          <button onClick={startEditingHandler}>Add new expense</button>
        )}

        {isEditing && (
          <NewExpenseForm
            stopEditingHandler={stopEditingHandler}
            onSaveExpenseData={saveExpenseData}
          ></NewExpenseForm>
        )}
      </Card>
    </>
  );
};

export default NewExpense;

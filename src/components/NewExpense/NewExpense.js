import Card from "../Card/Card";
import NewExpenseForm from "./NewExpenseForm";
import "./NewExpense.scss";

const NewExpense = (props) => {
  //Receiving user submitted data from child component (NewExpenseForm)
  const saveExpenseData = (data) => {
    const newExpenseData = {
      ...data,
      id: Math.random().toString(),
    };
    // Again passing newExpenseData to PARENT (app.js)
    props.onAddExpense(newExpenseData);
  };

  return (
    <>
      <Card className="new-expense">
        <NewExpenseForm onSaveExpenseData={saveExpenseData}></NewExpenseForm>
      </Card>
    </>
  );
};

export default NewExpense;

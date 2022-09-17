import Card from "../Card/Card";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import "./Expenses.scss";

const Expenses = (props) => {
  return (
    <Card className="expenses">
      <ExpenseItem expenseData={props.expenseData[0]}></ExpenseItem>
      <ExpenseItem expenseData={props.expenseData[1]}></ExpenseItem>
      <ExpenseItem expenseData={props.expenseData[2]}></ExpenseItem>
      <ExpenseItem expenseData={props.expenseData[3]}></ExpenseItem>
    </Card>
  );
};

export default Expenses;

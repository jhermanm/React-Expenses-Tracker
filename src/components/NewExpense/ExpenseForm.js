import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // One state, instead of three piecemeal ones. Matter of preference.
  // Notice that we will need to set all 3 values on change, in this version
  // const [userInput, setUserInput] = useState({
  //   enteredTitle:'',
  //   enteredAmount:'',
  //   enteredDate:'',
  // });

  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);

    // Single state version
    // setUserInput({ //Unpack all values, then just change title
    //   ...userInput,
    //   enteredTitle: e.target.value,
    // })

    //Now we will update a value that depends on previous state, this is best
    // setUserInput((prevState) => {
    //   return {...prevState, enteredTitle: e.target.value};
    // });
  };
  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);

    // Single State version
    // setUserInput({ //Unpack all values, then just change Amount
    //   ...userInput,
    //   enteredAmount: e.target.value,

    // })

    //Now we will update a value that depends on previous state, this is best
    // setUserInput((prevState) => {
    //   return {...prevState, enteredAmount: e.target.value};
    // });
  };
  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);

    // Single state version
    // setUserInput({ //Unpack all values, then just change Date
    //   ...userInput,
    //   enteredDate: e.target.value,

    // })

    //Now we will update a value that depends on previous state -> this is better than^
    // setUserInput((prevState) => {
    //   return {...prevState, enteredDate: e.target.value};
    // });
  };
  // Called on form submit, then calls onSaveExpenseData to push data up to NewExpense.js
  const submitHandler = (e) => {
    e.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;

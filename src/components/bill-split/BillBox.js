import Input from "../UI/Input";
import React, { useState } from "react";

function BillBox({ selectedUser, updateFriendBalance }) {
  const [billValue, setBillValue] = useState("");
  const [myExpense, setMyExpense] = useState("");
  const [personPaying, setPersonPaying] = useState(1);

  //YOU CAN ALSO USE USEEFFECT HERE
  // useEffect(() => {
  //   if (!isNaN(numberBill) && !isNaN(numberMyExpense)) {
  //     setFriendExpense(numberBill - numberMyExpense);
  //   } else {
  //   }
  // }, [numberBill, numberMyExpense]);

  //DERIVED STATE
  let friendExpense = billValue - myExpense;

  const resetValues = () => {
    setBillValue("");
    setMyExpense("");
    setPersonPaying(1);
  };

  const handleBillChange = (e) => {
    setBillValue(+e.target.value);
  };

  const handleMyExpenseChange = (e) => {
    //MYEXPENSE IS THE OLD STATE VALUE, E.TARGET.VALUE IS THE NEW
    setMyExpense(
      Math.abs(+e.target.value) < billValue
        ? Math.abs(+e.target.value)
        : myExpense
    );
  };
  const handlePersonPaying = (e) => setPersonPaying(+e.target.value); //Biggest problem came from here (Did not convert to number initially)

  const handleSplitBill = () => {
    updateFriendBalance(personPaying === 1 ? friendExpense : -friendExpense);
    resetValues();
  };

  const USERNAME = selectedUser.name;

  return (
    <div className="justify-between flex flex-col basis-1/2 mycontainer">
      <h2>SPLIT A BILL WITH {USERNAME.toUpperCase()}</h2>
      <div className="my-5 flex flex-col flex-1 gap-5 justify-between lg:gap-0">
        <Input
          label="Bill Value"
          handleChange={handleBillChange}
          value={billValue}
        />
        <Input
          label="Your expense"
          handleChange={handleMyExpenseChange}
          value={myExpense}
        />
        <Input label={USERNAME + " expense"} value={friendExpense} />
        {/* <div>
          <label>{USERNAME} expense</label>
          <input placeholder="0" disabled value={friendExpense} type="number" />
        </div> */}
        <div className="flex gap-5 justify-around">
          <label>Who's paying for the bill?</label>
          <select value={personPaying} onChange={handlePersonPaying}>
            <option value={1}>You</option>
            <option value={2}>{USERNAME}</option>
          </select>
        </div>
      </div>
      <div className="flex justify-end mt-3">
        <button className="button-primary" onClick={handleSplitBill}>
          Split bill
        </button>
      </div>
    </div>
  );
}

export default BillBox;

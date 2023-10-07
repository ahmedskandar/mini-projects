import React from "react";

function UserItem({
  id,
  name,
  balance,
  img,
  handleSelectButtonClicked,
  selectedUserId,
}) {
  let absBalance = Math.abs(balance);
  let debtStatus, style;
  if (balance > 0) {
    debtStatus = name + " owes you $" + absBalance;
    style = "text-green-500";
  } else if (balance < 0) {
    debtStatus = "You owe " + name + " $" + absBalance;
    style = "text-red-500";
  } else if (balance === 0) {
    debtStatus = "You and " + name + " are even";
  }


  const handleButtonClick = () => {
    handleSelectButtonClicked(id);
  };

  return (
    <li className="flex items-center gap-5">
      <div className="basis-2/12">
        <img src={img} className="w-full rounded-full" alt="" />
        {/* <span>Image</span> */}
      </div>
      <div className="flex basis-10/12 gap-10 justify-between">
        <div>
          <h3 className="text-xl font-bold">{name}</h3>
          <p className={style}>{debtStatus}</p>
        </div>
        <button
          className={`${
            selectedUserId === id && "bg-yellow-700"
          } button-primary self-center`}
          onClick={handleButtonClick}
        >
          Select
        </button>
      </div>
    </li>
  );
}

export default UserItem;

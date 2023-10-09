import React, { useState } from "react";
import UserList from "./UserList";
import AddUser from "./AddUser";

function UserBox({
  handleSelectButtonClicked,
  selectedUserId,
  userData,
  handleAddFriend,
}) {
  const [isAddFriendBtnClicked, setIsAddFriendBtnClicked] = useState(false);
  const handleAddFriendClicked = () => {
    setIsAddFriendBtnClicked((prevState) => !prevState);
  };
  return (
    <div className="flex basis-1/2 flex-col gap-10 lg:px-10">
      <UserList
        selectedUserId={selectedUserId}
        userData={userData}
        handleSelectButtonClicked={handleSelectButtonClicked}
      />
      <button
        className={`${
          isAddFriendBtnClicked && "bg-yellow-700"
        } button-primary self-center`}
        onClick={handleAddFriendClicked}
      >
        {!isAddFriendBtnClicked ? "Add friend" : "Close"}
      </button>
      {isAddFriendBtnClicked && <AddUser handleAddFriend={handleAddFriend} />}
    </div>
  );
}

export default UserBox;

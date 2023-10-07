import React from "react";
import UserItem from "./UserItem";


function UserList({ handleSelectButtonClicked, selectedUserId, userData }) {
  return (
    <ul className="flex flex-col gap-8 p-3">
      {userData.map((user) => (
        <UserItem
          selectedUserId={selectedUserId}
          id={user.id}
          handleSelectButtonClicked={handleSelectButtonClicked}
          key={user.id}
          name={user.name}
          balance={user.balance}
          img={user.img}
        />
      ))}
    </ul>
  );
}

export default UserList;

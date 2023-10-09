import { useState } from "react";
import BillBox from "./BillBox";
import UserBox from "./UserBox";
import SectionTitle from "../UI/SectionTitle";

const BillSplit = () => {
  const USER_DATA = [
    {
      id: 1,
      name: "Clark",
      balance: 0,
      img: "https://imgs.search.brave.com/vwimYLUDcAbT_ZWKjz9DlBVRoovzdUlB7dl-L8ZFB78/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by91/c2VyLXByb2ZpbGUt/ZnJvbnQtc2lkZV8x/ODcyOTktMzk1OTUu/anBnP3NpemU9NjI2/JmV4dD1qcGc",
    },
    {
      id: 2,
      name: "Lois",
      balance: 0,
      img: "https://imgs.search.brave.com/vwimYLUDcAbT_ZWKjz9DlBVRoovzdUlB7dl-L8ZFB78/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by91/c2VyLXByb2ZpbGUt/ZnJvbnQtc2lkZV8x/ODcyOTktMzk1OTUu/anBnP3NpemU9NjI2/JmV4dD1qcGc",
    },
  ];
  const [userData, setUserData] = useState(USER_DATA);

  //YOU CAN EITHER PASS THE ENTIRE ARRAY AS PROPS OR PASS A FUNCTION
  //LIKE THIS TO MODIFY THE ARRAY
  const updateFriendBalance = (balance) => {
    setUserData((prevUserData) =>
      prevUserData.map((user) =>
        user.id === selectedUserId ? { ...user, balance } : user
      )
    );
    setSelectedUserId(null);
  };

  const handleAddFriend = (newFriend) => {
    setUserData((prevUserData) => prevUserData.concat(newFriend));
  };

  const [selectedUserId, setSelectedUserId] = useState(null);

  //CHECKS IF USER HAS ALREADY BEEN SELECTED, THEN IT REMOVES THE BILLBOX OTHERWISE
  //CHANGE THE BILLBOX TO THE NEW USER SELECTED
  const handleSelectButtonClicked = (newid) =>
    selectedUserId !== newid
      ? setSelectedUserId(newid)
      : setSelectedUserId(null);

  const selectedUser = userData.find((user) => selectedUserId === user.id);
  return (
    <section>
      <SectionTitle>BILL SPLIT</SectionTitle>
      <div className=" w-10/12 mx-auto flex flex-col gap-10 lg:gap-0 lg:flex-row lg:w-3/4">
        <UserBox
          handleAddFriend={handleAddFriend}
          userData={userData}
          selectedUserId={selectedUserId}
          handleSelectButtonClicked={handleSelectButtonClicked}
        />
        {selectedUserId && (
          <BillBox
            //WE NEED A KEY HERE TO IDENTIFY THE SELECTED USER AND RESET STATE WHEN
            //NEW USER IS SELECTED OTHERWISE ALL USERS MIGHT HAVE SAME STATE VALUES RETAINED
            //FROM BILLBOX. Refer to Key in your React JS notes.
            key={selectedUserId} //To differentiate between instances of the billbox
            selectedUser={selectedUser}
            updateFriendBalance={updateFriendBalance}
          />
        )}
      </div>
    </section>
  );
};

export default BillSplit;

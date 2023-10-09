import React, { useState } from "react";
import Input from "../UI/Input";

function AddUser({ handleAddFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  const resetValues = () => {
    setName("");
    setImage("");
  };

  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };

  const imageChangeHandler = (e) => {
    setImage(e.target.value);
  };

  const handleAddButton = () => {
    handleAddFriend({
      id: Math.random(),
      name,
      balance: 0,
      img:
        image ||
        "https://imgs.search.brave.com/vwimYLUDcAbT_ZWKjz9DlBVRoovzdUlB7dl-L8ZFB78/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by91/c2VyLXByb2ZpbGUt/ZnJvbnQtc2lkZV8x/ODcyOTktMzk1OTUu/anBnP3NpemU9NjI2/JmV4dD1qcGc",
    });
    resetValues();
  };

  return (
    <div className="mycontainer">
      <div className="flex flex-col gap-5 mb-5">
        <Input
          type={"text"}
          label={"Friend name"}
          value={name}
          handleChange={nameChangeHandler}
        />
        <Input
          type={"text"}
          label={"Image URL"}
          value={image}
          handleChange={imageChangeHandler}
        />
      </div>
      <div className="flex justify-end">
        <button onClick={handleAddButton} className="button-primary">
          ADD
        </button>
      </div>
    </div>
  );
}

export default AddUser;

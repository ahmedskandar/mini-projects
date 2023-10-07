import React from "react";
 const Input = ({ handleChange = null, value, label, type = "number" }) =>{
  return (
    <div className="flex justify-around">
      <label>{label}</label>
      <input
        placeholder={type === "number" ? "0" : null}
        className="pl-2"
        onChange={handleChange}
        value={value}
        type={type}
        disabled = {!handleChange}
      />
    </div>
  );
}

export default Input
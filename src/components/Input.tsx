import React from "react";
type InputProps = {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
function Input({ value, handleChange }: InputProps) {
  // const handleInputChange =(event:React.ChangeEvent<HTMLInputElement>)=>{

  // }
  return (
    <div>
      <input type="text" value={value} onChange={handleChange} />
    </div>
  );
}

export default Input;

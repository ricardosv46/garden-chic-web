import { Show } from "@components/show";
import React, { ChangeEventHandler } from "react";

interface CheckboxProps {
  label: string;
  name: string;
  stock?: number;
  onChange: ChangeEventHandler<HTMLInputElement>;
  value:any
}
const InputCheckbox = ({ label, name, stock,onChange,value }: CheckboxProps) => {
  return (
    <div className="flex items-center justify-between py-1 ">
      <div className="flex items-center gap-x-3">
        <input
          type="checkbox"
          id={name}
          name={name}
          className="w-5 h-5 rounded border  checked:bg-primary-800 "
          onChange={onChange}
          value={value}
        />
        <label htmlFor={name} className="text-[18px]">
          {label}
        </label>
      </div>
      <Show condition={typeof stock !== "undefined"}>
        <div className="rounded-full text-[12px] flex justify-center items-center h-7 w-7  bg-primary-600 text-white">
          {stock}
        </div>
      </Show>
    </div>
  );
};

export default InputCheckbox;

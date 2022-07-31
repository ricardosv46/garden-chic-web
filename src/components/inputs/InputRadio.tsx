import { Show } from "@components/show";
import React, { ChangeEventHandler } from "react";

interface Radio {
  label: string;
  name: string;
  stock?: number;
  id: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  defaultChecked?: boolean;
}
const InputRadio = ({
  label,
  name,
  stock,
  id,
  value,
  onChange,
  defaultChecked = false,
}: Radio) => {
  return (
    <div className="flex items-center justify-between py-1 ">
      <div className="flex items-center gap-x-3">
        <input
          type="radio"
          id={id}
          name={name}
          className="w-5 h-5 rounded border  checked:bg-primary-800"
          value={value}
          onChange={onChange}
          defaultChecked={defaultChecked}
        />
        <label htmlFor={id} className="text-[18px]">
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

export default InputRadio;

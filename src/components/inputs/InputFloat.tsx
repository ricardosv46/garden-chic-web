import React, { ChangeEvent, InputHTMLAttributes } from "react";
import { ReactElement } from "react";
interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  value?: string;
  name?: string;
  className?: string;
  htmlFor?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  ref?: any;
  rightElement?: ReactElement;
}
const InputFloat = ({
  label,
  value,
  name,
  onChange,
  className = "w-full",
  type = "text",
  htmlFor,
  ref,
  rightElement,
  ...props
}: IProps) => {
  return (
    <div className="relative w-full">
      <input
        {...props}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className={`${className} block px-2.5  pb-2 pt-5 text-sm text-gray-900 font-semibold border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary-300 peer rounded-md`}
        placeholder=""
        ref={ref}
      />
      <label
        htmlFor={htmlFor}
        className="absolute text-sm text-primary-300 font-semibold duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-primary-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75  peer-focus:-translate-y-4"
      >
        {label}
      </label>

      {rightElement && (
        <div className="absolute right-3 top-[13px]">{rightElement}</div>
      )}
    </div>
  );
};

export default InputFloat;

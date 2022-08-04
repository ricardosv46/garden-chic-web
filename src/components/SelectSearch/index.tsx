/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useRef } from "react";
import IconArrowBottom from "public/icons/IconArrowBottom";
import IconClose from "public/icons/IconClose";
import IconLupa from "public/icons/IconLupa";
import { Show } from "@components/show";
import InputFloat from "@components/inputs/InputFloat";

interface Iprops {
  tittle: string;
  data: { titulo: string; value: string }[];
  name: string;
  disabled?: boolean;
  value: string;
  setStateMutation: (key: string, value: string | number) => void;
  inputSearch?: boolean;
}
export const SelectSearch = ({
  tittle,
  data,
  name,
  value,
  disabled,
  setStateMutation,
  inputSearch = false,
}: Iprops) => {
  const [open, setOpen] = useState(false);
  const [filtering, setFiltering] = useState(false);

  const inpEl = useRef<HTMLInputElement>(null);
  const [textFilter, setTextFilter] = useState(
    data.find((obj) => obj.value === value)?.titulo || ""
  );
  const WrapperDropdown = useRef<HTMLDivElement>(null);

  const handleHideDropdown = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      setOpen(false);
    }
  };

  const handleClickOutside = (event: Event) => {
    if (
      WrapperDropdown.current &&
      !WrapperDropdown.current.contains(event.target as Node)
    ) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleHideDropdown, true);
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("keydown", handleHideDropdown, true);
      document.removeEventListener("click", handleClickOutside, true);
    };
  });

  useEffect(() => {
    setTextFilter("")
  }, [data.length])
  

  return (
    <div
      className="flex flex-col w-full relative min-w-max"
      ref={WrapperDropdown}
    >
      {/* <label
        className={`absolute text-[11px] block bg-white rounded-full px-2 transition-all transform duration-300 ${
          textFilter ? " opacity-100 -top-2 left-4" : "opacity-0 top-4 left-6 " 
        }`}
      >
        {tittle}
      </label> */}

      <div className="relative w-full">
        <input
          type={"text"}
          name={name}
          value={textFilter}
          id={tittle}
          onChange={({ target }) => {
            setTextFilter(target.value);
            setFiltering(true);
          }}
          className={`w-full block px-2.5 pb-2 pt-5 text-sm text-gray-900 font-semibold border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary-300 peer rounded-md`}
          placeholder=""
          ref={inpEl}
        />
        <label
          htmlFor={tittle}
          className="absolute text-sm text-primary-300 font-semibold duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-primary-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75  peer-focus:-translate-y-4"
        >
          {tittle}
        </label>

        <div className="absolute right-3 top-[13px]">
          <button
            type="button"
            onClick={(e) => {
              setOpen(!open);
              inpEl.current?.focus();
            }}
          >
            <IconArrowBottom className="w-6 h-6 absolute right-0 top-0 rounded-md border" />
          </button>
        </div>
      </div>
      {/* 
      <InputFloat
        type="text"
        label={tittle}
        name={tittle}
        id={tittle}
        htmlFor={tittle}
        maxLength={255}
        value={textFilter}
        onChange={({ target }) => setTextFilter(target.value)}
        rightElement={}
      /> */}
      {/* 
      <button
        className=" px-8 h-12 text-primary-800 border border-primary-100 w-full hover:bg-primary- focus:ring-2 focus:outline-none  focus:ring-blue-300 font-medium rounded-lg text-sm  py-2.5 text-center inline-flex items-center"
        type="button"
        disabled={disabled}
        onClick={() => setOpen(!open)} 
      >
        {textFilter ? textFilter : tittle}

        <IconArrowBottom className="w-4 h-8 absolute right-1" />
      </button> */}

      <div
        className={`absolute  ${
          open || (textFilter.length && !open && filtering) ? "block" : "hidden"
        }  bg-white rounded shadow overflow-y-scroll z-30 top-14 w-full`}
      >
        <ul className="px-3 pb-3 max-h-[192px] text-sm text-gray-700 dark:text-gray-200">
          {data.map((obj, index) =>
            obj.titulo.startsWith(textFilter.toUpperCase()) ? (
              <li key={index}>
                <div className="flex items-center pl-2 rounded hover:bg-gray-100 ">
                  <label
                    className="py-2 ml-2 w-full text-sm font-medium text-gray-900 rounded  cursor-pointer"
                    onClick={() => {
                      setStateMutation(name, obj.value),
                        setOpen(false),
                        setTextFilter(obj.titulo);
                      setFiltering(false);
                    }}
                  >
                    {obj?.titulo || ""}
                  </label>
                </div>
              </li>
            ) : null
          )}
        </ul>
      </div>
      {/* <div
        className={`absolute  ${
          textFilter.length === 0 && open ? "block" : "hidden"
        }  bg-white rounded shadow overflow-y-scroll z-30 top-14 w-full`}
      >
        <ul className="px-3 pb-3 max-h-[192px] text-sm text-gray-700 dark:text-gray-200">
          {data.map((obj, index) =>
            obj.titulo.startsWith(textFilter.toUpperCase()) ? (
              <li key={index}>
                <div className="flex items-center pl-2 rounded hover:bg-gray-100 ">
                  <label
                    className="py-2 ml-2 w-full text-sm font-medium text-gray-900 rounded  cursor-pointer"
                    onClick={() => {
                      setStateMutation(name, obj.value),
                        setOpen(false),
                        setTextFilter(obj.titulo);
                    }}
                  >
                    {obj?.titulo || ""}
                  </label>
                </div>
              </li>
            ) : null
          )}
        </ul>
      </div> */}
    </div>
  );
};

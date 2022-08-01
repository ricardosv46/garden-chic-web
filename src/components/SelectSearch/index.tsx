/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useRef } from "react";
import IconArrowBottom from "public/icons/IconArrowBottom";
import IconClose from "public/icons/IconClose";
import IconLupa from "public/icons/IconLupa";
import { Show } from "@components/show";

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
  const [textFilter, setTextFilter] = useState("");
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

  return (
    <div
      className="flex flex-col w-full relative min-w-max"
      ref={WrapperDropdown}
    >
      <label
        className={`absolute text-[11px] block bg-white rounded-full px-2 transition-all transform duration-300 ${
          textFilter ? " opacity-100 -top-2 left-4" : "opacity-0 top-4 left-6 " 
        }`}
      >
        {tittle}
      </label>

      <button
        className=" px-8 h-12 text-primary-800 border border-primary-100 w-full hover:bg-primary- focus:ring-2 focus:outline-none  focus:ring-blue-300 font-medium rounded-lg text-sm  py-2.5 text-center inline-flex items-center"
        type="button"
        disabled={disabled}
        onClick={() => setOpen(!open)}
      >
        {textFilter ? textFilter : tittle}

        <IconArrowBottom className="w-4 h-8 absolute right-1" />
      </button>

      <div
        className={`absolute  ${
          open ? "block" : "hidden"
        }  bg-white rounded shadow overflow-y-scroll z-30 top-14 w-full`}
      >
        {/* Input Search */}
        {/* <Show condition={inputSearch}> */}
        <div className="p-3">
          <label className="sr-only">Buscar</label>
          <div className="relative">
            <div
              className="flex absolute inset-y-0 right-1 items-center cursor-pointer "
              onClick={() => setTextFilter("")}
            >
              <Show
                condition={textFilter.length > 0}
                isDefault={
                  <IconLupa className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                }
              >
                <IconClose />
              </Show>
            </div>
            <input
              type="text"
              className="block p-2 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Buscar"
              name="textFilter"
              value={textFilter}
              onChange={({ target }) => setTextFilter(target.value)}
            />
          </div>
        </div>
        {/* </Show> */}

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
      </div>
    </div>
  );
};

/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
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
}
export const SelectSearch = ({
  tittle,
  data,
  name,
  value,
  disabled,
  setStateMutation,
}: Iprops) => {
  const [open, setOpen] = useState(false);
  const [textFilter, setTextFilter] = useState("");

  //   useEffect(() => {
  //     if ((data.length > 0) && (value.length > 0))
  //       setTextFilter(data[Number(value)].titulo);
  //   }, [data]);

  return (
    <div
      className="flex flex-col w-full relative min-w-max"
    >
      <button
        className="text-white px-8 h-12 bg-primary-600 w-full hover:bg-primary- focus:ring-2 focus:outline-none  focus:ring-blue-300 font-medium rounded-lg text-sm  py-2.5 text-center inline-flex items-center"
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
        }  bg-white rounded shadow overflow-y-scroll z-30 top-14`}
      >
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

        <ul className=" px-3 pb-3 max-h-[192px]  text-sm text-gray-700 dark:text-gray-200 ">
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
            ) : //   <div className="flex items-center pl-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
            //     <label className="py-2 ml-2 w-full text-sm font-medium text-gray-900 rounded dark:text-gray-300">
            //       {"No existe"}
            //     </label>
            //   </div>
            null
          )}
        </ul>
      </div>
    </div>
  );
};

import React, { ChangeEvent, useState } from "react";

const useForm = <T>(initialState: T) => {
  const [state, setState] = useState(initialState);

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setState({
      ...state,
      [e.target.dataset.name || e.target.name]: e.target.value,
    });
  };

  const resetForm = (reset?: T) => {
    setState(reset ? reset : initialState);
  };
  const onFocus = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setState({ ...state, focus: e.target.dataset.name || e.target.name });
  };

  const setStateMutation = (key: string, value: string | number) => {
    setState({ ...state, [key]: value });
  };

  return { ...state, onChange, resetForm, onFocus, setStateMutation };
};

export default useForm;

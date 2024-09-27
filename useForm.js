import { useState } from "react";

const useForm = (initialForm = {}) => {
  const [form, setForm] = useState(initialForm);

  const handleInputChange = ({ target }) => {
    const { name, value } = target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleReset = () => {
    setForm(initialForm);
  };

  return {
    ...form,
    form,
    handleInputChange,
    handleReset,
  };
};

export default useForm;

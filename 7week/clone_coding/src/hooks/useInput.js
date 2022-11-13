import { useState } from 'react';

const useInput = (initialValue, validator, initialValid = false) => {
  const [value, setValue] = useState(initialValue);
  const [isValid, setIsValid] = useState(initialValid);

  const onChange = (event) => {
    const input = event.target.value;
    setValue(input);
    if (typeof validator === 'function') {
      setIsValid(validator(input));
    }
  };
  return { value, onChange, isValid };
};

export default useInput;

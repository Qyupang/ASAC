import { useState } from 'react';

const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);

  const onChange = (event) => {
    const input = event.target.value;
    let willUpdate = true;
    if (typeof validator === 'function') {
      willUpdate = validator(input);
    }
    if (willUpdate) {
      setValue(input);
    }
  };
  return { value, onChange };
};

export default useInput;

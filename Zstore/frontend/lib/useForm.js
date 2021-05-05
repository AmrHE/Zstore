import { useState } from 'react';

const useForm = (initial = {}) => {
  // Create a state object for our inputs
  const [inputs, setInputs] = useState(initial);

  // Example for the data we are dealing with
  // inputs = {
  //   name: 'AirForce',
  //   description: 'nice shoes',
  //   price: '1000'
  // }

  const handleChange = (e) => {
    // destructuring these consts from our inputs
    let { value, name, type } = e.target;

    // TODO: multiply the price value by 100 to convert from  dollars to cents
    if (type === 'number') {
      value = parseInt(value);
    }

    if (type === 'file') {
      value[0] = e.target.files;
    }

    setInputs({
      // 1. Copy the existing state
      ...inputs,
      // 2.Update the state dynamically
      [name]: value,
    });
  };

  const resetForm = () => {
    // reset the input states
    setInputs(initial);
  };

  const clearForm = () => {
    // 1. Turn inputs into an array using Object.entries,
    // 2. then map through it and clear the value of each key,
    // 3. then turn it back to an Object using Object.fromEntries
    const blankState = Object.fromEntries(
      Object.entries(inputs).map(([key, value]) => [key, ''])
    );
    setInputs(blankState);
  };

  // return the things we want to get from this custom hook
  return {
    inputs,
    handleChange,
    resetForm,
    clearForm,
  };
};

export default useForm;

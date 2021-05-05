import useForm from '../lib/useForm';

const CreateProduct = () => {
  const { inputs, handleChange, clearForm, resetForm } = useForm({
    name: 'AirForce',
    description: 'nice shoes',
    price: 1000,
  });

  return (
    <form>
      <label htmlFor="name">
        Name
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          value={inputs.name}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="price">
        Price
        <input
          type="number"
          id="price"
          name="price"
          placeholder="price"
          value={inputs.price}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="description">
        Description
        <input
          type="text"
          id="description"
          name="description"
          placeholder="description"
          value={inputs.description}
          onChange={handleChange}
        />
      </label>
      <button type="button" onClick={resetForm}>
        Reset Form
      </button>
      <button type="button" onClick={clearForm}>
        Clear Form
      </button>
    </form>
  );
};

export default CreateProduct;

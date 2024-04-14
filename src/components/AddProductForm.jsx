import React, { useState } from 'react';
import useCreateProduct from '../hooks/useCreateProduct';

const AddProductForm = () => {
  const [name, setName] = useState('');
  const [calorie, setCalorie] = useState('');
  const [category, setCategory] = useState('');

  const postProduct = useCreateProduct();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Проверка наличия заполненных полей
    if (!name || !calorie || !category) {
      alert('Пожалуйста, заполните все поля');
      return;
    }

    try {
      const newProduct = await postProduct(name, calorie, category);
      console.log('Новый продукт:', newProduct);
      debugger
      // Сброс значений полей после успешной отправки
      setName('');
      setCalorie('');
      setCategory('');
    } catch (error) {
      console.error('Ошибка при добавлении продукта:', error);
      alert('Произошла ошибка при добавлении продукта');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <br />
      <label>
        Calorie:
        <input
          type="number"
          value={calorie}
          onChange={(e) => setCalorie(e.target.value)}
        />
      </label>
      <br />
      <label>
        Category:
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Add foodstuff</button>
    </form>
  );
};

export default AddProductForm;

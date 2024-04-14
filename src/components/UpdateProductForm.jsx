import React, { useState } from 'react';
import useUpdateProduct from '../hooks/useUpdateProduct';

const UpdateProductForm = () => {
  const [oldName, setOldName] = useState('');
  const [newName, setNewName] = useState('');

  const updateProduct = useUpdateProduct();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Проверка наличия заполненных полей
    if (!oldName || !newName) {
      alert('Пожалуйста, заполните все поля');
      return;
    }

    try {
      const updatedProduct = await updateProduct(oldName, newName);
      console.log('Обновленный продукт:', updatedProduct);

      // Сброс значений полей после успешного обновления
      setOldName('');
      setNewName('');
    } catch (error) {
      console.error('Ошибка при обновлении продукта:', error);
      alert('Произошла ошибка при обновлении продукта');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        old name:
        <input
          type="text"
          value={oldName}
          onChange={(e) => setOldName(e.target.value)}
        />
      </label>
      <br />
      <label>
        new name:
        <input
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Обновить продукт</button>
    </form>
  );
};

export default UpdateProductForm;

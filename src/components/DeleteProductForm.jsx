import React, { useState } from 'react';
import useDeleteProduct from '../hooks/useDeleteProduct';

const DeleteProductForm = () => {
  const [name, setName] = useState('');

  const deleteProduct = useDeleteProduct();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Проверка наличия заполненного поля
    if (!name) {
      alert('Пожалуйста, введите имя продукта');
      return;
    }

    try {
      const isDeleted = await deleteProduct(name);
      if (isDeleted) {
        console.log('Продукт успешно удален');
        // Сброс значения поля после успешного удаления
        setName('');
      } else {
        console.log('Не удалось удалить продукт');
      }
    } catch (error) {
      console.error('Ошибка при удалении продукта:', error);
      alert('Произошла ошибка при удалении продукта');
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
  <button type="submit">Delete foodstuff</button>
</form>
  );
};

export default DeleteProductForm;

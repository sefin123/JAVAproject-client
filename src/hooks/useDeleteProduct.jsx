const useDeleteProduct = () => {
  const deleteProduct = async (name) => {
    try {
      const response = await fetch(`http://localhost:8080/food?name=${name}`, {
        method: 'DELETE',
      });
      return response.ok;
    } catch (error) {
      console.error('Error', error);
      return false;
    }
  };

  return deleteProduct;
};

export default useDeleteProduct;

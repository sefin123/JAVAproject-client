const useUpdateProduct = () => {
  const updateProduct = async (oldName, newName) => {
    try {
      const response = await fetch(`http://localhost:8080/food?oldName=${oldName}&newName=${newName}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          oldName: oldName,
          newName: newName
        })
      });
      const updatedProduct = await response.json();
      return updatedProduct;
    } catch (error) {
      console.error('Error', error);
      return null;
    }
  };

  return updateProduct;
};

export default useUpdateProduct;

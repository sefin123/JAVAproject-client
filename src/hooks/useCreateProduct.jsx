const useCreateProduct = () => {
  const postProduct = async (name, calorie, category) => {
    try {
    const response = await fetch(`http://localhost:8080/food?name=${name}&calorie=${calorie}&category=${category}`, {
      method:'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        calorie: calorie,
        category: category
      })
    });
    const product = await response.json();
    return product;
    } catch {
      return [];
    } 
  }
  return postProduct;
}
export default useCreateProduct;

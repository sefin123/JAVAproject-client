const useProduct = () => {
  const getProduct = async (name) => {
    try {
    const response = await fetch(`http://localhost:8080/food?name=${name}`);
    const product = await response.json();
    return product;
    } catch {
      return [];
    } 
  }
  return getProduct;
}
export default useProduct;

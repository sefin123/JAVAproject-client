const useProductList = () => {
  const getProducts = async () => {
    try {
    const response = await fetch("http://localhost:8080/foods");
    const products = await response.json();
    console.log("data", products);
    debugger
    return products;
    } catch {
      return [];
    } 
  }
  return getProducts;
}
export default useProductList;

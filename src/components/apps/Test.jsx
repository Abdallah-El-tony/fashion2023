// import axios from "axios";
// import { useState, useEffect, createContext, useContext } from "react";

// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// const queryClient = new QueryClient();

// const useFetch = () => {
//   const [items, setItems] = useState([]);
//   useEffect(() => {
//     const getData = async () => {
//       const response = await axios.get(
//         "http://localhost:3000/FeaturedProducts"
//       );
//       setItems(response.data);
//     };
//     getData();
//   }, []);
//   return { items };
// };

// const ProductsContext = createContext({});

// const CategoryList = () => {
//   const [c, setC] = useState(0);
//   const { items } = useFetch();
//   const context = useContext(ProductsContext);
//   context;
//   return (
//     <div>
//       {items.map((item, i) => (
//         <div key={i}>{item.name}</div>
//       ))}
//       <button onClick={() => setC(c + 1)}>{c}</button>
//     </div>
//   );
// };

// const Test = () => {
//   return (
//     <QueryClientProvider client={queryClient}>
//       <ProductsContext.Provider value={useFetch()}>
//         <CategoryList />
//       </ProductsContext.Provider>
//     </QueryClientProvider>
//   );
// };

// export default Test;

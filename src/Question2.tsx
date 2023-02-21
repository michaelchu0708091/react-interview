import { useState, useEffect } from "react";
const Question2: React.FC = () => {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-xl">
        Please write a custom hook to fetch products from{" "}
        <a
          className="text-blue-500 underline"
          href="https://dummyjson.com/products"
        >
          https://dummyjson.com/products
        </a>
      </h1>

      <div>
        API Documents:{" "}
        <a
          className="text-blue-500 underline"
          href="https://dummyjson.com/docs/products"
        >
          https://dummyjson.com/docs/products
        </a>
      </div>
      <div>
        <div>Requirements:</div>
        <ol className="list-decimal list-inside text-gray-600">
          <li>
            The hook should at least return loading state and the list of
            products
          </li>
          <li>
            Render a <strong>full</strong> list of products
          </li>
          <li>Add a input textbox to filter products</li>
          <li>Add pagination</li>
        </ol>
      </div>

      <hr />

      <ProductInspector />
    </div>
  );
};

/** You should start here */
// Calc of skip = 20*currentPage
const ProductInspector: React.FC = () => {

  const [filter, setFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const { isLoading, products } = useFetchProduct(filter, currentPage*20)


  // useEffect(()=>{
  //   useFetchProduct(filter);
  // }, [filter]);
  return (
    <>
    <button disabled={currentPage === 0} onClick={e=>setCurrentPage((prevState)=>prevState-1)}>Prev page</button>
    <button onClick={e=>setCurrentPage((prevState)=>prevState+1)}>Next page</button>
    <input type='text' onChange={e=>setFilter(e.target.value)} value={filter}></input>
   { !isLoading && products.map(item => <div key={item.id}>{item.title}: {item.description}</div>)}
   {isLoading && <div>isLoading....</div>}

    </>

  )
};

export default Question2;

const fetchProductsList = async (query?, skip?) => {
  const url = `https://dummyjson.com/products/search?limit=20&skip=${skip}&q=${query || ''}`
  const _response = await fetch(url);
  const list = await _response.json();
  const response = list && list.products?.reduce((p, c) => [...p, { id: c.id, title: c.title, description: c.description }], []);
  return response;
}

const useFetchProduct = (query?, skip?) => {
  const [stateList, setStateList] = useState({
    isLoading: true,
    products: [],
  });
  const fetch = async (query) => {
    setStateList({...stateList, isLoading: true});
    const list = await fetchProductsList(query, skip);
    list && setStateList({
      isLoading: false,
      products: list
    })
  }
  useEffect(() => {
    fetch(query, skip);
  }, [query, skip])
  return stateList;
}
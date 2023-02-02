const Question2: React.FC = () => {
  return <div className="flex flex-col gap-2">
    <h1 className="text-xl">Please write a custom hook to fetch products from <a className="text-blue-500 underline" href="https://dummyjson.com/products">https://dummyjson.com/products</a></h1>

    <div>API Documents: <a className="text-blue-500 underline" href="https://dummyjson.com/docs/products">https://dummyjson.com/docs/products</a></div>
    <div>
      <div>Requirements:</div>
      <ol className="list-decimal list-inside text-gray-600">
        <li>The hook should at least return loading state and the list of products</li>
        <li>Render a <strong>full</strong> list of products</li>
        <li>Add a input textbox to filter products</li>
        <li>Add pagination</li>
      </ol>
    </div>

    <hr />

    <ProductInspector />
  </div>
}

/** You should start here */
const ProductInspector: React.FC = () => {
  return <div className="text-gray-400">You should start here</div>
}

export default Question2

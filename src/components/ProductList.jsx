const ProductList = ({ products }) => {
  return (
    <>
      {products.map((prod) => (
        <figure key={prod.id} className="card">
          <img src={prod.images[0]} alt={prod.title} />
          <div className="card-data">
            <figcaption>{prod.title}</figcaption>
            <h3>${prod.price}</h3>
          </div>
        </figure>
      ))}
    </>
  );
};

export default ProductList;

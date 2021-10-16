const CardComponent = ({ product, addToCart }) => {
  return (
    <div className="card col-4">
      <img className="card-img-top" src={product.thumbnail} alt="imagen" />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">{product.price}</p>
        <button
          onClick={(event) => addToCart(event, product)}
          className="btn btn-primary"
        >
          Comprar
        </button>
      </div>
    </div>
  );
};
export default CardComponent;

const CardComponent = ({title, img}) => {

    const onClick = (event) => {
        console.log("se clickeo", event)
    }
        return (
        <div className="card col-4">
            <img className="card-img-top" src={img} alt="imagen" />
            <div className="card-body">
                 <h5 className="card-title">{title}</h5>
                 <p className="card-text">El Tiger I, cuya designación oficial era Panzer VI Tiger, fue un tanque pesado alemán desarrollado en 1941 y usado en la Segunda Guerra Mundial hasta la aparición del Tiger II</p>
                 <button onClick={onClick} className="btn btn-primary">Comprar</button>
            </div>
        </div>
    )
}
export default CardComponent;
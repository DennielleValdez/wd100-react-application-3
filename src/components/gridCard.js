const GridCard = (props) => {
    return ( 
        <>
        <div className="col-md-4">
            <div className="card">
                <img src={props.img} className="card-img-top" alt="..." height="500"></img>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.desc}</p>
                    <a href="#" className="btn btn-dark text-warning">Learn More</a>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default GridCard;
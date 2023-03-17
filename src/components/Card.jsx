export default function Card(props) {
    const {
        imgSrc,
        country,
        mapLink,
        location,
        dateStart,
        dateEnd,
        description,
    } = props.data;
    return (
        <div className="card">
            <img
                className={
                    props.color === "red"
                        ? "red"
                        : props.color === "blue"
                        ? "blue"
                        : props.color
                }
                alt=""
                src={imgSrc}
            />
            <div className="card-content">
                <div className="card-header">
                    <h2>
                        <i
                            className={
                                props.color === "red"
                                    ? "fa fa-star red"
                                    : props.color === "blue"
                                    ? "fa fa-star blue"
                                    : "fa fa-star purple"
                            }
                        ></i>
                        {country}
                    </h2>
                    <a href={mapLink} target="_blank" >View on Google Maps</a>
                </div>

                <h3>{location}</h3>
                <h4>
                    {dateStart} - {dateEnd}
                </h4>
                <p>{description}</p>
            </div>
        </div>
        
    );
}

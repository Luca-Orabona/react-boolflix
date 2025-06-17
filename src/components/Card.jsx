const Card = ({movie}) => {
    return (

        <div className="card h-100">
            <div className="card-body">
                <h3>{movie.title}</h3>
                <h5>{movie.original_title}</h5>
                <p>{movie.original_language}</p>
                <p>{movie.vote_average}</p>
            </div>
        </div>
    )
}

export default Card
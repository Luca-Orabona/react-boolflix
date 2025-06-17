const Card = ({ movie }) => {

    return (


        <div className="card h-100">
            <div className="card-body">
                <img className="image-movie" src={`https://image.tmdb.org/t/p/w342${movie.backdrop_path}`} alt="" />
                <div className="info-card-movie">
                    <h3>{movie.title}</h3>
                    <h5>{movie.original_title}</h5>
                    {movie.original_language === "it" && <img src="/italia.png" alt="flag italy" /> || movie.original_language}
                    <p>{movie.vote_average}</p>
                </div>
            </div>
        </div >

    )
}

export default Card
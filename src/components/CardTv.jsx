const CardTv = ({ tv }) => {

    return (


        <div className="card h-100">
            <div className="card-body">
                <img className="image-tv" src={`https://image.tmdb.org/t/p/w342${tv.backdrop_path}`} alt="" />
                <div className="info-card-tv">
                    <h3>{tv.name}</h3>
                    <h5>{tv.original_name}</h5>
                    {tv.original_language === "it" && <img src="/italia.png" alt="flag italy" /> || tv.original_language}
                    <p>{tv.vote_average}</p>
                </div>
            </div>
        </div>

    )
}

export default CardTv
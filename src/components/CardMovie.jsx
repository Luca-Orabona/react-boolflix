const Card = ({ movie }) => {

  const getStars = (vote) => {
    const stars = Math.ceil(vote / 2); // arrotonda da 1-10 a 1-5
    const totalStars = 5;
    const starIcons = [];

    for (let i = 0; i < totalStars; i++) {
      starIcons.push(
        <i
          key={i}
          className={`fa-star fa ${i < stars ? "fas text-warning" : "far text-muted"} me-1`}
        ></i>
      );
    }

    return starIcons;
  };

  return (


    <div className="card overflow-auto border border-black">

      <div className="card-body  p-0">
        {movie.backdrop_path ? (
          <img
            className="image-tv w-100 object-fit-cover" 
            src={`https://image.tmdb.org/t/p/w342${movie.backdrop_path}`}
            alt={movie.title}
          />
        ) : (
          <div className="image-tv d-flex justify-content-center align-items-center bg-secondary text-white">
            <span>Immagine non disponibile</span>
          </div>
        )}
       
        <div className="info-card-movie">
          <h6>{`Titolo: ${movie.title}`}</h6>
          <p>{`Titolo originale: ${movie.original_title}`}</p>
          {movie.original_language === "it" && <img className="flag-language mb-2" src="/italia.png" alt="flag italy" /> || "Lingua:" + " " +  movie.original_language}
          <div>{getStars(movie.vote_average)}</div>
        </div>

      </div>
    </div >

  )
}

export default Card
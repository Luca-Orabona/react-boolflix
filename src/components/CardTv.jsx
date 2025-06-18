const CardTv = ({ tv }) => {

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

      <div className="card-body p-0">

        {tv.backdrop_path ? (
          <img
            className="image-tv w-100 object-fit-cover"
            src={`https://image.tmdb.org/t/p/w342${tv.backdrop_path}`}
            alt={tv.name}
          />
        ) : (
          <div className="image-tv d-flex justify-content-center align-items-center bg-secondary text-white">
            <span>Immagine non disponibile</span>
          </div>
        )}

      
        <div className="info-card-tv">
          <h6>{`Titolo: ${tv.name}`}</h6>
          <p>{`Titolo originale: ${tv.original_name}`}</p>
          {tv.original_language === "it" && <img className="flag-language mb-2" src="/italia.png" alt="flag italy" /> || "Lingua:" + " " +  tv.original_language}
          <div>{getStars(tv.vote_average)}</div>
        </div>

      </div>
    </div>

  )
}

export default CardTv
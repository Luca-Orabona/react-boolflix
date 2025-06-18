
const FormSearch = ({searchMovie, setSearchMovie, sendData }) => {

    return (
        <form className="row g-3 py-4" onSubmit={sendData}>

            <div className="col-9">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Cerca..."
                    value={searchMovie}
                    onChange={(e) => setSearchMovie(e.target.value)}
                />
            </div>

            <div className="col-3">
                <button type="submit" className="btn btn-primary w-100">Cerca</button>
            </div>

        </form>
    )
}

export default FormSearch;
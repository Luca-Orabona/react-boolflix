
const FormSearch = ({search, handleSearch, sendData}) => {


    return (
        <form className="row g-3 py-4" onSubmit={sendData}>

            <div className="col-10">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Cerca..."
                    value={search}
                    onChange={(e) => handleSearch(e.target.value)}
                />
            </div>

            <div className="col-2">
                <button type="submit" className="btn btn-primary w-100">Cerca</button>
            </div>

        </form>
    )
}

export default FormSearch;
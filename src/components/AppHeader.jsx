import FormSearch from "./FormSearch";

const AppHeader = ({ searchMovie, setSearchMovie, sendData }) => {
    return (
        <header className="bg-dark px-3">

            <nav className="row align-items-center">
                <div className="col-6">
                    <a className="logo" href="#">BOOLFLIX</a>
                </div>
                <div className="col-6">
                    <FormSearch
                        searchMovie={searchMovie}
                        setSearchMovie={setSearchMovie}
                        sendData={sendData}
                    />
                </div>
            </nav>

        </header>
    )
}

export default AppHeader;
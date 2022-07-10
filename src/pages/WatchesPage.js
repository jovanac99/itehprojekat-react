import { Link } from 'react-router-dom';

function WatchesPage() {
    return (
        <div className="wp-div">
            <div className="background-image">
                <h1 id="wtch">Galaxy Watches</h1>

                <Link to={"/novi-sat"}><button type="button" className="btn btn-light" id="addbn">ADD</button></Link>

            </div>
        </div>
    )
}

export default WatchesPage;
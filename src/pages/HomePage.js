import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <div className="hp-div">

            <div className="backround-image">

                <h1 id="wlcm">Welcome to our shop</h1>

                <Link to={"/registracija"}><button class="btn btn-lg btn-light" id="rg">Register</button></Link>
                <Link to={"/login"}><button class="btn btn-lg btn-light" id="lgnbtn">Login</button></Link>


            </div>

        </div>
    )
}

export default HomePage;
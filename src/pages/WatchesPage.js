import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Sat from '../components/Sat';
import Nav from '../components/Nav';

function WatchesPage() {

    const [sviSatovi, setSviSatovi] = useState([]);

    useEffect(() => {
        axios.get(`api/vrati-satove`).then(res => {
            setSviSatovi(res.data.sviSatovi);
        });
    }, []);


    const dugme = <div>
        <Link to={"/novi-sat"}><button type="button" className="btn btn-light" id="addbn">ADD</button></Link>
    </div>


    return (
        <div className="wp-div">
            <div className="background-image">

                <Nav />

                <h1 id="wtch">Galaxy Watches</h1>

                {localStorage.getItem('type') === 'admin' ? dugme : ""}

                <div className="svisatovi-div">
                    {sviSatovi.map((sat) => {
                        return (
                            <div className="sat-div" key={sat.id}>
                                <Sat sat={sat} />
                            </div>
                        )
                    })}
                </div>

            </div>
        </div>
    )
}

export default WatchesPage;
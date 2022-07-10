import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Sat from '../components/Sat';

function WatchesPage() {

    const [sviSatovi, setSviSatovi] = useState([]);

    useEffect(() => {
        axios.get(`api/vrati-satove`).then(res => {
            setSviSatovi(res.data.sviSatovi);
        });
    }, []);


    return (
        <div className="wp-div">
            <div className="background-image">
                <h1 id="wtch">Galaxy Watches</h1>

                <Link to={"/novi-sat"}><button type="button" className="btn btn-light" id="addbn">ADD</button></Link>

                <div className="svisatovi-div">
                    {sviSatovi.map((sat) => {
                        return (
                            <div className="sat-div">
                                <Sat sat={sat} key={sat.id} />
                            </div>
                        )
                    })}
                </div>

            </div>
        </div>
    )
}

export default WatchesPage;
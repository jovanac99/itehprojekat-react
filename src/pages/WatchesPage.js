import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Sat from '../components/Sat';
import Nav from '../components/Nav';

function WatchesPage() {

    const [sviSatovi, setSviSatovi] = useState([]);
    const [search, setSearch] = useState();
    const [kolona, setKolona] = useState();
    const [sort, setSort] = useState();


    useEffect(() => {
        axios.get(`api/vrati-satove`).then(res => {
            setSviSatovi(res.data.sviSatovi);
        });
    }, []);

    function handleSearch(e) {
        setSearch(e.target.value);
    }

    function handleKolona(e) {
        setKolona(e.target.value);
    }

    function handleSort(e) {
        setSort(e.target.value);
    }


    function pretraziSatove() {

        const obj = {
            search: search
        }

        axios.post(`api/search-sat`, obj).then(res => {
            setSviSatovi(res.data.satovi);
        })
    }


    function sortirajSatove() {

        const obj = {
            kolona: kolona,
            sort: sort
        }

        axios.post(`api/sort-sat`, obj).then(res => {
            setSviSatovi(res.data.satovi);
        })
    }





    const dugme = <div className="mt-5">
        <Link to={"/novi-sat"}><button type="button" className="btn btn-light" id="addbn">ADD</button></Link>
    </div>


    return (
        <div className="wp-div">
            <div className="background-image">

                <Nav />

                <h1 id="wtch">Galaxy Watches</h1>


                <div className="ps-div">

                    <div className="s-div">
                        <input type={'text'} className="form-control mb-2" id='s-in' value={search} onChange={handleSearch} placeholder="Please enter search value..." />
                        <button type="button" onClick={pretraziSatove} className="btn btn-light" id="sg">Search</button>
                    </div>

                    <div className="p-div">
                        <select id="sort-in" className="form-select mb-3 text-center" value={kolona} onChange={handleKolona}>
                            <option>Please choose an item</option>
                            <option value={'brend'}>Brand</option>
                            <option value={'model'}>Model</option>
                            <option value={'cena'}>Price</option>
                        </select>
                        <select id="sort-in" className="form-select mb-3 text-center" value={sort} onChange={handleSort}>
                            <option>Please choose an item</option>
                            <option value={'asc'}>Ascending</option>
                            <option value={'desc'}>Descending</option>
                        </select>
                        <button type="button" onClick={sortirajSatove} className="btn btn-light" id="sortbt">Sort</button>
                    </div>
                </div>

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
import Nav from "../components/Nav";
import { useState } from 'react';
import axios from 'axios';


function FindPage() {

    const [brend, setBrend] = useState('');
    const [modeli, setModeli] = useState([]);

    function handleBrend(e) {
        setBrend(e.target.value);
    }



    const ispis = <div className="prikaz">
        {
            modeli.map((sat) => {
                return (
                    <div className="mod-div" >
                        <p className="text-center">{sat.familyName}</p>
                    </div>
                )
            })
        } </div>



    function findModelsforBrand() {

        const options = {
            method: 'GET',
            url: 'https://watch-database1.p.rapidapi.com/all-family-by/brandname/' + brend,
            headers: {
                'X-RapidAPI-Key': 'ab95897d02msh54a23c1c963f915p1bdb89jsn827599325fad',
                'X-RapidAPI-Host': 'watch-database1.p.rapidapi.com'
            }
        };

        axios.request(options).then(function (response) {
            setModeli(response.data);

        }).catch(function (error) {
            console.error(error);
        });

    }


    return (
        <div className="fp-div">
            <div className="background-image">

                <Nav />

                <h1 id="fnd">Please enter the brand</h1>
                <input type={'text'} className="form-control mb-3 text-center" id="fnd-in" value={brend} onChange={handleBrend} />
                <button type="button" onClick={findModelsforBrand} className="btn btn-light mb-4" id="fndbtn">FIND MODELS</button>

                {ispis}
            </div>
        </div>
    )
}

export default FindPage;
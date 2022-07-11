import { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import Nav from '../components/Nav';


function EditSatPage() {

    const [izmenaSat, setIzmenaSat] = useState({
        brend: '',
        model: '',
        cena: '',
        pol: '',
        narukvica: '',
        mehanizam: '',
        garancija: ''
    });

    const param = useParams();
    const [slika, setSlika] = useState([]);

    useEffect(() => {

        axios.get(`api/edit-sat/${param.satid}`).then(res => {

            setIzmenaSat({
                ...izmenaSat,
                brend: res.data.editSat.brend,
                model: res.data.editSat.model,
                cena: res.data.editSat.cena,
                pol: res.data.editSat.pol,
                narukvica: res.data.editSat.narukvica,
                mehanizam: res.data.editSat.mehanizam,
                garancija: res.data.editSat.garancija,

            });
        });



    }, []);


    function handleBrend(e) {
        setIzmenaSat({ ...izmenaSat, brend: e.target.value })
    }

    function handleModel(e) {
        setIzmenaSat({ ...izmenaSat, model: e.target.value })
    }

    function handleSlika(e) {
        setSlika({ slika: e.target.files[0] });
    }

    function handleCena(e) {
        setIzmenaSat({ ...izmenaSat, cena: e.target.value })
    }

    function handlePol(e) {
        setIzmenaSat({ ...izmenaSat, pol: e.target.value })
    }

    function handleNarukvica(e) {
        setIzmenaSat({ ...izmenaSat, narukvica: e.target.value })
    }

    function handleMehanizam(e) {
        setIzmenaSat({ ...izmenaSat, mehanizam: e.target.value })
    }

    function handleGarancija(e) {
        setIzmenaSat({ ...izmenaSat, garancija: e.target.value })
    }


    function submitForm(e) {
        e.preventDefault();

        const updateSat = new FormData();

        updateSat.append('brend', izmenaSat.brend);
        updateSat.append('model', izmenaSat.model);
        updateSat.append('slika', slika.slika);
        updateSat.append('cena', izmenaSat.cena);
        updateSat.append('pol', izmenaSat.pol);
        updateSat.append('narukvica', izmenaSat.narukvica);
        updateSat.append('mehanizam', izmenaSat.mehanizam);
        updateSat.append('garancija', izmenaSat.garancija);

        axios.post(`api/save-sat/${param.satid}`, updateSat).then(res => {

            if (res.data.Info == 'The watch has been updated successfully!') {
                Swal.fire({
                    icon: 'success',
                    title: 'Info',
                    text: res.data.Info
                })
            }
            else {
                console.log(res)
            }

        });
    }


    return (
        <div className="es-div">
            <div className="background-image">

                <Nav />

                <h1 id="edtw">Edit watch</h1>

                <form onSubmit={submitForm} className="novi-frm" >

                    <div className="form-group">
                        <label>Brand: </label>
                        <input type={'text'} className="form-control mb-3 text-center" id="ns-in" value={izmenaSat.brend} onChange={handleBrend} />
                    </div>
                    <div className="form-group">
                        <label>Model: </label>
                        <input type={'text'} className="form-control mb-3 text-center" id="ns-in" value={izmenaSat.model} onChange={handleModel} />
                    </div>
                    <div className="form-group">
                        <label>Image: </label>
                        <input type="file" id="ns-in" className="form-control mb-3" onChange={handleSlika} />
                    </div>
                    <div className="form-group">
                        <label>Price: </label>
                        <input type={'number'} id="ns-in" className="form-control mb-3 text-center" value={izmenaSat.cena} onChange={handleCena} />
                    </div>
                    <div className="form-group">
                        <label>Sex: </label>
                        <select id="ns-in" className="form-select mb-3 text-center" value={izmenaSat.pol} onChange={handlePol}>
                            <option>Please choose an item</option>
                            <option value={'muski'}>Male</option>
                            <option value={'zenski'}>Female</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Bracelet: </label>
                        <select id="ns-in" className="form-select mb-3 text-center" value={izmenaSat.narukvica} onChange={handleNarukvica}>
                            <option>Please choose an item</option>
                            <option value={'hirurskiCelik'}>Surgical steel</option>
                            <option value={'silikon'}>Silicone</option>
                            <option value={'koza'}>Leather</option>
                            <option value={'guma'}>Rubber</option>
                            <option value={'platno'}>Cloth</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Mechanism: </label>
                        <select id="ns-in" className="form-select mb-3 text-center" value={izmenaSat.mehanizam} onChange={handleMehanizam}>
                            <option>Please choose an item</option>
                            <option value={'kvarcni'}>Quartz</option>
                            <option value={'automatik'}>Automatic</option>
                            <option value={'solar'}>Solar</option>
                            <option value={'kinetik'}>Kinetic</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Warranty: </label>
                        <input type={'text'} id="ns-in" className="form-control mb-2  text-center" value={izmenaSat.garancija} onChange={handleGarancija} />
                    </div>


                    <button type="submit" className="btn btn-light" id="br">SAVE</button>

                </form>







            </div>
        </div>
    )
}

export default EditSatPage;
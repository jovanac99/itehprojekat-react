import { useState } from 'react';

function NoviSatPage() {

    const [sat, setSat] = useState({
        brend: '',
        model: '',
        cena: '',
        pol: '',
        narukvica: '',
        mehanizam: '',
        garancija: ''
    });

    const [slika, setSlika] = useState([]);


    function handleBrend(e) {
        setSat({ ...sat, brend: e.target.value })
    }

    function handleModel(e) {
        setSat({ ...sat, model: e.target.value })
    }

    function handleSlika(e) {
        setSlika({ slika: e.target.files[0] });
    }

    function handleCena(e) {
        setSat({ ...sat, cena: e.target.value })
    }

    function handlePol(e) {
        setSat({ ...sat, pol: e.target.value })
    }

    function handleNarukvica(e) {
        setSat({ ...sat, narukvica: e.target.value })
    }

    function handleMehanizam(e) {
        setSat({ ...sat, mehanizam: e.target.value })
    }

    function handleGarancija(e) {
        setSat({ ...sat, garancija: e.target.value })
    }


    function submitForm(e) {
        e.preventDefault();

    }


    return (
        <div className="nsp-div">
            <div className="background-image">
                <h1 id="ns">New watch</h1>


                <form onSubmit={submitForm} className="novi-frm">

                    <div className="form-group">
                        <label>Brand: </label>
                        <input type={'text'} className="form-control mb-3 text-center" id="ns-in" value={sat.brend} onChange={handleBrend} />
                    </div>
                    <div className="form-group">
                        <label>Model: </label>
                        <input type={'text'} className="form-control mb-3 text-center" id="ns-in" value={sat.model} onChange={handleModel} />
                    </div>
                    <div className="form-group">
                        <label>Image: </label>
                        <input type="file" id="ns-in" className="form-control mb-3" onChange={handleSlika} />
                    </div>
                    <div className="form-group">
                        <label>Price: </label>
                        <input type={'number'} id="ns-in" className="form-control mb-3 text-center" value={sat.cena} onChange={handleCena} />
                    </div>
                    <div className="form-group">
                        <label>Sex: </label>
                        <select id="ns-in" className="form-select mb-3 text-center" value={sat.pol} onChange={handlePol}>
                            <option>Please choose an item</option>
                            <option value={'muski'}>Male</option>
                            <option value={'zenski'}>Female</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Bracelet: </label>
                        <select id="ns-in" className="form-select mb-3 text-center" value={sat.narukvica} onChange={handleNarukvica}>
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
                        <select id="ns-in" className="form-select mb-3 text-center" value={sat.mehanizam} onChange={handleMehanizam}>
                            <option>Please choose an item</option>
                            <option value={'kvarcni'}>Quartz</option>
                            <option value={'automatik'}>Automatic</option>
                            <option value={'solar'}>Solar</option>
                            <option value={'kinetik'}>Kinetic</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Warranty: </label>
                        <input type={'text'} id="ns-in" className="form-control mb-2  text-center" value={sat.garancija} onChange={handleGarancija} />
                    </div>


                    <button type="submit" className="btn btn-light" id="br">ADD</button>

                </form>


            </div>
        </div>
    )
}

export default NoviSatPage;
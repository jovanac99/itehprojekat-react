import { useState } from 'react';

function RegisterPage() {

    const [korisnik, setKorisnik] = useState({
        name: '',
        username: '',
        password: '',
        email: ''
    });


    function handleName(e) {
        setKorisnik({ ...korisnik, name: e.target.value })
    }

    function handleUsername(e) {
        setKorisnik({ ...korisnik, username: e.target.value })
    }

    function handlePassword(e) {
        setKorisnik({ ...korisnik, password: e.target.value })
    }

    function handleEmail(e) {
        setKorisnik({ ...korisnik, email: e.target.value })
    }

    function submitForm(e) {
        e.preventDefault();


    }



    return (
        <div className="rp-div">
            <div className="backround-image">

                <h1 id="rgst">Register</h1>

                <form onSubmit={submitForm} className="rgt-frm">

                    <div className="form-group">
                        <label>Name: </label>
                        <input type={'text'} className="form-control mt-2 mb-2" id='frm' value={korisnik.name} onChange={handleName} />
                    </div>
                    <div className="form-group">
                        <label>Username: </label>
                        <input type={'text'} className="form-control mt-2 mb-2" id='frm' value={korisnik.username} onChange={handleUsername} />
                    </div>
                    <div className="form-group">
                        <label>Password: </label>
                        <input type={'password'} className="form-control mt-2 mb-2" id='frm' value={korisnik.password} onChange={handlePassword} />
                    </div>
                    <div className="form-group">
                        <label>Email: </label>
                        <input type={'email'} className="form-control mt-2 mb-2" id='frm' value={korisnik.email} onChange={handleEmail} />
                    </div>

                    <button type="submit" className="btn btn-light" id="br">Register</button>

                </form>
            </div>
        </div>
    )
}

export default RegisterPage;
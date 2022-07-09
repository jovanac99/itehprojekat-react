import { useState } from 'react';

function LoginPage() {

    const [korisnik, setKorisnik] = useState({
        username: '',
        password: '',
    });


    function handleUsername(e) {
        setKorisnik({ ...korisnik, username: e.target.value })
    }

    function handlePassword(e) {
        setKorisnik({ ...korisnik, password: e.target.value })
    }


    function submitForm(e) {
        e.preventDefault();

    }


    return (
        <div className="lp-div">
            <div className="backround-image">

                <h1 id="lgn">Login</h1>

                <form onSubmit={submitForm} className="lgt-frm">

                    <div className="form-group">
                        <label>Username: </label>
                        <input type={'text'} className="form-control mb-2" id='frm' value={korisnik.username} onChange={handleUsername} />
                    </div>
                    <div className="form-group">
                        <label>Password: </label>
                        <input type={'password'} className="form-control mb-2" id='frm' value={korisnik.password} onChange={handlePassword} />
                    </div>

                    <button type="submit" className="btn btn-light" id="lg">Login</button>

                </form>
            </div>
        </div>
    )
}

export default LoginPage;
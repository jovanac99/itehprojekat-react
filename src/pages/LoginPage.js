import { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

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

        axios.get('/sanctum/csrf-cookie').then(response => {
            axios.post(`api/login`, korisnik).then(res => {

                if (res.data.Info == 'Pokušajte ponovo!' || res.data.Info == 'Unesite username i password!') {
                    Swal.fire({
                        icon: 'error',
                        title: 'Info',
                        text: res.data.Info
                    })
                }
                else {
                    Swal.fire({
                        icon: 'success',
                        title: 'Info',
                        text: res.data.Info
                    })
                    localStorage.setItem('user', res.data.User.username);
                    localStorage.setItem('token', res.data.Token);
                    localStorage.setItem('type', res.data.User.type);
                }

            });
        });
    }


    return (
        <div className="lp-div">
            <div className="background-image">

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
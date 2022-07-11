import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';


function Nav() {

    const navigate = useNavigate();

    function logout() {
        axios.post(`api/logout`).then(res => {

            localStorage.removeItem('user');
            localStorage.removeItem('token');
            localStorage.removeItem('type');

            Swal.fire({
                icon: 'success',
                title: 'Info',
                text: res.data.Info
            })

            navigate('/login');
        });
    }

    return (
        <div className="nav-div">
            <nav>
                <Link to="/watches">Home</Link>
                <Link to="/find">Find</Link>
                <button className="btn btn-light btn-lg" onClick={logout} id="btnlgt">Log out</button>
            </nav>
        </div >
    )
}

export default Nav;
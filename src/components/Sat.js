import axios from 'axios';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';


function Sat(props) {

    const sat = props.sat;

    const dugmeDelete = <div>
        <button type="button" onClick={() => deleteSat(sat.id)} className="btn btn-light" id="delbtn">DELETE</button>
    </div >

    const dugmeEdit = <div>
        <Link to={`/edit-sat/${sat.id}`}><button className="btn btn-lg btn-light" id="edtbtn">EDIT</button></Link>
    </div >

    function deleteSat(ID) {
        axios.delete(`api/delete-sat/${ID}`).then(res => {

            Swal.fire({
                icon: 'success',
                title: 'Info',
                text: res.data.Info
            })
        });
    }


    return (
        <div className="sat-div">
            <img src={`http://localhost:8000/${sat.slika}`} width="300px" height="300px" />
            <h3 id="model" className="mt-2">{sat.brend + " " + sat.model}</h3>
            <h1 id="cena" className="mt-2">{sat.cena}.00 EUR</h1>
            {localStorage.getItem('type') === 'admin' ? dugmeEdit : ""}
            {localStorage.getItem('type') === 'admin' ? dugmeDelete : ""}
        </div>
    )
}

export default Sat;

function Sat(props) {

    const sat = props.sat;

    return (
        <div className="sat-div">
            <img src={`http://localhost:8000/${sat.slika}`} width="300px" height="300px" />
            <h3 id="model" className="mt-2">{sat.brend + " " + sat.model}</h3>
            <h1 id="cena" className="mt-2">{sat.cena}.00 EUR</h1>
        </div>
    )
}

export default Sat;
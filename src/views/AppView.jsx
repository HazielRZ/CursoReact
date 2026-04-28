import {Link} from 'react-router-dom';
import SaludoComponent from "../components/SaludoComponent.jsx";


export default function AppView() {
    const parametro = 123
    return (
        <>
            <SaludoComponent nombre="hAZIEL" />
            <SaludoComponent apellido="Ruiz" />
            <Link to="/main">
                Ir al main
            </Link>
            <Link to={`/parametro/${parametro}`} className="parametro">
                Ir a parametro
            </Link>

        </>
    );
}
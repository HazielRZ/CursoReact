import {Link} from 'react-router-dom';
import SaludoComponent from "../components/SaludoComponent.jsx";
import CardChild from "../components/CardChild.jsx";
import UserComponent from "../components/UserComponent.jsx";


export default function AppView() {
    const parametro = 123
    const user ={
        nombre: "Haziel",
        edad: "23"
    }
    return (
        <>
            <h1 className='t1'>Hola</h1>
            <SaludoComponent nombre="Haziel" />
            <SaludoComponent apellido="Ruiz" />
            <CardChild title="hola"></CardChild>
            <br/>
            <UserComponent {...user} />
            <Link to="/main">
                Ir al main
            </Link>
            <div className='logo'>             </div>
            <Link to={`/parametro/${parametro}`} className="parametro">
                Ir a parametro
            </Link>

        </>
    );
}
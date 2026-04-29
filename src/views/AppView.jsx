import { Link } from 'react-router-dom';
import SaludoComponent from "../components/SaludoComponent.jsx";
import CardChild from "../components/CardChild.jsx";
import UserComponent from "../components/UserComponent.jsx";
import ButtonActionComponent from "../components/ButtonActionComponent.jsx";
import ListComponent from "../components/ListComponent.jsx";
import { useState } from "react";
import ProductsComponent from "../components/ProductsComponent.jsx";
import ClickerComponents from "../components/ClickerComponents.jsx";

export default function AppView() {
    const parametro = 123;
    const user = {
        nombre: "Haziel",
        edad: "23"
    };
    const [usuario, setUsuario] = useState("usuario");

    const handleClick = () => {
        console.log("click");
        setUsuario("usuario: Haz");
    };
    const handleSelect = (elemento) => {
        console.log("elemento", elemento);
    };

    const [count, setCount] = useState(0);
    const [isTrue, setIsTrue] = useState(true);


    const [products, setProducts] = useState([
        { id: 1, name: "laptop", precio: 250 },
        { id: 2, name: "laptop2", precio: 2500 }
    ]);


    const [powerups, setPowerups] = useState([
        { id: 1, name: "x10", precio: 250 },
        { id: 2, name: "+1000", precio: 25 },
        { id: 2, name: "Click extra", precio: 2500 },
    ]);
    return (
        <>
            <h1 className='t1'>Hola</h1>
            <h1>{usuario}</h1>


            {products.map((product) => (
                <ProductsComponent
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    precio={product.precio}
                />
            ))}
            <ProductsComponent name={"Tennis"} precio={1500} id={3} />
            {powerups.map ((powerup) => (
                <ClickerComponents
                    id={powerup.id}
                    name={powerup.name}
                    precio={powerup.precio}
                />
            ))}

            <div className='m-2'>
                <h2>Count: {count}</h2>
                <button className="button1 m-2" onClick={() => {
                    setCount(count + 1);
                    if (count === 100) {
                        setCount(0);
                    }
                }}>Increment
                </button>
                <button className="button1 m-2" onClick={() => setCount(0)}>Reset</button>
            </div >

            {
                isTrue ? (<h1>Es REal</h1>) : (<h1>Es FALSO</h1>)
            }

            <button className="button1 m-2" onClick={() => setIsTrue(!isTrue)}>Mentiras!</button>
            <SaludoComponent nombre="Haziel" />
            <SaludoComponent apellido="Ruiz" />
            <CardChild title="hola"></CardChild>
            <br />
            <UserComponent {...user} />
            <ButtonActionComponent onClick={handleClick} />
            <ListComponent onSelect={handleSelect} />

            <Link to="/main">
                Ir al main
            </Link>
            <div className='logo'></div>
            <Link to={`/parametro/${parametro}`} className="parametro">
                Ir a parametro
            </Link>
        </>
    );
}
import {Link} from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import {useEffect} from "react";
import {getProducts} from "../services/products/productService.js";

export default function ProductsView() {
    useEffect(() => {
        getProducts().then((products => {
            console.log('Products view loaded', products);
        }))
    }, [])

    return (
        <>
            <h1 className="text-5xl font-bold">Administra tus Productos</h1>

            <Link
                to={'/products/create'}
                className='bg-cyan-500 hover:bg-cyan-600 px-5 py-2 rounded text-white font-bold my-10'
            >
                Crear Producto
            </Link>

            <div className='grid grid-cols-3 gap-4 pt-10'>
                <ProductCard/>
            </div>
        </>
    )
}
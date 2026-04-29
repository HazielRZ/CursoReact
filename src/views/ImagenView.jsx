import React from 'react'
import {Link} from 'react-router-dom'

export default function ImagenView() {
    return (
        <>
            <h1 className='text-5xl text-center'>ImagenView</h1>
            <Link to="/main">
                Ir a la página principal
            </Link>
            <Link to="/otra">
                Ir a la otra página
            </Link>
            <img src="https://i.pinimg.com/736x/4d/9e/b3/4d9eb3a96056835a001ee6c02b7eb1aa.jpg" alt="Logo de React"
                 className='w-1/2'/>

        </>
    )
}

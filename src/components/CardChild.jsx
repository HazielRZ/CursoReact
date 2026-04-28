export  default function CardChild({children, title}) {
    return(
        <div className="card">
            <div className='bg-green-100'>
                <h3>{title}</h3>
                {children}
                <button className='button1'>Soy un boton</button>
            </div>
        </div>
    )
}
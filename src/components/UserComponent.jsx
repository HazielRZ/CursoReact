export default function UserComponent({nombre, edad}) {
    return (
        <div className='flex flex-col'>
            <p>{nombre}</p>
            <p>{edad}</p>
        </div>
    )
}
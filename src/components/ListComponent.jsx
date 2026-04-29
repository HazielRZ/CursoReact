export default function ListComponent({onSelect}) {
    return (
        <>
            <ul className='flex flex-col items-center h-20'>
                <li className='list'>
                    <button className="button1 text-slate-500 my-2" onClick={() => onSelect}>Selecciona 1</button>
                </li>
                <li className='list'>
                    <button className="button1 text-slate-500 my-2" onClick={() => onSelect}>Selecciona 2</button>
                </li>
                <li className='list'>
                    <button className="button1 text-slate-500 my-2" onClick={() => onSelect}>Selecciona 3</button>
                </li>
            </ul>
        </>
    )
}
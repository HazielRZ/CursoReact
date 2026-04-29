export default function ClickerComponents(props) {
    return (
        <div className='flex flex-col bg-blue-300  '>
            <h1>{props.id}</h1>
            <h1>{props.name}</h1>
            <h1>{props.precio}</h1>

        </div>
    )
}
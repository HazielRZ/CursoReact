// src/views/ParamView.jsx
import {useParams} from "react-router-dom";

export default function ParamView() {
    const {id} = useParams();

    return (
        <div className='text-5xl font-black'>{id}</div>
    )
}
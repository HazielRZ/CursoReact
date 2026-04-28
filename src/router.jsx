// src/router.jsx
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import AppLayout from './layouts/AppLayout'
import ParamView from "./views/ParamView.jsx";
import AppView from "./views/AppView.jsx";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AppLayout/>}>
                    <Route path='/' element={<AppView />}/>
                    <Route path='/otro' element={<div>Otra Vista Placeholder</div>}/>
                    <Route path='/parametro/:id' element={<ParamView/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
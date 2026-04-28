import {BrowserRouter, Route, Routes} from 'react-router-dom'
import AppLayout from './layouts/AppLayout'
import ParamView from "./views/ParamView.jsx";


export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AppLayout/>}>
                    <Route path='/main'></Route>
                    <Route path='/otro'></Route>
                    <Route path='/parametro/:id' element={<ParamView/>}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
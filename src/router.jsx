// src/router.jsx
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import AppLayout from './layouts/AppLayout'
import ParamView from "./views/ParamView.jsx";
import AppView from "./views/AppView.jsx";
import MainView from "./views/MainView.jsx";
import ProductsView from "./views/ProductsView.jsx";
import CreateProductView from "./views/CreateProductView.jsx";
import ProductLayout from "./layouts/ProductLayout.jsx";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AppLayout/>}>
                    <Route path='/app' element={<AppView/>}/>
                    <Route path='/otro' element={<div>Otra Vista </div>}/>
                    <Route path='/parametro/:id' element={<ParamView/>}/>
                </Route>

                <Route element={<ProductLayout/>}>
                    <Route path='/' element={<MainView/>} index/>
                    <Route path='/products' element={<ProductsView/>}/>
                    <Route path='/products/create' element={<CreateProductView/>}/>

                </Route>
            </Routes>
        </BrowserRouter>
    )
}
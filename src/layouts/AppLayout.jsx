import {Link, Outlet} from "react-router-dom";

export default function AppLayout() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-300 font-sans flex flex-col selection:bg-cyan-500/30">

            {/* Cabecera / Navegación Superior */}
            <header className="sticky top-0 z-50 w-full border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md">
                <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

                    {/* Identificador de Marca */}
                    <div className="flex items-center gap-4">
                        <Link to="/" className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
                            {/* Representación de logo genérico */}
                            <div className="h-5 w-5 rounded-sm bg-cyan-400 rotate-45"></div>
                            Proyecto
                        </Link>
                        <span
                            className="hidden rounded-full bg-slate-800/50 border border-slate-700 px-2.5 py-0.5 text-[10px] font-semibold text-slate-300 sm:block">
                            v1.0
                        </span>
                    </div>

                </div>
            </header>

            {/* Contenedor Principal de Vistas (Outlet) */}
            <main className="flex-1 w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 md:py-12">
                <Outlet/>
            </main>

            {/* Pie de Página */}
            <footer className="border-t border-slate-800/80 bg-slate-950">
                <div
                    className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
                    <p>© {new Date().getFullYear()} Footer. Reservados todos los derechos.</p>

                    <div className="flex gap-6">
                        <Link to="/" className="hover:text-white transition-colors duration-200">
                            Main
                        </Link>
                        <Link to="/otro" className="hover:text-white transition-colors duration-200">
                            Otro
                        </Link>
                    </div>
                </div>
            </footer>

        </div>
    );
}
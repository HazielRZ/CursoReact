import {Link, Outlet, useLocation} from "react-router-dom";

export default function ProductLayout() {
    const location = useLocation();

    const linkStyles = (path) =>
        `flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
            location.pathname === path
                ? "bg-cyan-950/40 text-cyan-400 border border-cyan-800/50 shadow-inner"
                : "text-slate-400 hover:bg-slate-800 hover:text-cyan-300"
        }`;

    return (
        <div className="min-h-screen bg-slate-950 flex">

            {/* Sidebar */}
            <aside className="w-64 bg-slate-900 border-r border-slate-800 shadow-xl p-6">

                <h1 className="text-xl font-bold text-cyan-500 mb-8 tracking-wide">
                    Mi App
                </h1>

                <nav className="flex flex-col gap-2">
                    <Link to="/" className={linkStyles("/")}>
                        Inicio
                    </Link>

                    <Link to="/products" className={linkStyles("/products")}>
                        Productos
                    </Link>
                </nav>

            </aside>

            {/* Contenido */}
            <main className="flex-1 p-8">

                {/* Header interno */}
                <div className="mb-6">
                    <h2 className="text-2xl font-semibold text-slate-100">
                        Panel
                    </h2>
                    <p className="text-slate-400 text-sm">
                        Gestiona tu información fácilmente
                    </p>
                </div>

                {/* Contenedor principal */}
                <div
                    className="bg-slate-900 rounded-2xl shadow-lg border border-slate-800 p-10 space-y-5 text-slate-300">
                    <Outlet/>
                </div>

            </main>

        </div>
    );
}
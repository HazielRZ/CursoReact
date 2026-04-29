const FormProduct = () => {

    return (
        <form className="space-y-4 bg-white shadow p-5 max-w-xl mt-10 mx-auto">
            <div>
                <label htmlFor="" className="block font-semibold">
                    Nombre Producto
                </label>

                <input
                    type="text"
                    className="border border-gray-200 w-full py-2 rounded-lg"
                    placeholder="Ingresa el nombre del producto"
                />
            </div>

            <div>
                <label htmlFor="" className="block font-semibold">
                    Descripción Producto
                </label>

                <input
                    type="text"
                    className="border border-gray-200 w-full py-2 rounded-lg"
                    placeholder="Ingresa la descripción del producto"
                />
            </div>

            <div>
                <label htmlFor="" className="block font-semibold">
                    Categoría Producto
                </label>

                <input
                    type="text"
                    className="border border-gray-200 w-full py-2 rounded-lg"
                    placeholder="Ingresa la categoría del producto"
                />
            </div>

            <div>
                <label htmlFor="" className="block font-semibold">
                    Precio Producto
                </label>

                <input
                    type="text"
                    className="border border-gray-200 w-full py-2 rounded-lg"
                    placeholder="Ingresa el p recio del producto"
                />
            </div>

            <input
                type="submit"
                className="bg-indigo-500 w-full py-2 text-white rounded hover:bg-indigo-600 hover:cursor-pointer font-semibold"
                value={'Agregar Producto'}
            />

        </form>
    );
};

export default FormProduct;
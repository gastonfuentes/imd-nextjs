'use client';

interface FiltroAvanzadoProps {
    operacion: string;
    setOperacion: (value: string) => void;
    ciudad: string;
    setCiudad: (value: string) => void;
    tipoPropiedad: string;
    setTipoPropiedad: (value: string) => void;
    precioMin: string;
    setPrecioMin: (value: string) => void;
    precioMax: string;
    setPrecioMax: (value: string) => void;
    dormitorios: string;
    setDormitorios: (value: string) => void;
    banos: string;
    setBanos: (value: string) => void;
    quincho: string;
    setQuincho: (value: string) => void;
}

export default function FiltroAvanzado({
    operacion,
    setOperacion,
    ciudad,
    setCiudad,
    tipoPropiedad,
    setTipoPropiedad,
    precioMin,
    setPrecioMin,
    precioMax,
    setPrecioMax,
    dormitorios,
    setDormitorios,
    banos,
    setBanos,
    quincho,
    setQuincho,
}: FiltroAvanzadoProps) {
    return (
        <div className="flex flex-wrap gap-4 bg-gray-100 p-4 rounded-md shadow">
            <select
                value={operacion}
                onChange={(e) => setOperacion(e.target.value)}
                className="border p-2 rounded"
            >
                <option value="">Operación</option>
                <option value="alquilar">Alquilar</option>
                <option value="comprar">Comprar</option>
            </select>
            <select
                value={ciudad}
                onChange={(e) => setCiudad(e.target.value)}
                className="border p-2 rounded"
            >
                <option value="">Ciudad</option>
                <option value="ciudad1">Ciudad 1</option>
                <option value="ciudad2">Ciudad 2</option>
                <option value="ciudad3">Ciudad 3</option>
            </select>
            <select
                value={tipoPropiedad}
                onChange={(e) => setTipoPropiedad(e.target.value)}
                className="border p-2 rounded"
            >
                <option value="">Tipo de Propiedad</option>
                <option value="casa">Casa</option>
                <option value="departamento">Departamento</option>
                <option value="terreno">Terreno</option>
            </select>
            <input
                type="number"
                placeholder="Precio Mínimo"
                value={precioMin}
                onChange={(e) => setPrecioMin(e.target.value)}
                className="border p-2 rounded"
            />
            <input
                type="number"
                placeholder="Precio Máximo"
                value={precioMax}
                onChange={(e) => setPrecioMax(e.target.value)}
                className="border p-2 rounded"
            />
            <input
                type="number"
                placeholder="Dormitorios"
                value={dormitorios}
                onChange={(e) => setDormitorios(e.target.value)}
                className="border p-2 rounded"
            />
            <input
                type="number"
                placeholder="Baños"
                value={banos}
                onChange={(e) => setBanos(e.target.value)}
                className="border p-2 rounded"
            />
            <select
                value={quincho}
                onChange={(e) => setQuincho(e.target.value)}
                className="border p-2 rounded"
            >
                <option value="">¿Quincho?</option>
                <option value="true">Sí</option>
                <option value="false">No</option>
            </select>
        </div>
    );
}
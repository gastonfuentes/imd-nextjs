import { SearchImd } from "../SearchImd";

export function Banner() {
    return (
        <div className="container relative mx-auto">
            <div className="pt-20 md:pt-0 min-h-[80vh] bg-[url('/banner.jpg')] bg-cover bg-no-repeat bg-center rounded-3xl relative flex flex-col items-center md:justify-center">
                <div className="max-w-3xl text-center text-white">
                    <h2 className="text-5xl font-semibold">Descubre tu vivienda ideal</h2>
                    <p className="mt-2 text-xl md:mt-8"> descripcion de la web dadadad contamos con los mejores profesionales para ayudarte</p>
                </div>
                <SearchImd />
            </div>
        </div>
    )
}
import { SearchImd } from "../SearchImd";

export function Banner() {
    return (
        /* <div className="container relative mx-auto">
            <div className="pt-20 md:pt-0 min-h-[80vh] bg-[url('/banner.jpg')] bg-cover bg-no-repeat bg-center rounded-3xl relative flex flex-col items-center md:justify-center">
                <div className="max-w-3xl text-center text-white">
                    <h2 className="text-5xl font-semibold">Descubre tu vivienda ideal</h2>
                    <p className="mt-2 text-xl md:mt-8"> descripcion de la web dadadad contamos con los mejores profesionales para ayudarte</p>
                </div>
                <SearchImd />
            </div>
        </div> */

        < section className="relative" >
            {/* Hero Background */}
            < div className="absolute inset-0 bg-black/60 z-10" />
            <div
                className="h-[600px] bg-cover bg-center"
                style={{
                    backgroundImage: "url('/banner.jpg')",
                }}
            />

            {/* Hero Content */}
            <div className="absolute inset-0 z-20 flex items-center justify-center">
                <div className="container px-4 mx-auto">
                    <div className="max-w-3xl mx-auto text-center mb-8">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Encuentra tu hogar ideal</h1>
                        <p className="text-xl text-white/90 mb-8">
                            Las mejores propiedades seleccionadas para ti en las mejores ubicaciones
                        </p>
                    </div>

                    {/* Search Filters */}

                    <SearchImd />
                </div>
            </div>
        </section >
    )
}
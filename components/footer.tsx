export function Footer() {
    return (
        <footer className="bg-(--text-primary) py-10 text-white">
            <div className="mx-auto grid max-w-6xl gap-8 px-5 md:px-6 lg:grid-cols-3 lg:px-8">
                <div>
                    <p className="font-display text-2xl font-bold uppercase">
                        La Esquina
                    </p>

                    <p className="mt-3 max-w-sm leading-6 text-white/70">
                        Comida casera lista para retirar o pedir por delivery.
                    </p>
                </div>

                <nav className="flex flex-col gap-3">
                    <a href="#menu" className="w-fit text-white/80 hover:text-white">
                        Menú
                    </a>

                    <a
                        href="#como-pedir"
                        className="w-fit text-white/80 hover:text-white"
                    >
                        Cómo pedir
                    </a>

                    <a
                        href="#ubicacion"
                        className="w-fit text-white/80 hover:text-white"
                    >
                        Ubicación
                    </a>
                </nav>

                <div>
                    <p className="font-semibold">Contacto</p>

                    <p className="mt-3 text-white/70">
                        WhatsApp
                    </p>

                    <p className="mt-6 text-sm text-white/60">
                        Sitio demostrativo · La Esquina es un comercio ficticio.
                    </p>
                </div>
            </div>
        </footer>
    );
}
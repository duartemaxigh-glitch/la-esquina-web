import { SectionHeader } from "./ui/section-header";
import { Reveal } from "./ui/reveal";

export function LocationSection() {
    return (
        <section id="ubicacion" className="bg-(--surface) py-16 lg:py-24">
            <div className="mx-auto max-w-6xl px-5 md:px-6 lg:px-8">
                <Reveal>
                    <div className="grid gap-8 lg:grid-cols-2">
                        <SectionHeader
                            eyebrow="UBICACIÓN"
                            title="Zona Centro"
                            description="Clorinda, Formosa"
                        />
                        <SectionHeader
                            eyebrow="HORARIOS"
                            title="Lunes a Sábados"
                            description="11:30 - 15:00 · 19:30 - 22:30"
                        />
                    </div>
                </Reveal>
                
            </div>
        </section>
    )
}
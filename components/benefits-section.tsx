import { InfoItem } from "./ui/info-item";
import { SectionHeader } from "./ui/section-header";
import { Clock3, Truck, Utensils } from "lucide-react";
import { Reveal } from "./ui/reveal";

export function BenefitsSection() {
    return (
        <section id="beneficios" className="py-16 lg:py-24">
            <div className="mx-auto max-w-6xl px-5 md:px-6 lg:px-8">
                <Reveal>
                    <SectionHeader
                        eyebrow="¿Por qué La Esquina?"
                        title="Razones por las que elegirnos"
                    />
                    <div className="mt-10 grid gap-8 lg:grid-cols-3">
                        <InfoItem
                        title="Preparado todos los días"
                        value="Cocinamos cada jornada para que recibas comida recién hecha."
                        icon={<Utensils size={24} aria-hidden="true" />}
                        />

                        <InfoItem
                        title="Pedí antes y retiralo listo"
                        value="Escribinos por WhatsApp y coordiná el horario de retiro."
                        icon={<Clock3 size={24} aria-hidden="true" />}
                        />

                        <InfoItem
                        title="Delivery en la zona"
                        value="Llevamos tu pedido al centro y alrededores."
                        icon={<Truck size={24} aria-hidden="true" />}
                        />
                    </div>
                </Reveal>
            </div>
        </section>
    )
}
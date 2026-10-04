import { SectionHeader } from "./ui/section-header";
import { InfoItem } from "./ui/info-item";
import { ActionLink } from "./ui/action-link";
import {
    ShoppingBag,
    Truck,
    MessageCircle
} from "lucide-react";
import { Reveal } from "./ui/reveal";

export function DeliverySection() {
    return (
        <section
            id="como-pedir"
            className="bg-(--text-primary) py-16 text-white lg:py-24"
        >
            <Reveal>
                <div
                    className="
                        mx-auto grid max-w-6xl gap-10 px-5
                        md:px-6
                        lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8
                    "
                >
                    <div>
                        <SectionHeader
                            eyebrow="¿DELIVERY O RETIRO?"
                            title="Elegí cómo recibir tu pedido"
                        />

                        <ActionLink href="#" className="mt-8 w-fit">
                            <MessageCircle size={19} aria-hidden="true" />
                            Pedir por WhatsApp
                        </ActionLink>
                    </div>

                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-1">
                        <InfoItem
                            title="Delivery"
                            value="Centro y alrededores"
                            icon={<Truck size={24} aria-hidden="true" />}
                            tone="inverse"
                        />

                        <InfoItem
                        title="Retiro"
                            value="Pedí antes y pasá a buscarlo"
                            icon={<ShoppingBag size={24} aria-hidden="true" />}
                            tone="inverse"
                        />
                    </div>
                </div>
            </Reveal>
        </section>
    );
}
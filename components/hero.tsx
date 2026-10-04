import Image from "next/image";
import { ActionLink } from "@/components/ui/action-link";
import { MessageCircle } from "lucide-react";
import { HeroContent } from "./hero-content";

export function Hero() {
    return (
        <section className="relative isolate min-h-140 overflow-hidden sm:min-h-155 lg:min-h-170">
            <Image
                src="/images/hero-milanesa.jpg"
                alt=""
                fill
                priority
                sizes="100vw"
                className="object-cover object-[68%_center] lg:object-[60%_center]"
            />

            {/* Overlay mobile */}
            <div className="absolute inset-0 bg-[rgba(43,29,23,0.58)] lg:hidden" />

            {/* Overlay desktop */}
            <div
                className="absolute inset-0 hidden lg:block"
                style={{
                    background:
                        "linear-gradient(90deg, rgba(43,29,23,.88) 0%, rgba(43,29,23,.62) 42%, rgba(43,29,23,.18) 100%)",
                }}
            />

            <div className="relative mx-auto flex min-h-140 max-w-6xl items-end px-5 py-14 sm:min-h-155 md:px-6 lg:min-h-170 lg:items-center lg:px-8 lg:py-20">
                <HeroContent>
                    <div className="max-w-xl text-white">
                        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.06em]">
                            Rotisería · Clorinda
                        </p>

                        <h1 className="font-display text-5xl font-bold leading-[0.95] lg:text-7xl">
                            Comida casera lista para disfrutar
                        </h1>

                        <p className="mt-6 max-w-lg text-lg leading-7 text-white/85 lg:text-xl">
                            Milanesas, pollos, empanadas y platos preparados
                            todos los días.
                        </p>

                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                            <ActionLink href="#">
                                <MessageCircle size={19} aria-hidden="true" />
                                Pedir por WhatsApp
                            </ActionLink>

                            <ActionLink href="#menu" variant="inverse">
                                Ver menú
                            </ActionLink>
                        </div>
                    </div>
                </HeroContent>
            </div>
        </section>
    );
}
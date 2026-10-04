"use client";

import { useState } from "react";
import { ActionLink } from "./ui/action-link";
import { MessageCircle } from "lucide-react";
import {
    AnimatePresence,
    motion,
} from "motion/react";
import { Menu, X } from "lucide-react";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="border-b border-(--border)">
            <div className="mx-auto flex min-h-18 max-w-6xl items-center justify-between px-5 md:px-6 lg:px-8">
                <a
                    href="#"
                    className="font-display text-2xl font-bold uppercase"
                >
                    La Esquina
                </a>

                <nav className="hidden items-center gap-8 lg:flex">
                    <a href="#menu" className="font-semibold">
                        Menú
                    </a>

                    <a href="#como-pedir" className="font-semibold">
                        Cómo pedir
                    </a>

                    <a href="#ubicacion" className="font-semibold">
                        Ubicación
                    </a>

                    <ActionLink href="#">
                        <MessageCircle size={19} aria-hidden="true" />
                        Pedir por WhatsApp
                    </ActionLink>
                </nav>

                <button
                    type="button"
                    className="flex min-h-11 min-w-11 items-center justify-center lg:hidden"
                    aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
                    aria-expanded={isOpen}
                    onClick={() => setIsOpen((current) => !current)}
                >
                    {isOpen ? (
                    <X size={24} aria-hidden="true" />
                    ) : (
                    <Menu size={24} aria-hidden="true" />
                    )}
                </button>
            </div>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.nav
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden border-t border-(--border) lg:hidden"
                    >
                    <div className="mx-auto flex max-w-6xl flex-col gap-5 px-5 py-6">
                        <a href="#menu">Menú</a>
                        <a href="#como-pedir">Cómo pedir</a>
                        <a href="#ubicacion">Ubicación</a>

                        <ActionLink href="#" className="mt-2 w-full">
                        Pedir por WhatsApp
                        </ActionLink>
                    </div>
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    );
}
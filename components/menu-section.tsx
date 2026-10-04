"use client";

import { useState } from "react";
import { CategoryChip } from "./ui/category-chip";
import { MenuItem } from "./menu-item";
import { SectionHeader } from "./ui/section-header";
import { motion } from "motion/react";
import { Reveal } from "./ui/reveal";

const menu = {
    Milanesas: [
        {
            name: "Milanesa simple",
            description: "Con guarnición a elección.",
            price: "$10.000",
        },
        {
            name: "Milanesa napolitana",
            description: "Salsa, jamón, muzzarella y guarnición.",
            price: "$12.500",
        },
        {
            name: "Milanesa a caballo",
            description: "Con huevos fritos y guarnición.",
            price: "$12.000",
        },
    ],

    Pollos: [
        {
            name: "Pollo asado",
            description: "Dorado y jugoso.",
            price: "$14.000",
        },
        {
            name: "1/2 pollo con guarnición",
            description: "Con guarnición a elección.",
            price: "$8.500",
        },
    ],

    Empanadas: [
        {
            name: "Jamón y muzza",
            description: "Fritas.",
            price: "$1.200 c/u",
        },
        {
            name: "Carne",
            description: "Fritas.",
            price: "$1.200 c/u",
        },
        {
            name: "Pollo",
            description: "Fritas.",
            price: "$1.200 c/u",
        },
    ],
};

type Category = keyof typeof menu;

export function MenuSection() {
    const [activeCategory, setActiveCategory] =
        useState<Category>("Milanesas");
    const items = menu[activeCategory];
    const isShortCategory = items.length < 4;

    const categories = Object.keys(menu) as Category[];

    return (
        <section
            id="menu"
            className="bg-(--surface) py-16 lg:py-24"
        >
            <div className="mx-auto max-w-6xl px-5 md:px-6 lg:px-8">
                <Reveal>
                    <SectionHeader
                        eyebrow="Nuestro menú"
                        title="Elegí tu favorito"
                        description="Explorá nuestras opciones y encontrá qué pedir hoy."
                    />

                    <div
                        className="
                            mt-8 flex gap-3 overflow-x-auto
                            pb-2 md:flex-wrap md:overflow-visible
                        "
                    >
                        {categories.map((category) => (
                            <CategoryChip
                                key={category}
                                label={category}
                                selected={activeCategory === category}
                                onClick={() => setActiveCategory(category)}
                            />
                        ))}
                    </div>

                    <motion.div
                        key={activeCategory}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.18 }}
                        className={
                            isShortCategory
                            ? "mt-8 grid max-w-3xl"
                            : "mt-8 grid lg:grid-cols-2 lg:gap-x-12"
                    }
                    >
                    {items.map((item) => (
                        <MenuItem key={item.name} {...item} />
                    ))}
                    </motion.div>
                </Reveal>
            </div>
        </section>
    );
}
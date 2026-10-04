import { ProductCard } from "./product-card";
import { SectionHeader } from "./ui/section-header";
import { Reveal } from "./ui/reveal";
const featuredProducts = [
  {
    name: "Milanesa con guarnición",
    description: "Milanesa dorada con papas fritas.",
    price: "$12.000",
    image: "/images/milanesa.jpg",
  },
  {
    name: "Empanadas de jamón y muzza",
    description: "Fritas, crocantes y bien rellenas.",
    price: "$1.200 c/u",
    image: "/images/empanadas.jpg",
  },
  {
    name: "Pollo asado",
    description: "Dorado y jugoso, ideal para compartir.",
    price: "$14.000",
    image: "/images/pollo.jpg",
  },
];

export function FeaturedProducts() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-6 lg:px-8">
        <Reveal>
          <SectionHeader
            eyebrow="Los favoritos"
            title="Los más pedidos"
            description="Algunas de las opciones que más eligen nuestros clientes."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.name}
                {...product}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
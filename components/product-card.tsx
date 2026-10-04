import Image from "next/image";



type ProductCardProps = {
    name: string;
    description?: string;
    price: string;
    image: string;
};

export function ProductCard({
    name,
    description,
    price,
    image,
}: ProductCardProps) {
    return (
        <article className="overflow-hidden rounded-lg bg-(--surface)">
            <div className="relative aspect-4/3">
                <Image
                    src={image}
                    alt={name}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                />
            </div>

            <div className="p-5 lg:p-6">
                <h3 className="text-[22px] font-semibold leading-6">
                    {name}
                </h3>

                {description && (
                    <p className="mt-2 leading-6 text-(--text-secondary)">
                        {description}
                    </p>
                )}

                <p className="mt-4 text-lg font-bold">
                    {price}
                </p>
            </div>
        </article>
    );
}
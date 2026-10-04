type MenuItemProps = {
    name: string;
    description?: string;
    price: string;
};

export function MenuItem({
    name,
    description,
    price,
}: MenuItemProps) {
    return (
        <article className="border-b border-(--border) py-5">
            <div className="flex items-start justify-between gap-6">
                <h3 className="text-lg font-semibold leading-6">
                    {name}
                </h3>

                <p className="shrink-0 text-lg font-bold">
                    {price}
                </p>
            </div>

            {description && (
                <p className="mt-1 max-w-xl leading-6 text-(--text-secondary)">
                    {description}
                </p>
            )}
        </article>
    );
}
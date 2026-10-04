type SectionHeaderProps = {
    eyebrow?: string;
    title: string;
    description?: string;
};

export function SectionHeader({
    eyebrow,
    title,
    description,
}: SectionHeaderProps) {
    return (
        <div className="max-w-2xl">
            {eyebrow && (
                <p className="mb-2 text-sm font-semibold uppercase tracking-[0.06em] text-(--primary)">
                    {eyebrow}
                </p>
            )}

            <h2 className="font-display text-4xl font-bold leading-none lg:text-5xl">
                {title}
            </h2>

            {description && (
                <p className="mt-4 text-base leading-6 text-(--text-secondary) lg:text-lg">
                    {description}
                </p>
            )}
        </div>
    );
}
type CategoryChipProps = {
    label: string;
    selected?: boolean;
    onClick: () => void;
};

export function CategoryChip({
    label,
    selected = false,
    onClick,
}: CategoryChipProps) {
    return (
        <button
            type="button"
            onClick={onClick}
            aria-pressed={selected}
            className={`
                min-h-11 shrink-0 rounded-full border px-5
                text-sm font-semibold transition-colors
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-(--primary)
                focus-visible:ring-offset-2

                ${selected
                        ? `
                    border-(--primary)
                    bg-(--primary)
                    text-white
                `
                        : `
                    border-(--border)
                    bg-(--surface)
                    text-(--text-primary)
                    hover:border-(--primary)
                `
                }
            `}
        >
            {label}
        </button>
    );
}
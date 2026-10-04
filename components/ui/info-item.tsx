type InfoItemProps = {
    title: string;
    value: React.ReactNode;
    icon?: React.ReactNode;
    tone?: "default" | "inverse";
};

export function InfoItem({
    title,
    value,
    icon,
    tone = "default",
}: InfoItemProps) {
    const inverse = tone === "inverse";

    return (
        <div className="flex gap-4">
            {icon && (
                <div className="mt-1 shrink-0">
                    {icon}
                </div>
            )}

            <div>
                <h3
                    className={
                        inverse
                            ? "font-semibold text-white"
                            : "font-semibold text-(--text-primary)"
                    }
                >
                    {title}
                </h3>

                <div
                    className={
                        inverse
                            ? "mt-1 leading-6 text-white/75"
                            : "mt-1 leading-6 text-(--text-secondary)"
                    }
                >
                    {value}
                </div>
            </div>
        </div>
    );
}
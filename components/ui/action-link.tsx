import type { ReactNode } from "react";

type ActionLinkProps = {
    href: string;
    children: ReactNode;
    variant?: "primary" | "secondary" | "inverse";
    className?: string;
};

export function ActionLink({
    href,
    children,
    variant = "primary",
    className = "",
}: ActionLinkProps) {
    const base =
        "inline-flex min-h-11 items-center justify-center rounded-[var(--radius-md)] gap-2 px-6 py-3 text-base font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";

    const variants = {
        primary:
            "bg-[var(--primary)] text-white hover:bg-[var(--primary-hover)] focus-visible:ring-[var(--primary)]",
        secondary:
            "border border-[var(--border)] bg-transparent text-[var(--text-primary)] hover:bg-[var(--surface)] focus-visible:ring-[var(--primary)]",
        inverse:
            "border border-white/60 bg-transparent text-white hover:bg-white/10 focus-visible:ring-white",
    };

    return (
        <a
            href={href}
            className={`${base} ${variants[variant]} ${className}`}
        >
            {children}
        </a>
    );
}
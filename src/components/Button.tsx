import Link from "next/link";
import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

type ButtonVariant = "primary" | "secondary" | "outline";

interface ButtonProps extends ComponentProps<"a"> {
  href: string;
  variant?: ButtonVariant;
  className?: string;
  children: React.ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-primary-navy text-white hover:bg-dark-navy",
  secondary:
    "bg-accent-blue text-white hover:bg-primary-navy",
  outline:
    "bg-transparent text-primary-navy border-2 border-primary-navy hover:bg-primary-navy hover:text-white",
};

export default function Button({
  href,
  variant = "primary",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center px-7 py-3.5 font-semibold text-sm rounded-[10px] transition-all duration-200",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
}

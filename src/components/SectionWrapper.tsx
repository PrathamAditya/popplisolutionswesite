import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  bgColor?: "white" | "light" | "navy";
  id?: string;
}

export default function SectionWrapper({
  children,
  className,
  bgColor = "white",
  id,
}: SectionWrapperProps) {
  const bgClasses = {
    white: "bg-white",
    light: "bg-section-bg",
    navy: "bg-primary-navy",
  };

  return (
    <section
      id={id}
      className={cn("py-20", bgClasses[bgColor], className)}
    >
      <div className="max-container">{children}</div>
    </section>
  );
}

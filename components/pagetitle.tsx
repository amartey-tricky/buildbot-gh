import { cn } from "../util/utils";

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  variant?: "default" | "primary" | "secondary";
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: React.ReactNode;
}

export function Heading({ variant = "default", as: Component = "h1", className, children, ...props }: HeadingProps) {
  const variants = {
    default: "text-4xl md:text-6xl font-bold text-gray-900",
    primary: "text-4xl md:text-6xl font-bold text-orange-600",
    secondary: "text-3xl font-semibold text-gray-800",
  };

  return (
    <Component className={cn(variants[variant], className)} {...props}>
      {children}
    </Component>
  );
}

interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  variant?: "default" | "primary" | "secondary" | "muted";
  size?: "sm" | "base" | "lg";
  children: React.ReactNode;
}

export function Text({ variant = "default", size = "base", className, children, ...props }: TextProps) {
  const variants = {
    default: "text-gray-600",
    primary: "text-orange-600",
    secondary: "text-gray-700",
    muted: "text-gray-500",
  };

  const sizes = {
    sm: "text-sm",
    base: "text-base",
    lg: "text-lg",
  };

  return (
    <p className={cn(variants[variant], sizes[size], className)} {...props}>
      {children}
    </p>
  );
}

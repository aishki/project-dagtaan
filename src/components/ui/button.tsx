import * as React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  size?: "default" | "sm" | "lg" | "icon";
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "default",
      size = "default",
      asChild = false,
      ...props
    },
    ref
  ) => {
    // Variant classes
    let variantClasses = "";
    switch (variant) {
      case "default":
        variantClasses =
          "bg-primary text-primary-foreground hover:bg-primary/90";
        break;
      case "destructive":
        variantClasses =
          "bg-destructive text-destructive-foreground hover:bg-destructive/90";
        break;
      case "outline":
        variantClasses =
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground";
        break;
      case "secondary":
        variantClasses =
          "bg-secondary text-secondary-foreground hover:bg-secondary/80";
        break;
      case "ghost":
        variantClasses = "hover:bg-accent hover:text-accent-foreground";
        break;
      case "link":
        variantClasses = "text-primary underline-offset-4 hover:underline";
        break;
    }

    // Size classes
    let sizeClasses = "";
    switch (size) {
      case "default":
        sizeClasses = "h-10 px-4 py-2";
        break;
      case "sm":
        sizeClasses = "h-9 rounded-md px-3";
        break;
      case "lg":
        sizeClasses = "h-11 rounded-md px-8";
        break;
      case "icon":
        sizeClasses = "h-10 w-10";
        break;
    }

    const baseClasses = `inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${variantClasses} ${sizeClasses} ${className}`;

    if (asChild) {
      // When used as a child, we'll let the parent component handle rendering
      // This is a simplified approach - in a real component you might use a Slot component
      return <button className={baseClasses} ref={ref} {...props} />;
    }

    return <button className={baseClasses} ref={ref} {...props} />;
  }
);
Button.displayName = "Button";

export { Button };

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

export function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const base = "btn";
  const variants = {
    primary:
      "bg-primary text-white hover:bg-secondary dark:bg-secondary dark:hover:bg-primary",
    secondary:
      "bg-secondary text-white hover:bg-primary dark:bg-primary dark:hover:bg-secondary",
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}

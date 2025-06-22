type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

export function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  // Modern, sleek style handled by .btn in index.css
  return (
    <button className={`btn ${className}`} {...props}>
      {children}
    </button>
  );
}

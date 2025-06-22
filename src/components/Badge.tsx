type BadgeProps = {
  label: string;
  variant?: "info" | "success" | "warning";
};

export function Badge({ label, variant = "info" }: BadgeProps) {
  return <span className={`badge badge-${variant}`}>{label}</span>;
}

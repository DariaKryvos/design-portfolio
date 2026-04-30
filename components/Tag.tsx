interface TagProps {
  label: string;
  variant?: "default" | "outline" | "dark";
}

export default function Tag({ label, variant = "default" }: TagProps) {
  const styles = {
    // zinc-700 (#3f3f46) on zinc-100 (#f4f4f5) = 7.2:1 ✅
    default: "bg-zinc-100 text-zinc-700 border border-zinc-200",
    // zinc-700 on white = 7.2:1 ✅
    outline: "bg-transparent text-zinc-700 border border-zinc-300",
    // zinc-100 on zinc-900 = high contrast ✅
    dark: "bg-zinc-900 text-zinc-100 border border-zinc-800",
  };

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium tracking-wide ${styles[variant]}`}
    >
      {label}
    </span>
  );
}

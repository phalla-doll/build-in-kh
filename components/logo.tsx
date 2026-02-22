import { cn } from '@/lib/utils';

interface LogoProps extends React.ComponentProps<'svg'> {
  variant?: 'default' | 'inverted' | 'neon';
}

export function Logo({ className, variant = 'default', ...props }: LogoProps) {
  let bgClass = "fill-black";
  let fgClass = "fill-[#D4F800]";

  if (variant === 'inverted') {
    bgClass = "fill-white";
    fgClass = "fill-black";
  } else if (variant === 'neon') {
    bgClass = "fill-[#D4F800]";
    fgClass = "fill-black";
  }

  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-8 w-8", className)}
      {...props}
    >
      <rect width="32" height="32" rx="0" className={bgClass} />
      <path
        d="M19 4L10 17H18L13 28L22 15H14L19 4Z"
        className={fgClass}
      />
    </svg>
  );
}

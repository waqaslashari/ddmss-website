type ArrowIconProps = {
  className?: string;
};

export function ArrowIcon({ className }: ArrowIconProps) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 16 16" fill="none">
      <path
        d="M3 8h9M8.5 4.5 12 8l-3.5 3.5"
        stroke="currentColor"
        strokeLinecap="square"
      />
    </svg>
  );
}

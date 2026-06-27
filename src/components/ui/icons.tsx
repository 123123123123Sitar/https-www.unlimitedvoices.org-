import type { SVGProps } from "react";

/** Minimal stroked line icons — no emoji, no clipart. 1.5px stroke, currentColor. */
type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function Base({ size = 18, children, ...props }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export const ArrowRight = (p: IconProps) => (
  <Base {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </Base>
);

export const Check = (p: IconProps) => (
  <Base {...p}>
    <path d="M4 12.5 9 17.5 20 6.5" />
  </Base>
);

export const Dash = (p: IconProps) => (
  <Base {...p}>
    <path d="M6 12h12" />
  </Base>
);

export const Sun = (p: IconProps) => (
  <Base {...p}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
  </Base>
);

export const Moon = (p: IconProps) => (
  <Base {...p}>
    <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
  </Base>
);

export const Menu = (p: IconProps) => (
  <Base {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </Base>
);

export const Close = (p: IconProps) => (
  <Base {...p}>
    <path d="M6 6l12 12M18 6L6 18" />
  </Base>
);

export const Sparkle = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 3v18M3 12h18" />
    <path d="M6.5 6.5l11 11M17.5 6.5l-11 11" opacity={0.4} />
  </Base>
);

export const Globe = (p: IconProps) => (
  <Base {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
  </Base>
);

export const Heart = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 20s-7-4.4-9.2-8.5C1.3 8.4 3 5 6.2 5c1.9 0 3.1 1 3.8 2 0.7-1 1.9-2 3.8-2 3.2 0 4.9 3.4 3.4 6.5C19 15.6 12 20 12 20Z" />
  </Base>
);

export const Users = (p: IconProps) => (
  <Base {...p}>
    <circle cx="9" cy="8" r="3" />
    <path d="M3 20a6 6 0 0 1 12 0M16 5.5a3 3 0 0 1 0 5.4M21 20a6 6 0 0 0-3.5-5.4" />
  </Base>
);

export const Cube = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3Z" />
    <path d="M12 3v18M4 7.5l8 4.5 8-4.5" />
  </Base>
);

export const Shield = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Z" />
    <path d="M9 12l2 2 4-4" />
  </Base>
);

export const Bolt = (p: IconProps) => (
  <Base {...p}>
    <path d="M13 3L5 13h6l-1 8 8-10h-6l1-8Z" />
  </Base>
);

export const Terminal = (p: IconProps) => (
  <Base {...p}>
    <rect x="3" y="4" width="18" height="16" rx="2" />
    <path d="M7 9l3 3-3 3M13 15h4" />
  </Base>
);

export const Star = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 4l2.3 4.9 5.2.7-3.8 3.6.9 5.2L12 16.9 7.4 18.4l.9-5.2L4.5 9.6l5.2-.7L12 4Z" />
  </Base>
);

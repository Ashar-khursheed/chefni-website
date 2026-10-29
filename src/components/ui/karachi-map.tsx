import { cn } from "@/lib/utils";

/**
 * Illustrated map of Karachi in the brand colours, not a real map. The pins
 * mark the stockists listed by name beside it; they are not to scale.
 */
export function KarachiMap({ pins, className }: { pins: string[]; className?: string }) {
  // Spread the pins around the city centre so any number of stockists reads clearly.
  const spots = [
    [258, 118],
    [312, 96],
    [222, 152],
    [340, 150],
    [286, 176],
  ];

  return (
    <svg
      viewBox="0 0 480 280"
      role="img"
      aria-label={`Illustrated map of Karachi marking ${pins.join(", ")}`}
      className={cn("h-auto w-full", className)}
    >
      <rect width="480" height="280" fill="#f7f4f5" />
      {/* Arabian Sea along the south-west coast */}
      <path d="M0 196c46-6 84 6 118 28 30 20 66 30 104 26 44-5 74 6 102 30H0Z" fill="var(--color-mist)" />
      <path d="M0 196c46-6 84 6 118 28 30 20 66 30 104 26 44-5 74 6 102 30" fill="none" stroke="var(--color-sky)" strokeWidth="1.5" />
      {/* Roads */}
      <g fill="none" stroke="#e4dde0" strokeWidth="5" strokeLinecap="round">
        <path d="M30 60c80 20 150 30 240 40s150 14 200 10" />
        <path d="M120 20c20 60 60 110 120 140s90 60 110 110" />
        <path d="M380 10c-30 60-80 100-150 130s-100 50-130 70" />
      </g>
      <g fill="none" stroke="#ece6e8" strokeWidth="2.5" strokeLinecap="round">
        <path d="M60 120c70-4 140 8 210 30s130 30 190 26" />
        <path d="M250 10c-4 50 6 100 30 150" />
        <path d="M170 90c40 30 100 40 160 30" />
        <path d="M400 70c-20 40-20 90 10 140" />
        <path d="M90 170c40-30 90-50 150-50" />
      </g>
      <text x="262" y="148" textAnchor="middle" className="fill-ink font-sans" fontSize="15" fontWeight="600">
        Karachi
      </text>
      {pins.slice(0, spots.length).map((name, index) => {
        const [x, y] = spots[index];
        return (
          <g key={name} transform={`translate(${x - 10} ${y - 26})`}>
            <path d="M10 0a10 10 0 0 1 10 10c0 7.5-10 16-10 16S0 17.5 0 10A10 10 0 0 1 10 0Z" fill="var(--color-berry)" />
            <circle cx="10" cy="10" r="3.6" fill="var(--color-paper)" />
          </g>
        );
      })}
    </svg>
  );
}

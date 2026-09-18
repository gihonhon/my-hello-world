import type { CSSProperties } from "react";

const items: Record<string, { palette: string[]; pixels: string[] }> = {
  sword: {
    palette: ["transparent", "#183c39", "#65e3cf", "#c5fff0", "#976739", "#e0b778"],
    pixels: ["0000000000011110", "0000000000122310", "0000000001223100", "0000000012231000", "0000000122310000", "0000001223100000", "0001012231000000", "0012122310000000", "0001223100000000", "0001442100000000", "0014511210000000", "0145100100000000", "1451000000000000", "0110000000000000", "0000000000000000", "0000000000000000"],
  },
  gem: {
    palette: ["transparent", "#17464b", "#31b7b1", "#93f4df", "#d3fff2", "#287778"],
    pixels: ["0000000000000000", "0000111111110000", "0001334333321000", "0013433332225100", "0134333322225510", "0133333222255510", "0122222222255510", "0012222222555100", "0001222225551000", "0000122255510000", "0000012555100000", "0000001551000000", "0000000110000000", "0000000000000000", "0000000000000000", "0000000000000000"],
  },
  chest: {
    palette: ["transparent", "#302415", "#865529", "#b98443", "#e0b96b", "#e5e3cf"],
    pixels: ["0000000000000000", "0011111111111100", "0144444444444310", "0133333333333210", "0133333333333210", "0111115511111110", "0122225512222210", "0122221122222210", "0123333333332210", "0123333333332210", "0123333333332210", "0122222222222210", "0111111111111110", "0000000000000000", "0000000000000000", "0000000000000000"],
  },
  pickaxe: {
    palette: ["transparent", "#183c39", "#65e3cf", "#c5fff0", "#976739", "#e0b778"],
    pixels: ["0000111111100000", "0001233332210000", "0000111112221000", "0000000141222100", "0000001451122100", "0000014510122100", "0000145100012100", "0001451000012100", "0014510000001000", "0145100000000000", "1451000000000000", "0110000000000000", "0000000000000000", "0000000000000000", "0000000000000000", "0000000000000000"],
  },
  heart: {
    palette: ["transparent", "#331c17", "#cb423e", "#fa6960"],
    pixels: ["01100110", "13311221", "13222221", "12222221", "01222210", "00122100", "00011000", "00000000"],
  },
  face: {
    palette: ["transparent", "#20321d", "#618b43", "#7da852", "#344831", "#526f37"],
    pixels: ["11111111", "13323321", "13223321", "14424421", "15525521", "13255221", "12244221", "11111111"],
  },
};

export function PixelIcon({ name, className = "" }: { name: string; className?: string }) {
  const item = items[name] ?? items.gem;
  return (
    <svg viewBox={`0 0 ${item.pixels[0].length} ${item.pixels.length}`} className={`pixel-icon ${className}`} aria-hidden="true" shapeRendering="crispEdges">
      {item.pixels.flatMap((row, y) => [...row].map((pixel, x) => pixel !== "0" ? <rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" fill={item.palette[Number(pixel)]} /> : null))}
    </svg>
  );
}

export function Zombie({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="175 20 480 715"
      className={`zombie ${className}`}
      role="img"
      aria-label="Zombie Minecraft 3D sedang melangkah, dengan kedua tangan ke depan, baju turquoise, dan celana ungu"
      shapeRendering="geometricPrecision"
    >
      <path d="M258 699h175v10h24v12H242v-12h16z" fill="#172c1b" opacity=".28" />
      <g stroke="#17221b" strokeWidth="7" strokeLinejoin="miter">
        {/* The rear leg recedes behind the leading leg. */}
        <path d="m301 468 130 8-53 116-77-28-30-53z" fill="#454078" />
        <path d="m324 491 101-8-25 54-76 11z" fill="#5e5197" />
        <path d="m324 548 76-11-22 55-46 11-31-39z" fill="#31343c" />

        {/* Torso: the narrow left face gives the body depth. */}
        <path d="m256 240 26 2-8 232-23 10z" fill="#1b808c" />
        <path d="m282 242 167 13-14 232-161-13z" fill="#57bec8" />
        <path d="m327 245 81 7-1 22-25-2-1 23-32-2 1-23-24-2z" fill="#65874a" strokeWidth="4" />
        <path d="m275 439 121-1 1 22 18 1-1 25-140-12z" fill="#7360a3" strokeWidth="4" />
        <path d="m251 433 24 6-1 35-23 10z" fill="#493b74" strokeWidth="4" />

        {/* Forward-reaching right arm: top, shaded side, then fist. */}
        <path d="m449 255 29-5 153 34-88 10z" fill="#a4c573" />
        <path d="m449 255 94 39-12 93-88-38z" fill="#416a39" />
        <path d="m449 255 28 10-5 95-29-11z" fill="#228e9c" strokeWidth="4" />
        <path d="m543 294 88-10-15 94-85 9z" fill="#83ad52" />

        {/* Leading leg and a broad, visible shoe. */}
        <path d="m271 469 89-2 60 163-108 11-64-135z" fill="#7563af" />
        <path d="m248 506 64 135-6 58-40-86-19-60z" fill="#46376d" />
        <path d="m312 608 94-10 14 32-108 11-14-31z" fill="#a0a0a0" strokeWidth="5" />
        <path d="m312 641 108-11-19 65-95 4z" fill="#34353e" />
        <path d="m298 610 14 31-6 58-22-57z" fill="#56535d" strokeWidth="5" />

        {/* The other fist projects toward the viewer. */}
        <path d="m194 249 84-7 35 31-98 1z" fill="#b2ce83" />
        <path d="m194 249 21 25v95l-22-34z" fill="#456b3b" />
        <path d="m194 249 10 11-1 87-10-12z" fill="#42aeb8" strokeWidth="4" />
        <path d="m215 274 98-1-3 96h-95z" fill="#83ad52" />

        {/* The large cubic head has a single consistent perspective. */}
        <path d="m264 85 39-43-12 187-35 14z" fill="#365534" />
        <path d="m303 42 173 19-11 187-174-19z" fill="#82a950" />
        <path d="m303 42 173 19-3 48-31-4 1-19-51-5-1 18-61-5-1 18-30-3z" fill="#49673b" strokeWidth="4" />
        <path d="m299 109-12 12-2 43-10 7-3 33-13 5-3 34 35-14z" fill="#4c703d" strokeWidth="4" />
      </g>
      {/* Sparse block details stay legible at the smaller profile size. */}
      <path d="m315 128 32 3-1 9-32-3zM427 118l24 3-2 25-24-3z" fill="#8eb45d" />
      <path d="m318 137 54 5-1 27-54-5zM407 146l47 5-2 25-47-5z" fill="#171b20" stroke="#17221b" strokeWidth="3" />
      <path d="m371 166 34 4-1 27-34-3z" fill="#5d813d" />
      <path d="m291 207 54 5 1-20 25 2-1 19 20 3-1 22-98-9zM404 195l21 2-2 47-21-2z" fill="#52723c" stroke="#243723" strokeWidth="3" />
      <path d="m329 313 24 2-1 25-24-2zM397 341l28 2-2 38-14-1 1-23-14-1zM282 400l30 1-1 20-30-1z" fill="#3bafba" />
      <path d="m226 283 24-1v29l-24 1zM579 344l24-3-3 24-24 3z" fill="#719e48" />
      <path d="m310 506 25-1 8 21-25 2z" fill="#67549e" />
    </svg>
  );
}

export function ExperienceBar({ level, label }: { level: number; label: string }) {
  return <div className="experience-bar" role="meter" aria-label={label} aria-valuenow={level} aria-valuemin={0} aria-valuemax={100}><span style={{ "--level": `${level}%` } as CSSProperties} /></div>;
}

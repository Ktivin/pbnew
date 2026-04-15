import { ScrollFloat } from "@/components/landing/motion";

export function HeroPets() {
  return (
    <>
      <ScrollFloat
        className="absolute -left-6 top-10 hidden xl:block"
        distance={16}
        duration={7}
        xRange={[0, 46]}
        yRange={[0, 72]}
        rotateRange={[0, -8]}
      >
        <DogSticker />
      </ScrollFloat>
      <ScrollFloat
        className="absolute -right-4 top-0 hidden lg:block"
        delay={0.3}
        distance={12}
        duration={8}
        xRange={[0, -34]}
        yRange={[0, 88]}
        rotateRange={[0, 10]}
      >
        <CatSticker />
      </ScrollFloat>
      <ScrollFloat
        className="absolute bottom-0 left-10 hidden md:block"
        delay={0.6}
        distance={10}
        duration={6.5}
        xRange={[0, 18]}
        yRange={[0, -42]}
        rotateRange={[0, 6]}
      >
        <PawCluster />
      </ScrollFloat>
    </>
  );
}

export function SidePets() {
  return (
    <div className="pointer-events-none absolute inset-0">
      <ScrollFloat
        className="absolute -left-6 top-28 block sm:left-0 sm:top-24 xl:hidden"
        distance={9}
        duration={7}
        xRange={[0, 12]}
        yRange={[0, 46]}
        rotateRange={[0, -8]}
      >
        <PuppySticker className="h-[4.25rem] w-[4.25rem] opacity-40 sm:h-[5.25rem] sm:w-[5.25rem] sm:opacity-52" />
      </ScrollFloat>

      <ScrollFloat
        className="absolute -right-5 top-[22rem] block sm:right-0 sm:top-[20rem] xl:hidden"
        delay={0.25}
        distance={8}
        duration={7.8}
        xRange={[0, -12]}
        yRange={[0, 52]}
        rotateRange={[0, 8]}
      >
        <KittenSticker className="h-[4rem] w-[4rem] opacity-38 sm:h-[5rem] sm:w-[5rem] sm:opacity-52" />
      </ScrollFloat>

      <ScrollFloat
        className="absolute -left-4 top-[76rem] hidden sm:block xl:hidden"
        delay={0.5}
        distance={7}
        duration={7.2}
        xRange={[0, 10]}
        yRange={[0, 40]}
        rotateRange={[0, -5]}
      >
        <HealthBubble className="h-14 w-14 opacity-34" />
      </ScrollFloat>

      <div className="absolute inset-0 hidden xl:block">
      <ScrollFloat
        className="absolute left-2 top-24"
        distance={14}
        duration={7.2}
        xRange={[0, 22]}
        yRange={[0, 140]}
        rotateRange={[0, -10]}
      >
        <DogSticker className="h-28 w-28 opacity-54" />
      </ScrollFloat>

      <ScrollFloat
        className="absolute right-3 top-44"
        delay={0.25}
        distance={11}
        duration={8}
        xRange={[0, -18]}
        yRange={[0, 180]}
        rotateRange={[0, 9]}
      >
        <CatSticker className="h-24 w-24 opacity-52" />
      </ScrollFloat>

      <ScrollFloat
        className="absolute left-6 top-[55rem]"
        delay={0.5}
        distance={9}
        duration={6.6}
        xRange={[0, 14]}
        yRange={[0, 90]}
        rotateRange={[0, 6]}
      >
        <PawCluster className="h-16 w-16 opacity-32" />
      </ScrollFloat>

      <ScrollFloat
        className="absolute right-8 top-[78rem]"
        delay={0.8}
        distance={10}
        duration={7.4}
        xRange={[0, -12]}
        yRange={[0, 110]}
        rotateRange={[0, -5]}
      >
        <PawCluster className="h-14 w-14 opacity-26" />
      </ScrollFloat>

      <ScrollFloat
        className="absolute left-3 top-[108rem]"
        delay={0.35}
        distance={12}
        duration={7.8}
        xRange={[0, 24]}
        yRange={[0, 135]}
        rotateRange={[0, -7]}
      >
        <CatSticker className="h-20 w-20 opacity-42 drop-shadow-[0_12px_24px_rgba(17,24,39,0.08)]" />
      </ScrollFloat>

      <ScrollFloat
        className="absolute right-2 top-[144rem]"
        delay={0.55}
        distance={13}
        duration={8.6}
        xRange={[0, -20]}
        yRange={[0, 155]}
        rotateRange={[0, 8]}
      >
        <DogSticker className="h-24 w-24 opacity-38 drop-shadow-[0_12px_24px_rgba(17,24,39,0.08)]" />
      </ScrollFloat>

      <ScrollFloat
        className="absolute right-10 top-[40rem]"
        delay={0.32}
        distance={10}
        duration={7.7}
        xRange={[0, -16]}
        yRange={[0, 126]}
        rotateRange={[0, 9]}
      >
        <PuppySticker className="h-20 w-20 opacity-38 drop-shadow-[0_12px_24px_rgba(17,24,39,0.08)]" />
      </ScrollFloat>

      <ScrollFloat
        className="absolute left-10 top-[128rem]"
        delay={0.4}
        distance={11}
        duration={7.1}
        xRange={[0, 16]}
        yRange={[0, 118]}
        rotateRange={[0, -6]}
      >
        <KittenSticker className="h-20 w-20 opacity-42 drop-shadow-[0_12px_24px_rgba(17,24,39,0.08)]" />
      </ScrollFloat>

      <ScrollFloat
        className="absolute right-12 top-[174rem]"
        delay={0.68}
        distance={9}
        duration={8.1}
        xRange={[0, -18]}
        yRange={[0, 112]}
        rotateRange={[0, 6]}
      >
        <HealthBubble className="h-14 w-14 opacity-30" />
      </ScrollFloat>
      </div>
    </div>
  );
}

export function CarrierIllustration() {
  return (
    <svg viewBox="0 0 320 220" className="h-auto w-full" role="img" aria-label="Ілюстрація переноски та домашніх тварин">
      <defs>
        <linearGradient id="carrierBg" x1="0%" x2="100%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#F2FAFD" />
          <stop offset="100%" stopColor="#ffffff" />
        </linearGradient>
      </defs>
      <rect x="28" y="62" width="264" height="130" rx="28" fill="url(#carrierBg)" stroke="#1F5A4F" strokeOpacity="0.15" />
      <rect x="72" y="36" width="176" height="36" rx="18" fill="#ffffff" stroke="#1F5A4F" strokeOpacity="0.15" />
      <path d="M106 62c0-30 18-48 54-48s54 18 54 48" fill="none" stroke="#1F5A4F" strokeWidth="10" strokeLinecap="round" />
      <circle cx="118" cy="128" r="28" fill="#87CEEB" fillOpacity="0.24" />
      <circle cx="204" cy="128" r="32" fill="#F37483" fillOpacity="0.22" />
      <path d="M102 134c0-18 12-28 26-28s26 10 26 28v12H102v-12Z" fill="#1F5A4F" fillOpacity="0.1" />
      <path d="M186 138c0-22 16-34 34-34s34 12 34 34v10h-68v-10Z" fill="#1F5A4F" fillOpacity="0.1" />
      <circle cx="123" cy="126" r="6" fill="#1F5A4F" />
      <circle cx="210" cy="124" r="7" fill="#1F5A4F" />
      <path d="M113 156c6 8 18 8 24 0" stroke="#1F5A4F" strokeWidth="4" strokeLinecap="round" />
      <path d="M197 160c8 10 22 10 30 0" stroke="#1F5A4F" strokeWidth="4" strokeLinecap="round" />
      <path d="M92 108 82 90m44 18 12-18m63 16 12-20m28 22 16-18" stroke="#1F5A4F" strokeLinecap="round" strokeWidth="4" />
      <circle cx="54" cy="178" r="8" fill="#F37483" fillOpacity="0.32" />
      <circle cx="266" cy="80" r="10" fill="#87CEEB" fillOpacity="0.42" />
    </svg>
  );
}

function DogSticker({ className = "h-32 w-32 drop-shadow-[0_20px_40px_rgba(17,24,39,0.12)]" }) {
  return (
    <svg viewBox="0 0 170 150" className={className} role="img" aria-label="Ілюстрація собаки">
      <ellipse cx="84" cy="112" rx="52" ry="28" fill="#ffffff" />
      <path d="M46 78c0-24 18-42 40-42 20 0 36 14 40 34 10 2 18 10 18 22 0 13-10 24-24 24H70c-14 0-24-10-24-22V78Z" fill="#F7D8B5" />
      <circle cx="74" cy="76" r="5" fill="#0E2A26" />
      <circle cx="102" cy="76" r="5" fill="#0E2A26" />
      <path d="M84 84c6 0 10 4 10 8 0 6-6 10-10 10s-10-4-10-10c0-4 4-8 10-8Z" fill="#1F5A4F" />
      <path d="M48 56c-10 2-20-6-22-18-2-10 2-20 12-26 8 6 14 16 14 28 0 6-2 10-4 16Z" fill="#D6B088" />
      <path d="M122 58c10 0 20-8 22-20 0-10-4-18-14-24-8 8-12 18-12 28 0 6 0 10 4 16Z" fill="#D6B088" />
      <path d="M70 114 66 134m36-20 4 20" stroke="#1F5A4F" strokeWidth="5" strokeLinecap="round" />
      <path d="M130 102c16 0 28 10 28 22" stroke="#D6B088" strokeWidth="8" strokeLinecap="round" />
    </svg>
  );
}

function CatSticker({ className = "h-28 w-28 drop-shadow-[0_20px_40px_rgba(17,24,39,0.12)]" }) {
  return (
    <svg viewBox="0 0 170 150" className={className} role="img" aria-label="Ілюстрація кота">
      <ellipse cx="84" cy="116" rx="48" ry="24" fill="#ffffff" />
      <path d="M52 108c0-26 16-50 34-50 18 0 34 22 34 50H52Z" fill="#B9DFF1" />
      <path d="M54 62 70 34l12 26M104 60l12-26 18 30" fill="#B9DFF1" />
      <circle cx="76" cy="84" r="4.5" fill="#0E2A26" />
      <circle cx="102" cy="84" r="4.5" fill="#0E2A26" />
      <path d="M84 90c4 0 8 2 8 6s-4 8-8 8-8-4-8-8 4-6 8-6Z" fill="#F37483" />
      <path d="M56 92H38m18 10H36m72-10h20m-20 10h22" stroke="#1F5A4F" strokeWidth="3" strokeLinecap="round" />
      <path d="M114 102c20 2 30 14 28 32" stroke="#B9DFF1" strokeWidth="7" strokeLinecap="round" />
    </svg>
  );
}

function PawCluster({ className = "h-24 w-24 opacity-80" }) {
  return (
    <svg viewBox="0 0 160 120" className={className} role="img" aria-label="Декоративні лапки">
      <g fill="#F37483" fillOpacity="0.2">
        <circle cx="46" cy="36" r="10" />
        <circle cx="68" cy="24" r="8" />
        <circle cx="92" cy="32" r="9" />
        <circle cx="110" cy="50" r="8" />
        <path d="M44 62c0-16 12-28 28-28s30 12 30 28c0 18-14 32-30 32S44 80 44 62Z" />
      </g>
    </svg>
  );
}

function PuppySticker({ className = "h-28 w-28 drop-shadow-[0_20px_40px_rgba(17,24,39,0.12)]" }) {
  return (
    <svg viewBox="0 0 170 150" className={className} role="img" aria-label="Ілюстрація цуценяти">
      <ellipse cx="86" cy="118" rx="46" ry="20" fill="#ffffff" />
      <path d="M54 102c0-28 16-48 36-48s36 18 36 48H54Z" fill="#F7E6C9" />
      <path d="M50 72c-8 0-16-8-16-20 0-10 4-18 12-24 8 6 14 18 14 28 0 8-4 14-10 16Z" fill="#D7B286" />
      <path d="M120 72c8 0 18-8 18-20 0-10-4-18-14-24-8 8-12 18-12 28 0 8 2 14 8 16Z" fill="#D7B286" />
      <circle cx="76" cy="88" r="4.5" fill="#0E2A26" />
      <circle cx="100" cy="88" r="4.5" fill="#0E2A26" />
      <path d="M88 93c4 0 8 4 8 7 0 5-4 8-8 8s-8-3-8-8c0-3 4-7 8-7Z" fill="#1F5A4F" />
      <circle cx="64" cy="102" r="5" fill="#F4B5BD" fillOpacity="0.7" />
      <circle cx="112" cy="102" r="5" fill="#F4B5BD" fillOpacity="0.7" />
      <path d="M66 116 62 130m44-14 4 14" stroke="#1F5A4F" strokeWidth="5" strokeLinecap="round" />
      <path d="M122 104c14 2 22 10 24 22" stroke="#D7B286" strokeWidth="7" strokeLinecap="round" />
    </svg>
  );
}

function KittenSticker({ className = "h-[6.5rem] w-[6.5rem] drop-shadow-[0_20px_40px_rgba(17,24,39,0.12)]" }) {
  return (
    <svg viewBox="0 0 170 150" className={className} role="img" aria-label="Ілюстрація кошеняти">
      <ellipse cx="84" cy="118" rx="42" ry="20" fill="#ffffff" />
      <path d="M56 108c0-24 14-46 30-46 18 0 30 20 30 46H56Z" fill="#DDF0FA" />
      <path d="M58 72 72 44l10 24M100 68l16-24 12 28" fill="#DDF0FA" />
      <circle cx="74" cy="88" r="4" fill="#0E2A26" />
      <circle cx="98" cy="88" r="4" fill="#0E2A26" />
      <path d="M86 94c4 0 8 2 8 6s-4 8-8 8-8-4-8-8 4-6 8-6Z" fill="#F37483" />
      <path d="M56 96H40m16 10H38m56-10h18m-18 10h20" stroke="#1F5A4F" strokeWidth="3" strokeLinecap="round" />
      <path d="M112 104c16 4 24 14 22 28" stroke="#DDF0FA" strokeWidth="7" strokeLinecap="round" />
    </svg>
  );
}

function HealthBubble({ className = "h-[4.5rem] w-[4.5rem] opacity-75" }) {
  return (
    <svg viewBox="0 0 120 120" className={className} role="img" aria-label="Декоративна медична бульбашка">
      <defs>
        <linearGradient id="healthBubbleBg" x1="0%" x2="100%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#F2FAFD" />
        </linearGradient>
      </defs>
      <circle cx="60" cy="60" r="42" fill="url(#healthBubbleBg)" stroke="#1F5A4F" strokeOpacity="0.14" />
      <circle cx="60" cy="60" r="23" fill="#87CEEB" fillOpacity="0.2" />
      <path d="M60 40v40M40 60h40" stroke="#1F5A4F" strokeWidth="7" strokeLinecap="round" />
      <circle cx="89" cy="36" r="8" fill="#F37483" fillOpacity="0.26" />
    </svg>
  );
}

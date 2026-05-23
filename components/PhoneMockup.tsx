import { ReactNode } from "react";

type PhoneMockupProps = {
  children: ReactNode;
  className?: string;
};

export function PhoneMockup({ children, className = "" }: PhoneMockupProps) {
  return (
    <div className={`relative ${className}`}>
      {/* side buttons */}
      <span className="pointer-events-none absolute -left-[3px] top-24 h-8 w-[3px] rounded-l-sm bg-kalma-deep/80" />
      <span className="pointer-events-none absolute -left-[3px] top-40 h-12 w-[3px] rounded-l-sm bg-kalma-deep/80" />
      <span className="pointer-events-none absolute -right-[3px] top-32 h-16 w-[3px] rounded-r-sm bg-kalma-deep/80" />

      <div className="relative mx-auto w-[240px] rounded-[2.6rem] border-[7px] border-kalma-deep bg-kalma-deep p-2 shadow-phone sm:w-[268px]">
        {/* highlight reflection */}
        <span className="pointer-events-none absolute inset-0 rounded-[2.6rem] bg-gradient-to-br from-white/15 via-transparent to-transparent" />
        {/* notch */}
        <div className="absolute left-1/2 top-[10px] z-20 flex h-[22px] w-24 -translate-x-1/2 items-center justify-end rounded-full bg-black px-2">
          <span className="h-1.5 w-1.5 rounded-full bg-kalma-deep/40 ring-1 ring-white/10" />
        </div>
        <div className="relative overflow-hidden rounded-[2.05rem] bg-white">
          {children}
        </div>
        {/* home indicator */}
        <span className="pointer-events-none absolute bottom-1.5 left-1/2 h-1 w-20 -translate-x-1/2 rounded-full bg-white/60" />
      </div>
    </div>
  );
}

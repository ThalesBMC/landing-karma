export function PanicMockupContent() {
  return (
    <div className="gradient-primary flex min-h-[420px] flex-col px-4 pb-6 pt-10 text-white">
      <p className="text-center text-xs opacity-80">
        You&apos;ve launched panic support. Follow the prompts below.
      </p>
      <h3 className="font-display mt-8 text-center text-2xl font-semibold">
        How are you feeling?
      </h3>
      <div className="mt-auto space-y-3">
        <div className="rounded-2xl bg-white/15 p-3 backdrop-blur-sm">
          <p className="text-xs opacity-70">Not good.</p>
          <button className="mt-1 w-full rounded-full bg-white/90 py-2.5 text-sm font-semibold text-kalma-deep">
            Help me feel okay
          </button>
        </div>
        <div className="rounded-2xl bg-white/15 p-3 backdrop-blur-sm">
          <p className="text-xs opacity-70">Confident.</p>
          <button className="mt-1 w-full rounded-full bg-orange-400 py-2.5 text-sm font-semibold text-white">
            Let&apos;s do this
          </button>
        </div>
      </div>
    </div>
  );
}

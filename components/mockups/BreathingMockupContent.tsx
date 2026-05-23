export function BreathingMockupContent() {
  return (
    <div className="flex min-h-[420px] flex-col items-center bg-kalma-soft px-4 pb-6 pt-10">
      <p className="text-sm font-medium text-kalma-action">Box Breathing</p>
      <div className="relative mt-10 flex h-40 w-40 items-center justify-center">
        <div className="absolute inset-0 rounded-full border-4 border-kalma-primary/40" />
        <div className="absolute inset-4 rounded-full border-4 border-kalma-action/50" />
        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-lg">
          <span className="font-display text-3xl font-bold text-kalma-deep">4</span>
        </div>
      </div>
      <p className="mt-8 text-center text-sm text-kalma-muted">Breathe in slowly...</p>
      <div className="mt-auto flex w-full gap-2">
        {["In", "Hold", "Out", "Hold"].map((step, i) => (
          <div
            key={`${step}-${i}`}
            className={`flex-1 rounded-lg py-2 text-center text-xs font-medium ${
              i === 0 ? "bg-kalma-action text-white" : "bg-white text-kalma-muted"
            }`}
          >
            {step}
          </div>
        ))}
      </div>
    </div>
  );
}

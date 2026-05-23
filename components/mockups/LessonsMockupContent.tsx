const lessons = [
  { icon: "🧠", title: "Understanding anxiety", locked: false },
  { icon: "🌿", title: "Exposure exercises", locked: true },
  { icon: "🍎", title: "Diet & anxiety", locked: true },
  { icon: "📱", title: "Social media & anxiety", locked: true },
];

export function LessonsMockupContent() {
  return (
    <div className="min-h-[420px] bg-kalma-surface px-4 pb-6 pt-8">
      <div className="rounded-2xl bg-kalma-learn/20 px-4 py-3">
        <p className="text-xs font-semibold uppercase tracking-wide text-kalma-deep/70">Learn</p>
        <p className="font-display mt-1 text-lg font-bold text-kalma-deep">Short Term Lessons</p>
      </div>
      <ul className="mt-4 space-y-2">
        {lessons.map((lesson) => (
          <li
            key={lesson.title}
            className="flex items-center justify-between rounded-xl bg-white px-3 py-3 shadow-sm"
          >
            <div className="flex items-center gap-3">
              <span className="text-lg">{lesson.icon}</span>
              <span className="text-sm font-medium text-kalma-deep">{lesson.title}</span>
            </div>
            {lesson.locked && <span className="text-xs text-kalma-muted">🔒</span>}
          </li>
        ))}
      </ul>
    </div>
  );
}

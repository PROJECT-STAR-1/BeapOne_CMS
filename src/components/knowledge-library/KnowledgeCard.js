import { Download } from "lucide-react";

const COLOR_MAP = {
  indigo: {
    strip: "bg-indigo-700",
    tag: "text-indigo-700 bg-indigo-50",
    button: "bg-indigo-700 hover:bg-indigo-800",
  },
  emerald: {
    strip: "bg-emerald-600",
    tag: "text-emerald-700 bg-emerald-50",
    button: "bg-emerald-600 hover:bg-emerald-700",
  },
  rose: {
    strip: "bg-rose-600",
    tag: "text-rose-700 bg-rose-50",
    button: "bg-rose-600 hover:bg-rose-700",
  },
  amber: {
    strip: "bg-amber-500",
    tag: "text-amber-700 bg-amber-50",
    button: "bg-amber-500 hover:bg-amber-600",
  },
};

export default function KnowledgeCard({
  tag,
  title,
  description,
  button,
  color,
}) {
  const styles = COLOR_MAP[color];

  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
      {/* Top accent strip */}
      <div className={`h-2 w-full ${styles.strip}`} />

      {/* Card body */}
      <div className="flex h-full flex-col justify-between p-6">
        <div>
          <span
            className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${styles.tag}`}
          >
            {tag}
          </span>

          <h3 className="mt-4 text-lg font-semibold text-gray-900 leading-snug">
            {title}
          </h3>

          <p className="mt-3 text-sm text-gray-500 leading-relaxed">
            {description}
          </p>
        </div>

        <button
          className={`mt-8 inline-flex w-fit items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-white transition ${styles.button}`}
        >
          {button}
          <Download className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

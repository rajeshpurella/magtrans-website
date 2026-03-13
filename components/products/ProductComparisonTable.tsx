export interface ProductComparisonRow {
  name: string;
  measurementRange?: string;
  accuracy?: string;
  temperatureRange?: string;
  applications?: string;
}

export interface ProductComparisonTableProps {
  rows: ProductComparisonRow[];
  caption?: string;
}

export function ProductComparisonTable({
  rows,
  caption,
}: ProductComparisonTableProps) {
  if (!rows || rows.length === 0) return null;

  return (
    <div className="mt-10 overflow-x-auto rounded-2xl border border-zinc-200 bg-white">
      <table className="min-w-full text-left text-xs sm:text-sm text-zinc-800">
        {caption ? (
          <caption className="px-4 py-3 text-left text-sm font-medium text-zinc-800 bg-zinc-50 border-b border-zinc-200">
            {caption}
          </caption>
        ) : null}
        <thead className="bg-zinc-50">
          <tr>
            <th className="px-4 py-3 font-semibold">Product</th>
            <th className="px-4 py-3 font-semibold">Measurement Range</th>
            <th className="px-4 py-3 font-semibold">Accuracy</th>
            <th className="px-4 py-3 font-semibold">Temperature Range</th>
            <th className="px-4 py-3 font-semibold">Typical Applications</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-zinc-200">
          {rows.map((row) => (
            <tr key={row.name}>
              <th className="px-4 py-3 font-semibold text-zinc-900 align-top">
                {row.name}
              </th>
              <td className="px-4 py-3 align-top text-zinc-700">
                {row.measurementRange ?? "—"}
              </td>
              <td className="px-4 py-3 align-top text-zinc-700">
                {row.accuracy ?? "—"}
              </td>
              <td className="px-4 py-3 align-top text-zinc-700">
                {row.temperatureRange ?? "—"}
              </td>
              <td className="px-4 py-3 align-top text-zinc-700">
                {row.applications ?? "—"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


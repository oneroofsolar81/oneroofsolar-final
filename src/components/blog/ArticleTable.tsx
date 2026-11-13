export function ArticleTable({
  caption,
  headers,
  rows,
}: {
  caption?: string;
  headers: string[];
  rows: string[][];
}) {
  return (
    <div className="my-10">
      {caption && (
        <h3 className="text-[1.2rem] sm:text-[1.35rem] font-semibold leading-[1.3] text-slate-900 mb-4 normal-case">
          {caption}
        </h3>
      )}
      <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="bg-[#0A1118] text-white">
              {headers.map((h, i) => (
                <th key={i} className="px-4 py-3 font-bold whitespace-nowrap">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, ri) => (
              <tr key={ri} className={ri % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                {row.map((cell, ci) => (
                  <td
                    key={ci}
                    className={`px-4 py-3 align-top border-t border-slate-100 ${
                      ci === 0 ? "font-bold text-slate-900" : "text-slate-600"
                    }`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

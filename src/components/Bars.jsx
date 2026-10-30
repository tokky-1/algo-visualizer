function barColour(i, highlight, type, marks) {
  if (type === "done") return "#3f22ec";
  if (type === "found" && marks[i] === "mid") return "#22c55e";
  if (type === "not-found") return "#ef4444";

  if (marks[i] === "low") return "#60a5fa";
  if (marks[i] === "hi") return "#c084fc";
  if (marks[i] === "mid") return "#f59e0b";
  
  if (!highlight.includes(i)) return "lightgrey";
  if (type === "compare") return "#f4b5de";
  if (type === "swap") return "#03e29d";
  return "lightgrey";
}

export function Bars({ array, highlight = [], marks = {}, type }) {
  const max = Math.max(...array);
  return (
    <div style={{ display: "flex", alignItems: "flex-end", gap: 4, height: 300 }}>
      {array.map((value, i) => (
        <div
          key={i}
          style={{
            height:(value / max) * 300,
            width: 40,
            background: barColour(i, highlight, type, marks),
          }}
        />
      ))}
    </div>
  );
}
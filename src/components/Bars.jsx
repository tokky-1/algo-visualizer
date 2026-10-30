function barColour(i, highlight, type) {
                if (type === "done") return "#3f22ec"; 
                if (!highlight.includes(i)) return "lightgrey";   
                if (type === "compare") return "#f4b5de";            
                if (type === "swap") return "#03e29d";                            
                return "lightgrey";                               
                }
                
export function Bars({ array, highlight, type }) {
  return (
    <div style={{ display: "flex", alignItems: "flex-end", gap: 4, height: 300 }}>
      {array.map((value, i) => (
        <div
          key={i}
          style={{
            height: value * 30,
            width: 40,
            background:barColour(i, highlight, type) ,
            
          }}
          
        />
      ))}
    </div>
  );
}
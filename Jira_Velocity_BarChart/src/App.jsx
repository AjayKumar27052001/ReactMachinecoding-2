import BarChart from "./components/BarChart";
import { useState } from "react";
function App() {
  const [showChart, setShowChart] = useState(true);
  return (
    <main className="container">
      <button
        className="container-button"
        onClick={() => setShowChart((prev) => !prev)}
      >
        Toggle
      </button>

      <div>{showChart && <BarChart />}</div>
    </main>
  );
}

export default App;

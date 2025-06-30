import { Dashboard } from "./Pages/Dashboard.tsx";
import { Home } from "./Pages/Home.tsx";
import { Assets } from "./Pages/Assets/Assets.tsx";
import { AddAsset } from "./Pages/Assets/AddAsset.tsx";
import { Income } from "./Pages/Income/Income.tsx";
import { AddIncome } from  "./Pages/Income/AddIncome.tsx";
import { Goals } from "./Pages/Goals/Goals.tsx";
import { AddGoal } from "./Pages/Goals/AddGoal.tsx";

import { HashRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="/dashboard/Assets" element={<Assets />} />
          <Route path="/dashboard/AddAsset" element={<AddAsset />} />
          <Route path="/dashboard/Goals" element={<Goals />} />
          <Route path="/dashboard/AddGoal" element={<AddGoal />} />
          <Route path="/dashboard/Income" element={<Income />} />
          <Route path="/dashboard/AddIncome" element={<AddIncome />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
